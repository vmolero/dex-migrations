import MigrationService from './src/MigrationService.ts'

// const migrationService = new MigrationService();
export default {
  init: (location: string) => MigrationService.init(location)
}
