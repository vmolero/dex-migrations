class MigrationService {
  /**
   * Creates a default dexfile.json file
   */
  public async init(location: string = '.') {
    // await Deno.copyFile('./assets/dexfile.ts', './dexfile.ts')
    await Deno.copyFile(
      import.meta.dirname + '/assets/dexfile.ts',
      location + '/dexfile.ts',
    )
  }
}

export default MigrationService
