
import Connection = require('./lib/Connection');
import {ConnectionOptions, SslOptions} from './lib/Connection';
import PoolConnection = require('./lib/PoolConnection');
import Pool = require('./lib/Pool');
import {PoolOptions} from './lib/Pool';
import PoolCluster = require('./lib/PoolCluster');
import {PoolClusterOptions} from './lib/PoolCluster';
import Query = require('./lib/protocol/sequences/Query');
import {QueryOptions, StreamOptions, QueryError} from './lib/protocol/sequences/Query';

export function createConnection(connectionUri: string): Connection;
export function createConnection(config: Connection.ConnectionOptions): Connection;
export function createPool(config: Pool.PoolOptions): Pool;
export function createPoolCluster(config?: PoolCluster.PoolClusterOptions): PoolCluster;
export function escape(value: any): string;
export function format(sql: string): string;
export function format(sql: string, values: any[]): string;
export function format(sql: string, values: any): string;

export {
    ConnectionOptions,
    SslOptions,
    PoolOptions,
    PoolClusterOptions,
    QueryOptions,
    QueryError
};
export * from './lib/protocol/packets/index';

// Expose class interfaces
export interface Connection extends Connection {}
export interface PoolConnection extends PoolConnection {}
export interface Pool extends Pool {}
export interface PoolCluster extends PoolCluster {}
export interface Query extends Query {}
