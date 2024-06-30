async function exists(path: string): Promise<boolean> {
  try {
    await Deno.stat(path)
    // successful, file or directory must exist
    return true
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      // file or directory does not exist
      return false
    } else {
      // unexpected error, maybe permissions, pass it along
      throw error
    }
  }
}

async function copy(source: string, target: string): Promise<void> {
  await Deno.copyFile(source, target)
}

class MigrationService {
  /**
   * Creates a default dexfile.json file
   */
  public static async init(location: string = '.') {
    const configFile = location + '/dexfile.ts'
    const existsFile = await exists(configFile)
    if (existsFile) {
      console.log(`Configuration file already exists [file=${configFile}]`)
    }
    await copy(
      import.meta.dirname + '/assets/dexfile.ts',
      configFile,
    )
    console.log(`Configuration file created [file=${configFile}]`)
  }
}

export default MigrationService
