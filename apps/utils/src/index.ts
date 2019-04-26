import { Erc20Balances, EtherBalances, EthTokensToCoingecko, getBalanceCommand, getContractAddressCommand, waitForConfirmationCommand } from '@app/commands'
import { Config } from '@app/config'
import program from 'commander'

const config = new Config()

program
  .version('1.0.0')

program
  .command('verifier <subcommand>')
  .option('-b, --block [block]', 'Block number to use when requesting ether balances from web3')
  .action(async (subcommand, cmd) => {
    switch (subcommand) {
      case 'ether-balances': EtherBalances(config, cmd.block); break;
      case 'erc20-balances': Erc20Balances(config); break;
    }
  })

program
  .command('coingecko-eth-tokens')
  .action(async () => EthTokensToCoingecko(config.coingeckoCommand))

program
  .command('monkey <action> [subcommand]')
  .action(async (action, subcommand) => {
    switch (action) {
      case 'contract-address': getContractAddressCommand(subcommand); break;
      case 'balance': getBalanceCommand(subcommand); break;
      case 'confirm': waitForConfirmationCommand(subcommand); break;
    }
  })

program.parse(process.argv)
