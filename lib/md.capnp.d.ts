/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/@cube-xyz/capnp-ts).
 */
import * as capnp from "@cube-xyz/capnp-ts";
import { Struct as __S } from '@cube-xyz/capnp-ts';
export declare const _capnpFileId: any;
export declare enum Side {
    BID = 0,
    ASK = 1
}
export declare class MarketByPrice_Level extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getPrice(): bigint;
    setPrice(value: bigint): void;
    getQuantity(): bigint;
    setQuantity(value: bigint): void;
    getSide(): Side;
    setSide(value: Side): void;
    toString(): string;
}
export declare class MarketByPrice extends __S {
    static readonly Level: typeof MarketByPrice_Level;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Levels: capnp.ListCtor<MarketByPrice_Level>;
    adoptLevels(value: capnp.Orphan<capnp.List<MarketByPrice_Level>>): void;
    disownLevels(): capnp.Orphan<capnp.List<MarketByPrice_Level>>;
    getLevels(): capnp.List<MarketByPrice_Level>;
    hasLevels(): boolean;
    initLevels(length: number): capnp.List<MarketByPrice_Level>;
    setLevels(value: capnp.List<MarketByPrice_Level>): void;
    getChunk(): number;
    setChunk(value: number): void;
    getNumChunks(): number;
    setNumChunks(value: number): void;
    toString(): string;
}
export declare enum DiffOp {
    ADD = 0,
    REMOVE = 1,
    REPLACE = 2
}
export declare class MarketByPriceDiff_Diff extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getPrice(): bigint;
    setPrice(value: bigint): void;
    getQuantity(): bigint;
    setQuantity(value: bigint): void;
    getSide(): Side;
    setSide(value: Side): void;
    getOp(): DiffOp;
    setOp(value: DiffOp): void;
    toString(): string;
}
export declare class MarketByPriceDiff extends __S {
    static readonly Diff: typeof MarketByPriceDiff_Diff;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Diffs: capnp.ListCtor<MarketByPriceDiff_Diff>;
    adoptDiffs(value: capnp.Orphan<capnp.List<MarketByPriceDiff_Diff>>): void;
    disownDiffs(): capnp.Orphan<capnp.List<MarketByPriceDiff_Diff>>;
    getDiffs(): capnp.List<MarketByPriceDiff_Diff>;
    hasDiffs(): boolean;
    initDiffs(length: number): capnp.List<MarketByPriceDiff_Diff>;
    setDiffs(value: capnp.List<MarketByPriceDiff_Diff>): void;
    toString(): string;
}
export declare class MarketByOrder_Order extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getPrice(): bigint;
    setPrice(value: bigint): void;
    getQuantity(): bigint;
    setQuantity(value: bigint): void;
    getExchangeOrderId(): bigint;
    setExchangeOrderId(value: bigint): void;
    getSide(): Side;
    setSide(value: Side): void;
    toString(): string;
}
export declare class MarketByOrder extends __S {
    static readonly Order: typeof MarketByOrder_Order;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Orders: capnp.ListCtor<MarketByOrder_Order>;
    adoptOrders(value: capnp.Orphan<capnp.List<MarketByOrder_Order>>): void;
    disownOrders(): capnp.Orphan<capnp.List<MarketByOrder_Order>>;
    getOrders(): capnp.List<MarketByOrder_Order>;
    hasOrders(): boolean;
    initOrders(length: number): capnp.List<MarketByOrder_Order>;
    setOrders(value: capnp.List<MarketByOrder_Order>): void;
    getChunk(): number;
    setChunk(value: number): void;
    getNumChunks(): number;
    setNumChunks(value: number): void;
    toString(): string;
}
export declare enum OrderOp {
    ADD = 0,
    REMOVE = 1,
    REPLACE = 2
}
export declare class MarketByOrderDiff_Diff extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getPrice(): bigint;
    setPrice(value: bigint): void;
    getQuantity(): bigint;
    setQuantity(value: bigint): void;
    getExchangeOrderId(): bigint;
    setExchangeOrderId(value: bigint): void;
    getSide(): Side;
    setSide(value: Side): void;
    getOp(): OrderOp;
    setOp(value: OrderOp): void;
    toString(): string;
}
export declare class MarketByOrderDiff extends __S {
    static readonly Diff: typeof MarketByOrderDiff_Diff;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Diffs: capnp.ListCtor<MarketByOrderDiff_Diff>;
    adoptDiffs(value: capnp.Orphan<capnp.List<MarketByOrderDiff_Diff>>): void;
    disownDiffs(): capnp.Orphan<capnp.List<MarketByOrderDiff_Diff>>;
    getDiffs(): capnp.List<MarketByOrderDiff_Diff>;
    hasDiffs(): boolean;
    initDiffs(length: number): capnp.List<MarketByOrderDiff_Diff>;
    setDiffs(value: capnp.List<MarketByOrderDiff_Diff>): void;
    toString(): string;
}
export declare class Trades_Trade extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getTradeId(): bigint;
    setTradeId(value: bigint): void;
    getPrice(): bigint;
    setPrice(value: bigint): void;
    getAggressingSide(): Side;
    setAggressingSide(value: Side): void;
    getRestingExchangeOrderId(): bigint;
    setRestingExchangeOrderId(value: bigint): void;
    getFillQuantity(): bigint;
    setFillQuantity(value: bigint): void;
    getTransactTime(): bigint;
    setTransactTime(value: bigint): void;
    getAggressingExchangeOrderId(): bigint;
    setAggressingExchangeOrderId(value: bigint): void;
    toString(): string;
}
export declare class Trades extends __S {
    static readonly Trade: typeof Trades_Trade;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Trades: capnp.ListCtor<Trades_Trade>;
    adoptTrades(value: capnp.Orphan<capnp.List<Trades_Trade>>): void;
    disownTrades(): capnp.Orphan<capnp.List<Trades_Trade>>;
    getTrades(): capnp.List<Trades_Trade>;
    hasTrades(): boolean;
    initTrades(length: number): capnp.List<Trades_Trade>;
    setTrades(value: capnp.List<Trades_Trade>): void;
    toString(): string;
}
export declare class Summary extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getLow(): bigint;
    setLow(value: bigint): void;
    getHigh(): bigint;
    setHigh(value: bigint): void;
    getBaseVolumeLo(): bigint;
    setBaseVolumeLo(value: bigint): void;
    getBaseVolumeHi(): bigint;
    setBaseVolumeHi(value: bigint): void;
    getQuoteVolumeLo(): bigint;
    setQuoteVolumeLo(value: bigint): void;
    getQuoteVolumeHi(): bigint;
    setQuoteVolumeHi(value: bigint): void;
    toString(): string;
}
export declare enum KlineInterval {
    S1 = 0,
    M1 = 1,
    M15 = 2,
    H1 = 3,
    H4 = 4,
    D1 = 5
}
export declare class Kline extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getInterval(): KlineInterval;
    setInterval(value: KlineInterval): void;
    getStartTime(): bigint;
    setStartTime(value: bigint): void;
    getOpen(): bigint;
    setOpen(value: bigint): void;
    getClose(): bigint;
    setClose(value: bigint): void;
    getHigh(): bigint;
    setHigh(value: bigint): void;
    getLow(): bigint;
    setLow(value: bigint): void;
    getVolumeLo(): bigint;
    setVolumeLo(value: bigint): void;
    getVolumeHi(): bigint;
    setVolumeHi(value: bigint): void;
    toString(): string;
}
export declare class Heartbeat extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getRequestId(): bigint;
    setRequestId(value: bigint): void;
    getTimestamp(): bigint;
    setTimestamp(value: bigint): void;
    toString(): string;
}
export declare enum MdMessage_Which {
    HEARTBEAT = 0,
    SUMMARY = 1,
    TRADES = 2,
    MBO_SNAPSHOT = 3,
    MBO_DIFF = 4,
    MBP_SNAPSHOT = 5,
    MBP_DIFF = 6,
    KLINE = 7
}
export declare class MdMessage extends __S {
    static readonly HEARTBEAT = MdMessage_Which.HEARTBEAT;
    static readonly SUMMARY = MdMessage_Which.SUMMARY;
    static readonly TRADES = MdMessage_Which.TRADES;
    static readonly MBO_SNAPSHOT = MdMessage_Which.MBO_SNAPSHOT;
    static readonly MBO_DIFF = MdMessage_Which.MBO_DIFF;
    static readonly MBP_SNAPSHOT = MdMessage_Which.MBP_SNAPSHOT;
    static readonly MBP_DIFF = MdMessage_Which.MBP_DIFF;
    static readonly KLINE = MdMessage_Which.KLINE;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptHeartbeat(value: capnp.Orphan<Heartbeat>): void;
    disownHeartbeat(): capnp.Orphan<Heartbeat>;
    getHeartbeat(): Heartbeat;
    hasHeartbeat(): boolean;
    initHeartbeat(): Heartbeat;
    isHeartbeat(): boolean;
    setHeartbeat(value: Heartbeat): void;
    adoptSummary(value: capnp.Orphan<Summary>): void;
    disownSummary(): capnp.Orphan<Summary>;
    getSummary(): Summary;
    hasSummary(): boolean;
    initSummary(): Summary;
    isSummary(): boolean;
    setSummary(value: Summary): void;
    adoptTrades(value: capnp.Orphan<Trades>): void;
    disownTrades(): capnp.Orphan<Trades>;
    getTrades(): Trades;
    hasTrades(): boolean;
    initTrades(): Trades;
    isTrades(): boolean;
    setTrades(value: Trades): void;
    adoptMboSnapshot(value: capnp.Orphan<MarketByOrder>): void;
    disownMboSnapshot(): capnp.Orphan<MarketByOrder>;
    getMboSnapshot(): MarketByOrder;
    hasMboSnapshot(): boolean;
    initMboSnapshot(): MarketByOrder;
    isMboSnapshot(): boolean;
    setMboSnapshot(value: MarketByOrder): void;
    adoptMboDiff(value: capnp.Orphan<MarketByOrderDiff>): void;
    disownMboDiff(): capnp.Orphan<MarketByOrderDiff>;
    getMboDiff(): MarketByOrderDiff;
    hasMboDiff(): boolean;
    initMboDiff(): MarketByOrderDiff;
    isMboDiff(): boolean;
    setMboDiff(value: MarketByOrderDiff): void;
    adoptMbpSnapshot(value: capnp.Orphan<MarketByPrice>): void;
    disownMbpSnapshot(): capnp.Orphan<MarketByPrice>;
    getMbpSnapshot(): MarketByPrice;
    hasMbpSnapshot(): boolean;
    initMbpSnapshot(): MarketByPrice;
    isMbpSnapshot(): boolean;
    setMbpSnapshot(value: MarketByPrice): void;
    adoptMbpDiff(value: capnp.Orphan<MarketByPriceDiff>): void;
    disownMbpDiff(): capnp.Orphan<MarketByPriceDiff>;
    getMbpDiff(): MarketByPriceDiff;
    hasMbpDiff(): boolean;
    initMbpDiff(): MarketByPriceDiff;
    isMbpDiff(): boolean;
    setMbpDiff(value: MarketByPriceDiff): void;
    adoptKline(value: capnp.Orphan<Kline>): void;
    disownKline(): capnp.Orphan<Kline>;
    getKline(): Kline;
    hasKline(): boolean;
    initKline(): Kline;
    isKline(): boolean;
    setKline(value: Kline): void;
    toString(): string;
    which(): MdMessage_Which;
}
export declare class Config extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMbp(): boolean;
    setMbp(value: boolean): void;
    getMbo(): boolean;
    setMbo(value: boolean): void;
    getTrades(): boolean;
    setTrades(value: boolean): void;
    getSummary(): boolean;
    setSummary(value: boolean): void;
    adoptKlines(value: capnp.Orphan<capnp.List<KlineInterval>>): void;
    disownKlines(): capnp.Orphan<capnp.List<KlineInterval>>;
    getKlines(): capnp.List<KlineInterval>;
    hasKlines(): boolean;
    initKlines(length: number): capnp.List<KlineInterval>;
    setKlines(value: capnp.List<KlineInterval>): void;
    toString(): string;
}
export declare class TopOfBook extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMarketId(): bigint;
    setMarketId(value: bigint): void;
    getTransactTime(): bigint;
    setTransactTime(value: bigint): void;
    getBidPrice(): bigint;
    setBidPrice(value: bigint): void;
    getBidQuantity(): bigint;
    setBidQuantity(value: bigint): void;
    getAskPrice(): bigint;
    setAskPrice(value: bigint): void;
    getAskQuantity(): bigint;
    setAskQuantity(value: bigint): void;
    getLastPrice(): bigint;
    setLastPrice(value: bigint): void;
    toString(): string;
}
export declare enum AggMessage_Which {
    HEARTBEAT = 0,
    TOP_OF_BOOK = 1
}
export declare class AggMessage extends __S {
    static readonly HEARTBEAT = AggMessage_Which.HEARTBEAT;
    static readonly TOP_OF_BOOK = AggMessage_Which.TOP_OF_BOOK;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptHeartbeat(value: capnp.Orphan<Heartbeat>): void;
    disownHeartbeat(): capnp.Orphan<Heartbeat>;
    getHeartbeat(): Heartbeat;
    hasHeartbeat(): boolean;
    initHeartbeat(): Heartbeat;
    isHeartbeat(): boolean;
    setHeartbeat(value: Heartbeat): void;
    adoptTopOfBook(value: capnp.Orphan<TopOfBook>): void;
    disownTopOfBook(): capnp.Orphan<TopOfBook>;
    getTopOfBook(): TopOfBook;
    hasTopOfBook(): boolean;
    initTopOfBook(): TopOfBook;
    isTopOfBook(): boolean;
    setTopOfBook(value: TopOfBook): void;
    toString(): string;
    which(): AggMessage_Which;
}
export declare enum ClientMessage_Which {
    HEARTBEAT = 0,
    CONFIG = 1
}
export declare class ClientMessage extends __S {
    static readonly HEARTBEAT = ClientMessage_Which.HEARTBEAT;
    static readonly CONFIG = ClientMessage_Which.CONFIG;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptHeartbeat(value: capnp.Orphan<Heartbeat>): void;
    disownHeartbeat(): capnp.Orphan<Heartbeat>;
    getHeartbeat(): Heartbeat;
    hasHeartbeat(): boolean;
    initHeartbeat(): Heartbeat;
    isHeartbeat(): boolean;
    setHeartbeat(value: Heartbeat): void;
    adoptConfig(value: capnp.Orphan<Config>): void;
    disownConfig(): capnp.Orphan<Config>;
    getConfig(): Config;
    hasConfig(): boolean;
    initConfig(): Config;
    isConfig(): boolean;
    setConfig(value: Config): void;
    toString(): string;
    which(): ClientMessage_Which;
}
