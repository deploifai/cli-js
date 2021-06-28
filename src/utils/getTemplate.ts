import { execSync } from "child_process";
import execa from "execa";
import hostedGitInfo from "hosted-git-info";
import fs from "fs-extra";
import sysPath from "path";

const spawnWithArgs = (
  file: string,
  args: Array<string>,
  options?: execa.Options
): execa.ExecaChildProcess =>
  execa(file, args, { stdio: `inherit`, preferLocal: false, ...options });

const spawn = (
  cmd: string,
  options?: execa.Options
): execa.ExecaChildProcess => {
  const [file, ...args] = cmd.split(/\s+/);
  return spawnWithArgs(file, args, options);
};

export const gitInit = async (
  rootPath: string
): Promise<execa.ExecaReturnBase<string>> => {
  console.log(`Initialising git in ${rootPath}`);

  return await spawn(`git init`, { cwd: rootPath });
};

const createInitialGitCommit = async (
  rootPath: string,
  starterUrl: string
): Promise<void> => {
  console.log(`Create initial git commit in ${rootPath}`);

  await spawn(`git add -A`, { cwd: rootPath });

  try {
    execSync(`git commit -m "Initial commit from deploifai: (${starterUrl})"`, {
      cwd: rootPath,
    });
  } catch {
    // Remove git support if initial commit fails
    console.log(`Initial git commit failed - removing git support\n`);
    fs.removeSync(sysPath.join(rootPath, `.git`));
  }
};

export const clone = async (link: hostedGitInfo, rootPath: string) => {
  console.log(`Creating new file from git repository`);
  const url = link.https({ noCommittish: true, noGitPlus: true });

  const branch: string[] = [];

  const args = [`clone`, ...branch, url, rootPath].filter((arg) =>
    Boolean(arg)
  );

  await spawnWithArgs("git", args);
  console.log("Cloned template from git rempository");

  await fs.removeSync(sysPath.join(rootPath, ".git"));
  await gitInit(rootPath);
  await createInitialGitCommit(rootPath, url);
};
