var express = require('express');
var router = express.Router();
var connection=require('../common/mysql').connection;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//注册
router.post('/reg',function(req,res){

	var {user,email,pwd}=req.body;
	console.log(user,email,pwd);
	var sql=`insert into users(username,email,password) values('${user}','${email}','${pwd}')`;
	console.log(sql);
	connection.query(sql,function(err,result){
		if(err){
            console.log('注册失败',err);
            res.status(200).json({errno:0,msg:"注册失败"});
		}else{
			res.status(200).json({errno:1,msg:"注册成功"});
		}
	})
   
});
//登陆
router.post('/login',function(req,res){
	var {user,pwd}=req.body;
	var sql=`SELECT * FROM users WHERE phone='${user}' AND password='${pwd}'`;
	console.log(sql);
	connection.query(sql,function(err,result){
		if(err){
		   console.log('登陆失败',err);
           res.status(200).json({errno:0,msg:"登陆失败"});
		}else{
			if(result.length===1){
               res.status(200).json({errno:1,msg:"登陆成功",userInfo:result[0]});  
			}else{
                res.status(200).json({errno:0,msg:"用户名或者密码出错"});
			}
		}
	});
});
module.exports = router;
