import * as fs from "fs";
import * as path from "path";

function createDirectory(parent: string, directory_name: string) {
  if (!fs.existsSync(parent)) {
    throw "Parent directory does not exist";
  }

  fs.mkdirSync(path.join(parent, directory_name));
}

export default createDirectory;
