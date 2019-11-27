
declare interface RowDataPacket extends Array<Object> {
    constructor: {
        name: 'RowDataPacket'
    };
    [column: string]: any;
    [column: number]: any;
}

export = RowDataPacket;
