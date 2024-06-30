import { parseArgs } from "@std/cli/parse-args"
import MigrationService from './src/MigrationService.ts'

/**
 * Main logic of CLI.
 */
async function main(): Promise<void> {
  const parsedArguments = parseArgs(Deno.args)
  const [command] = parsedArguments._
  switch (command) {
    case 'init': {
      await MigrationService.init()
      break;
    }
    default:
      console.log(`Not implemented [command=${command}]`)
  }
}

/**
 * Run CLI.
 */

main();