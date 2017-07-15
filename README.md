# Typed mysql

[![Greenkeeper badge](https://badges.greenkeeper.io/types/mysql.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/types/mysql.svg?branch=master)](https://travis-ci.org/types/mysql)

Typescript Typings for [mysql](https://www.npmjs.com/package/mysql).

## [API Documentation](http://typed-mysql.surge.sh)

## Installation
```sh
typings install --save mysql
```
or
```sh
npm install --save-dev types/mysql#semver:version
```

## Usage

```ts
import {createConnection, QueryError, RowDataPacket} from 'mysql';

const connection = createConnection(process.env['DB']);

connection.query('SELECT 1 + 1 AS solution', (err: QueryError, rows: RowDataPacket[]) => {
    console.log('The solution is: ', rows[0]['solution']);
});

connection.query('UPDATE posts SET title = ? WHERE id = ?', ['Hello World', 1], (err: mysql.QueryError, result: mysql.OkPacket) => {
    console.log(result.affectedRows);
});
```

[More examples](./test)


## Contributing
You can run them the tests with `npm run build` and `npm run test`.

--------------------------------

_Based on typings by [William Johnston](https://github.com/wjohnsto)_
