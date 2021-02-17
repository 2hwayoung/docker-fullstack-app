var mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: '2hwayoung',
    database: 'myapp'
});
exports.pool = pool;