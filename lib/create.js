import { execSync } from "child_process";
import chalk from "chalk";
import questions from "./questions.js";
import copyTemplate from "./copyTemplate.js";

export default async function createProject() {
  const answers = await questions();

  console.log("");
  console.log(chalk.cyan("→ Creating Next.js project..."));
  console.log(chalk.gray("  (using npm)"));
  console.log("");

  try {
    execSync(
      `npx create-next-app@latest ${answers.projectName} --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --disable-git --no-agents-md`,
      { stdio: "inherit" }
    );

    // Aplica os arquivos do template escolhido por cima do projeto gerado
    copyTemplate(answers.template, answers.projectName);

    console.log("");
    console.log(chalk.green("✔ Next.js project created!"));
    console.log("");
    console.log(chalk.green("Project:"), answers.projectName);
    console.log(chalk.cyan("Template:"), answers.template);
    console.log("");
    console.log(chalk.yellow("Next Step"));
    console.log("");
    console.log(`cd ${answers.projectName}`);
    console.log("npm run dev");
    console.log("");
  } catch (error) {
    console.log(chalk.red("✖ Error creating project."));
    console.log(error);
  }
}