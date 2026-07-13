import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapa: nome mostrado no prompt -> pasta dentro de /templates
const TEMPLATE_MAP = {
  Dashboard: "dashboard",
  Ecommerce: "ecommerce",
  SaaS: "saas",
  CRM: "crm",
  ERP: "erp",
  "Vitrine Gbit": "showcase",
  "Blank Project": null, // null = mantém o page.tsx padrão do create-next-app
};

function copyDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.cpSync(srcDir, destDir, { recursive: true });
}

export default function copyTemplate(templateLabel, projectName) {
  const folderName = TEMPLATE_MAP[templateLabel];

  // Template "Blank" ou não mapeado: não mexe em nada
  if (!folderName) {
    return;
  }

  const templatesRoot = path.join(__dirname, "..", "templates");
  const templatePath = path.join(templatesRoot, folderName);
  const sharedPath = path.join(templatesRoot, "_shared");
  const projectPath = path.join(process.cwd(), projectName);

  if (!fs.existsSync(templatePath)) {
    console.log(
      chalk.yellow(
        `⚠ Template "${templateLabel}" ainda não tem arquivos prontos. Mantendo o padrão do Next.js.`
      )
    );
    return;
  }

  console.log(chalk.cyan(`→ Aplicando template "${templateLabel}"...`));

  const destComponents = path.join(projectPath, "src", "components");

  // 1. Copia componentes compartilhados (Clock, CurrencyTicker, etc.)
  copyDir(path.join(sharedPath, "components"), destComponents);

  // 2. Copia componentes específicos do template (pode sobrescrever nomes iguais)
  copyDir(path.join(templatePath, "components"), destComponents);

  // 3. Copia rotas de API do template (ex: api/pix/route.ts) para src/app/api
  const srcApi = path.join(templatePath, "api");
  const destApi = path.join(projectPath, "src", "app", "api");
  copyDir(srcApi, destApi);

  // 4. Copia page.tsx para src/app/page.tsx
  const srcPage = path.join(templatePath, "page.tsx");
  const destPage = path.join(projectPath, "src", "app", "page.tsx");
  if (fs.existsSync(srcPage)) {
    fs.copyFileSync(srcPage, destPage);
  }

  // 5. Cria .env.local a partir do env.example do template (se existir)
  const srcEnv = path.join(templatePath, "env.example");
  const destEnv = path.join(projectPath, ".env.local");
  if (fs.existsSync(srcEnv) && !fs.existsSync(destEnv)) {
    fs.copyFileSync(srcEnv, destEnv);
    console.log(
      chalk.yellow(
        `⚠ Criado .env.local — configure suas chaves antes de usar recursos como pagamento real.`
      )
    );
  }

  // 6. Instala dependências extras exigidas pelo template (ex: mercadopago)
  const depsFile = path.join(templatePath, "extra-deps.json");
  if (fs.existsSync(depsFile)) {
    const deps = JSON.parse(fs.readFileSync(depsFile, "utf-8"));
    if (Array.isArray(deps) && deps.length > 0) {
      console.log(chalk.cyan(`→ Instalando dependências extras: ${deps.join(", ")}`));
      try {
        execSync(`npm install ${deps.join(" ")}`, {
          cwd: projectPath,
          stdio: "inherit",
        });
      } catch {
        console.log(
          chalk.red(`✖ Falha ao instalar dependências extras. Rode manualmente: npm install ${deps.join(" ")}`)
        );
      }
    }
  }

  console.log(chalk.green(`✔ Template "${templateLabel}" aplicado!`));
}