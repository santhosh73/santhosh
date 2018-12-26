const sql=require('mysql');
let connection=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'student_database'
});

connection.connect((err)=>{
if(err)throw err;
console.log("DataBase is connected successfully:::::!!!!")
});

module.exports=connection;