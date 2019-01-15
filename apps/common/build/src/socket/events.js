"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = {
    // Generic
    join: "join",
    leave: "leave",
    // Ouputs
    newTx: "NEW_TX",
    newPendingTx: "NEW_PENDING_TX",
    newBlock: "NEW_BLOCK",
    newUncle: "NEW_UNCLE",
    pastTxsR: "PAST_TXS_RECEIVED",
    pastBlocksR: "PAST_BLOCKS_RECEIVED",
    // Balances
    getAddressBalance: "get-address-balance",
    getAddressTokenBalance: "get-address-token-balance",
    // Blocks
    getBlock: "get-block",
    getBlocks: "get-blocks",
    getBlocksMined: "get-blocks-mined",
    getBlockByNumber: "get-block-by-number",
    // Txs
    getTx: "get-tx",
    getTxs: "get-txs",
    getBlockTxs: "get-block-txs",
    getAddressTxs: "get-address-txs",
    getAddressTotalTxs: "get-address-total-txs",
    // PendingTxs
    getPendingTxs: "get-pending-txs",
    getPendingTxsOfAddress: "get-address-pending-txs",
    // Uncles
    getUncle: "get-uncle",
    getUncles: "get-uncles",
    // Exchange
    getExchangeRates: "get-exchange-rates",
    // Vm
    getCurrentStateRoot: "get-current-state-root",
    getTokenBalance: "get-tokens-balance",
    ethCall: "eth-call",
    // Tokens
    getAddressTokenTransfers: "get-address-token-transfers",
    // Search
    search: "search",
    // Stats
    getAvgTotalDifficultyStats: "get-average-difficulty-stats",
    getAvgGasPriceStats: "get-average-gas-price-stats",
    getAvgTxFeeStats: "get-average-tx-fee-stats",
    getAvgSuccessfullTxStats: "get-average-successfull-tx-stats",
    getAvgFailedTxStats: "get-average-successfull-tx-stats"
};
exports.SocketDefaultRooms = ["blocks", "txs", "uncles", "pendingTxs"];
