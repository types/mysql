
declare interface RowDataPacket<T> extends Array<Object> {
    constructor: {
        name: 'RowDataPacket'
    };
    [column: string]: any;
    [column: number]: any;
}

export = RowDataPacket;
