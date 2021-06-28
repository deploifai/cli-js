# cli

CLI tool for Deploifai

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli.svg)](https://npmjs.org/package/cli)
[![Codecov](https://codecov.io/gh/utkarsh867/cli/branch/master/graph/badge.svg)](https://codecov.io/gh/utkarsh867/cli)
[![Downloads/week](https://img.shields.io/npm/dw/cli.svg)](https://npmjs.org/package/cli)
[![License](https://img.shields.io/npm/l/cli.svg)](https://github.com/utkarsh867/cli/blob/master/package.json)

<!-- toc -->
* [cli](#cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g cli
$ deploifai COMMAND
running command...
$ deploifai (-v|--version|version)
cli/0.0.1 darwin-x64 node-v15.0.1
$ deploifai --help [COMMAND]
USAGE
  $ deploifai COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`deploifai help [COMMAND]`](#deploifai-help-command)
* [`deploifai init [PROJECT_NAME]`](#deploifai-init-project_name)

## `deploifai help [COMMAND]`

display help for deploifai

```
USAGE
  $ deploifai help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `deploifai init [PROJECT_NAME]`

Create a new project that can be deployed on Deploifai

```
USAGE
  $ deploifai init [PROJECT_NAME]

ARGUMENTS
  PROJECT_NAME  [default: deploifai_app] Name of the project folder

OPTIONS
  -h, --help  show CLI help

EXAMPLES
  $ deploifai init
  $ deploifai init project-name
```

_See code: [src/commands/init.ts](https://github.com/utkarsh867/cli/blob/v0.0.1/src/commands/init.ts)_
<!-- commandsstop -->
