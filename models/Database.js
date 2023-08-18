async function connect(){
    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host:'localhost',
        port:'3306',
        password:'root',
        database:'geral'
    });
    console.log("Conectou no mysql!");
    global.connection = connection;
    return connection;
}

async function query(sql){
    const conn = await connect();
    const [rows] = await conn.query(sql);
    return rows;
}

module.exports = {query};