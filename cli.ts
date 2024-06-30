import { parseArgs } from "@std/cli/parse-args"
import MigrationService from './src/MigrationService.ts'

const migrationService = new MigrationService();
/**
 * Main logic of CLI.
 */
async function main(): Promise<void> {
  // console.dir(parseArgs(Deno.args));
  const parsedArguments = parseArgs(Deno.args)
  const [command] = parsedArguments._
  // Deno.copyFile(import.meta.dirname + '/src/assets/dexfile.ts', './dexfile.ts')
  switch (command) {
    case 'init':
      await migrationService.init()
      break;
    default:
      console.log(`Not implemented [command=${command}]`)
  }
}

/**
 * Run CLI.
 */

main();