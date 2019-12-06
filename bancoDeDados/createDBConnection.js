let mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'ProSW'
    });
}

module.exports = function() {
    return createDBConnection;
}
