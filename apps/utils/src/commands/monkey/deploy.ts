import { getContractAddressCommand } from '@app/commands/monkey/contract-address'
import { sendContract, waitOnConfirmation } from '@app/commands/monkey/shared'

export async function deployContractCommand(fromAddress: string, type: string) {
  const txhash = await sendContract(fromAddress, type)
  await waitOnConfirmation(txhash)
  await getContractAddressCommand(txhash)
}
