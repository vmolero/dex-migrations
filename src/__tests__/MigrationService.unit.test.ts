import { assertSpyCalls, returnsNext, stub } from '@std/testing/mock'
import MigrationService from '../MigrationService.ts'

Deno.test('How Migration service works', async (t) => {
  await t.step('should copy template config file', async () => {
    using spyCopyFile = stub(Deno, 'copyFile', returnsNext([Promise.resolve()]))
    await MigrationService.init()

    assertSpyCalls(spyCopyFile, 1)
  })
})
