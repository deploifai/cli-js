import { Command, flags } from "@oclif/command";
import createDirectory from "../utils/createDirectory";
import { clone } from "../utils/getTemplate";
import hostedGitInfo from "hosted-git-info";

export default class Init extends Command {
  static description = "Create a new project that can be deployed on Deploifai";

  static examples = [`$ deploifai init`, `$ deploifai init project-name`];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "project_name",
      required: false,
      description: "Name of the project folder",
      default: "deploifai_app",
    },
  ];

  async run() {
    const { args } = this.parse(Init);
    this.log(`Creating the project ${args.project_name}`);

    const projectDir = createDirectory(process.cwd(), args.project_name);
    const templateLink = hostedGitInfo.fromUrl(
      "https://github.com/deploifai/basic-starter-template.git"
    );
    if (templateLink) {
      clone(templateLink, projectDir);
    }
  }
}
