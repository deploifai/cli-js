import { Command, flags } from "@oclif/command";
import createDirectory from "../utils/createDirectory";

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

    createDirectory(process.cwd(), args.project_name);
  }
}
