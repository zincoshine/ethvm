export interface SocketEvent {
    op: 'insert' | 'delete' | 'replace' | 'updated' | 'invalidate';
    key: any;
    value: any;
}
export declare const Events: {
    join: string;
    leave: string;
    newTx: string;
    newPendingTx: string;
    newBlock: string;
    newUncle: string;
    pastTxsR: string;
    pastBlocksR: string;
    getAddressBalance: string;
    getAddressTokenBalance: string;
    getAddressTokenTransfers: string;
    getContract: string;
    getBlock: string;
    getBlocks: string;
    getBlocksMined: string;
    getBlockByNumber: string;
    getTx: string;
    getTxs: string;
    getBlockTxs: string;
    getAddressTxs: string;
    getAddressTotalTxs: string;
    getPendingTxs: string;
    getPendingTxsOfAddress: string;
    getUncle: string;
    getUncles: string;
    getExchangeRates: string;
    getCurrentStateRoot: string;
    getTokenBalance: string;
    search: string;
    getAverageDifficultyStats: string;
    getAverageGasLimitStats: string;
    getAverageGasPriceStats: string;
    getAverageTxFeeStats: string;
    getSuccessfulTxStats: string;
    getFailedTxStats: string;
    getTxStats: string;
    getAverageBlockSizeStats: string;
    getAverageBlockTimeStats: string;
    getAverageNumberOfUnclesStats: string;
    getAverageHashRateStats: string;
    getAverageMinerRewardsStats: string;
};
export declare const SocketDefaultRooms: string[];
