/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */
import * as capnp from "capnp-ts";
import { Struct as __S } from 'capnp-ts';
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
export declare enum MarketByPriceMessage_Which {
    SNAPSHOT = 0,
    DIFF = 1
}
export declare class MarketByPriceMessage extends __S {
    static readonly SNAPSHOT = MarketByPriceMessage_Which.SNAPSHOT;
    static readonly DIFF = MarketByPriceMessage_Which.DIFF;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptSnapshot(value: capnp.Orphan<MarketByPrice>): void;
    disownSnapshot(): capnp.Orphan<MarketByPrice>;
    getSnapshot(): MarketByPrice;
    hasSnapshot(): boolean;
    initSnapshot(): MarketByPrice;
    isSnapshot(): boolean;
    setSnapshot(value: MarketByPrice): void;
    adoptDiff(value: capnp.Orphan<MarketByPriceDiff>): void;
    disownDiff(): capnp.Orphan<MarketByPriceDiff>;
    getDiff(): MarketByPriceDiff;
    hasDiff(): boolean;
    initDiff(): MarketByPriceDiff;
    isDiff(): boolean;
    setDiff(value: MarketByPriceDiff): void;
    toString(): string;
    which(): MarketByPriceMessage_Which;
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
export declare enum MarketByOrderMessage_Which {
    SNAPSHOT = 0,
    DIFF = 1
}
export declare class MarketByOrderMessage extends __S {
    static readonly SNAPSHOT = MarketByOrderMessage_Which.SNAPSHOT;
    static readonly DIFF = MarketByOrderMessage_Which.DIFF;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptSnapshot(value: capnp.Orphan<MarketByOrder>): void;
    disownSnapshot(): capnp.Orphan<MarketByOrder>;
    getSnapshot(): MarketByOrder;
    hasSnapshot(): boolean;
    initSnapshot(): MarketByOrder;
    isSnapshot(): boolean;
    setSnapshot(value: MarketByOrder): void;
    adoptDiff(value: capnp.Orphan<MarketByOrderDiff>): void;
    disownDiff(): capnp.Orphan<MarketByOrderDiff>;
    getDiff(): MarketByOrderDiff;
    hasDiff(): boolean;
    initDiff(): MarketByOrderDiff;
    isDiff(): boolean;
    setDiff(value: MarketByOrderDiff): void;
    toString(): string;
    which(): MarketByOrderMessage_Which;
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
    getAggressorSide(): Side;
    setAggressorSide(value: Side): void;
    getExchangeOrderId(): bigint;
    setExchangeOrderId(value: bigint): void;
    getFillQuantity(): bigint;
    setFillQuantity(value: bigint): void;
    getTransactTime(): bigint;
    setTransactTime(value: bigint): void;
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
export declare class Heartbeat extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    toString(): string;
}
