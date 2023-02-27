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
export declare enum TimeInForce {
    IMMEDIATE_OR_CANCEL = 0,
    GOOD_FOR_SESSION = 1
}
export declare enum OrderType {
    LIMIT = 0,
    MARKET_LIMIT = 1,
    MARKET_WITH_PROTECTION = 2
}
export declare class NewOrder extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getRequestId(): bigint;
    setRequestId(value: bigint): void;
    getMarketId(): bigint;
    setMarketId(value: bigint): void;
    getPrice(): bigint;
    setPrice(value: bigint): void;
    getQuantity(): bigint;
    setQuantity(value: bigint): void;
    getSide(): Side;
    setSide(value: Side): void;
    getTimeInForce(): TimeInForce;
    setTimeInForce(value: TimeInForce): void;
    getOrderType(): OrderType;
    setOrderType(value: OrderType): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
    toString(): string;
}
export declare class CancelOrder extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMarketId(): bigint;
    setMarketId(value: bigint): void;
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getRequestId(): bigint;
    setRequestId(value: bigint): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
    toString(): string;
}
export declare class ModifyOrder extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMarketId(): bigint;
    setMarketId(value: bigint): void;
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getRequestId(): bigint;
    setRequestId(value: bigint): void;
    getNewQuantity(): bigint;
    setNewQuantity(value: bigint): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
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
export declare enum OrderRequest_Which {
    NEW = 0,
    CANCEL = 1,
    MODIFY = 2,
    HEARTBEAT = 3
}
export declare class OrderRequest extends __S {
    static readonly NEW = OrderRequest_Which.NEW;
    static readonly CANCEL = OrderRequest_Which.CANCEL;
    static readonly MODIFY = OrderRequest_Which.MODIFY;
    static readonly HEARTBEAT = OrderRequest_Which.HEARTBEAT;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptNew(value: capnp.Orphan<NewOrder>): void;
    disownNew(): capnp.Orphan<NewOrder>;
    getNew(): NewOrder;
    hasNew(): boolean;
    initNew(): NewOrder;
    isNew(): boolean;
    setNew(value: NewOrder): void;
    adoptCancel(value: capnp.Orphan<CancelOrder>): void;
    disownCancel(): capnp.Orphan<CancelOrder>;
    getCancel(): CancelOrder;
    hasCancel(): boolean;
    initCancel(): CancelOrder;
    isCancel(): boolean;
    setCancel(value: CancelOrder): void;
    adoptModify(value: capnp.Orphan<ModifyOrder>): void;
    disownModify(): capnp.Orphan<ModifyOrder>;
    getModify(): ModifyOrder;
    hasModify(): boolean;
    initModify(): ModifyOrder;
    isModify(): boolean;
    setModify(value: ModifyOrder): void;
    adoptHeartbeat(value: capnp.Orphan<Heartbeat>): void;
    disownHeartbeat(): capnp.Orphan<Heartbeat>;
    getHeartbeat(): Heartbeat;
    hasHeartbeat(): boolean;
    initHeartbeat(): Heartbeat;
    isHeartbeat(): boolean;
    setHeartbeat(value: Heartbeat): void;
    toString(): string;
    which(): OrderRequest_Which;
}
export declare class NewOrderAck extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMsgSeqNum(): bigint;
    setMsgSeqNum(value: bigint): void;
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getRequestId(): bigint;
    setRequestId(value: bigint): void;
    getExchangeOrderId(): bigint;
    setExchangeOrderId(value: bigint): void;
    getMarketId(): bigint;
    setMarketId(value: bigint): void;
    getPrice(): bigint;
    setPrice(value: bigint): void;
    getQuantity(): bigint;
    setQuantity(value: bigint): void;
    getSide(): Side;
    setSide(value: Side): void;
    getTimeInForce(): TimeInForce;
    setTimeInForce(value: TimeInForce): void;
    getOrderType(): OrderType;
    setOrderType(value: OrderType): void;
    getTransactTime(): bigint;
    setTransactTime(value: bigint): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
    toString(): string;
}
export declare class CancelOrderAck extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMsgSeqNum(): bigint;
    setMsgSeqNum(value: bigint): void;
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getRequestId(): bigint;
    setRequestId(value: bigint): void;
    getTransactTime(): bigint;
    setTransactTime(value: bigint): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
    toString(): string;
}
export declare class ModifyOrderAck extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMsgSeqNum(): bigint;
    setMsgSeqNum(value: bigint): void;
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getRequestId(): bigint;
    setRequestId(value: bigint): void;
    getTransactTime(): bigint;
    setTransactTime(value: bigint): void;
    getNewQuantity(): bigint;
    setNewQuantity(value: bigint): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
    toString(): string;
}
export declare enum NewOrderRejectReason {
    UNCLASSIFIED = 0,
    INVALID_QUANTITY = 1,
    INVALID_MARKET_ID = 2,
    DUPLICATE_ORDER_ID = 3,
    INVALID_SIDE = 4,
    INVALID_TIME_IN_FORCE = 5,
    INVALID_ORDER_TYPE = 6,
    INVALID_SELF_TRADE_PREVENTION = 7,
    UNKNOWN_TRADER = 8,
    PRICE_WITH_MARKET_ORDER = 9,
    EXCEEDED_SPOT_POSITION = 10
}
export declare class NewOrderReject extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMsgSeqNum(): bigint;
    setMsgSeqNum(value: bigint): void;
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getRequestId(): bigint;
    setRequestId(value: bigint): void;
    getTransactTime(): bigint;
    setTransactTime(value: bigint): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
    getReason(): NewOrderRejectReason;
    setReason(value: NewOrderRejectReason): void;
    toString(): string;
}
export declare enum CancelOrderRejectReason {
    UNCLASSIFIED = 0,
    INVALID_MARKET_ID = 1,
    ORDER_NOT_FOUND = 2
}
export declare class CancelOrderReject extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMsgSeqNum(): bigint;
    setMsgSeqNum(value: bigint): void;
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getRequestId(): bigint;
    setRequestId(value: bigint): void;
    getTransactTime(): bigint;
    setTransactTime(value: bigint): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
    getReason(): CancelOrderRejectReason;
    setReason(value: CancelOrderRejectReason): void;
    toString(): string;
}
export declare enum ModifyOrderRejectReason {
    UNCLASSIFIED = 0,
    INVALID_QUANTITY = 1,
    INVALID_MARKET_ID = 2,
    ORDER_NOT_FOUND = 3,
    INVALID_IFM = 4,
    UNKNOWN_TRADER = 5,
    EXCEEDED_SPOT_POSITION = 6
}
export declare class ModifyOrderReject extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMsgSeqNum(): bigint;
    setMsgSeqNum(value: bigint): void;
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getRequestId(): bigint;
    setRequestId(value: bigint): void;
    getTransactTime(): bigint;
    setTransactTime(value: bigint): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
    getReason(): ModifyOrderRejectReason;
    setReason(value: ModifyOrderRejectReason): void;
    toString(): string;
}
export declare class Fill extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getMsgSeqNum(): bigint;
    setMsgSeqNum(value: bigint): void;
    getMarketId(): bigint;
    setMarketId(value: bigint): void;
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getExchangeOrderId(): bigint;
    setExchangeOrderId(value: bigint): void;
    getFillPrice(): bigint;
    setFillPrice(value: bigint): void;
    getFillQuantity(): bigint;
    setFillQuantity(value: bigint): void;
    getLeavesQuantity(): bigint;
    setLeavesQuantity(value: bigint): void;
    getTransactTime(): bigint;
    setTransactTime(value: bigint): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
    toString(): string;
}
export declare enum OrderResponse_Which {
    NEW_ACK = 0,
    CANCEL_ACK = 1,
    MODIFY_ACK = 2,
    NEW_REJECT = 3,
    CANCEL_REJECT = 4,
    MODIFY_REJECT = 5,
    FILL = 6,
    HEARTBEAT = 7
}
export declare class OrderResponse extends __S {
    static readonly NEW_ACK = OrderResponse_Which.NEW_ACK;
    static readonly CANCEL_ACK = OrderResponse_Which.CANCEL_ACK;
    static readonly MODIFY_ACK = OrderResponse_Which.MODIFY_ACK;
    static readonly NEW_REJECT = OrderResponse_Which.NEW_REJECT;
    static readonly CANCEL_REJECT = OrderResponse_Which.CANCEL_REJECT;
    static readonly MODIFY_REJECT = OrderResponse_Which.MODIFY_REJECT;
    static readonly FILL = OrderResponse_Which.FILL;
    static readonly HEARTBEAT = OrderResponse_Which.HEARTBEAT;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptNewAck(value: capnp.Orphan<NewOrderAck>): void;
    disownNewAck(): capnp.Orphan<NewOrderAck>;
    getNewAck(): NewOrderAck;
    hasNewAck(): boolean;
    initNewAck(): NewOrderAck;
    isNewAck(): boolean;
    setNewAck(value: NewOrderAck): void;
    adoptCancelAck(value: capnp.Orphan<CancelOrderAck>): void;
    disownCancelAck(): capnp.Orphan<CancelOrderAck>;
    getCancelAck(): CancelOrderAck;
    hasCancelAck(): boolean;
    initCancelAck(): CancelOrderAck;
    isCancelAck(): boolean;
    setCancelAck(value: CancelOrderAck): void;
    adoptModifyAck(value: capnp.Orphan<ModifyOrderAck>): void;
    disownModifyAck(): capnp.Orphan<ModifyOrderAck>;
    getModifyAck(): ModifyOrderAck;
    hasModifyAck(): boolean;
    initModifyAck(): ModifyOrderAck;
    isModifyAck(): boolean;
    setModifyAck(value: ModifyOrderAck): void;
    adoptNewReject(value: capnp.Orphan<NewOrderReject>): void;
    disownNewReject(): capnp.Orphan<NewOrderReject>;
    getNewReject(): NewOrderReject;
    hasNewReject(): boolean;
    initNewReject(): NewOrderReject;
    isNewReject(): boolean;
    setNewReject(value: NewOrderReject): void;
    adoptCancelReject(value: capnp.Orphan<CancelOrderReject>): void;
    disownCancelReject(): capnp.Orphan<CancelOrderReject>;
    getCancelReject(): CancelOrderReject;
    hasCancelReject(): boolean;
    initCancelReject(): CancelOrderReject;
    isCancelReject(): boolean;
    setCancelReject(value: CancelOrderReject): void;
    adoptModifyReject(value: capnp.Orphan<ModifyOrderReject>): void;
    disownModifyReject(): capnp.Orphan<ModifyOrderReject>;
    getModifyReject(): ModifyOrderReject;
    hasModifyReject(): boolean;
    initModifyReject(): ModifyOrderReject;
    isModifyReject(): boolean;
    setModifyReject(value: ModifyOrderReject): void;
    adoptFill(value: capnp.Orphan<Fill>): void;
    disownFill(): capnp.Orphan<Fill>;
    getFill(): Fill;
    hasFill(): boolean;
    initFill(): Fill;
    isFill(): boolean;
    setFill(value: Fill): void;
    adoptHeartbeat(value: capnp.Orphan<Heartbeat>): void;
    disownHeartbeat(): capnp.Orphan<Heartbeat>;
    getHeartbeat(): Heartbeat;
    hasHeartbeat(): boolean;
    initHeartbeat(): Heartbeat;
    isHeartbeat(): boolean;
    setHeartbeat(value: Heartbeat): void;
    toString(): string;
    which(): OrderResponse_Which;
}
export declare class Credentials extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getAccessKeyId(): string;
    setAccessKeyId(value: string): void;
    getSignature(): string;
    setSignature(value: string): void;
    getTimestamp(): bigint;
    setTimestamp(value: bigint): void;
    toString(): string;
}
export declare class RestingOrder extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getOrderId(): bigint;
    setOrderId(value: bigint): void;
    getExchangeOrderId(): bigint;
    setExchangeOrderId(value: bigint): void;
    getMarketId(): bigint;
    setMarketId(value: bigint): void;
    getPrice(): bigint;
    setPrice(value: bigint): void;
    getOriginalQuantity(): bigint;
    setOriginalQuantity(value: bigint): void;
    getSide(): Side;
    setSide(value: Side): void;
    getTimeInForce(): TimeInForce;
    setTimeInForce(value: TimeInForce): void;
    getOrderType(): OrderType;
    setOrderType(value: OrderType): void;
    getRemainingQuantity(): bigint;
    setRemainingQuantity(value: bigint): void;
    getRestTime(): bigint;
    setRestTime(value: bigint): void;
    getSubaccountId(): bigint;
    setSubaccountId(value: bigint): void;
    toString(): string;
}
export declare class Done extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getLatestTransactTime(): bigint;
    setLatestTransactTime(value: bigint): void;
    toString(): string;
}
export declare enum Bootstrap_Which {
    DONE = 0,
    RESTING = 1
}
export declare class Bootstrap extends __S {
    static readonly DONE = Bootstrap_Which.DONE;
    static readonly RESTING = Bootstrap_Which.RESTING;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptDone(value: capnp.Orphan<Done>): void;
    disownDone(): capnp.Orphan<Done>;
    getDone(): Done;
    hasDone(): boolean;
    initDone(): Done;
    isDone(): boolean;
    setDone(value: Done): void;
    adoptResting(value: capnp.Orphan<RestingOrder>): void;
    disownResting(): capnp.Orphan<RestingOrder>;
    getResting(): RestingOrder;
    hasResting(): boolean;
    initResting(): RestingOrder;
    isResting(): boolean;
    setResting(value: RestingOrder): void;
    toString(): string;
    which(): Bootstrap_Which;
}
