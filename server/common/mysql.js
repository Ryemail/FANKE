var mysql=require('mysql');

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"vue"
})

connection.connect(function(err){
	if (err) {
        console.log('连接失败', err);
    } else {
        console.log('连接成功');
    }
});

exports.connection=connection;