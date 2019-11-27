
declare interface OkPacket extends Array<Object> {
    constructor: {
        name: 'OkPacket'
    };
    fieldCount: number;
    affectedRows: number;
    changedRows: number;
    insertId: number;
    serverStatus: number;
    warningCount: number;
    message: string;
    procotol41: boolean;
}

export = OkPacket;
