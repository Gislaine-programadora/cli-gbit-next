import inquirer from "inquirer";

export default async function questions() {

    return await inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "Project name:",
            default: "my-next-app"
        },
        {
            type: "list",
            name: "template",
            message: "Choose a template:",
            choices: [
                "Dashboard",
                "Ecommerce",
                "SaaS",
                "CRM",
                "ERP",
                "Vitrine Gbit",
                "Blank Project"
            ]
        }
    ]);

}