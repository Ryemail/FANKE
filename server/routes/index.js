var express = require('express');
var router = express.Router();
var connection=require('../common/mysql').connection;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/goodsType',function(req,res){

	var sql=`SELECT * FROM vancl WHERE goodsType=${req.query.level}`;
    console.log(sql);
	connection.query(sql,function(err,result){
        if(err){
        	console.log('查询失败',err);
        	res.status(200).json({errno:0,msg:"查询失败"});
        }else{
        	res.status(200).json({errno:1,message:"成功",list:result});
        }
	});

});
module.exports = router;
