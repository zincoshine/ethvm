import { waitOnConfirmation } from '@app/commands/monkey/shared'

export async function waitForConfirmationCommand(txhash: string) {
  await waitOnConfirmation(txhash)
}
