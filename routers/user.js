const express = require('express');
// 引入连接池模块
const pool = require('../pool.js');
// 创建路由对象
const router = express.Router();
// 往路由器对象添加路由

// 登录路由
router.get('/login/:uname&:upwd',(req,res)=>{
    var uname = req.params.uname;
    var upwd = req.params.upwd;
    // console.log(uname,upwd);
    var sql = "select * from sc_user where uname=? and upwd=?"
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('1');
        }else{
            res.send('0');
        }
    })
})
// 注册路由
router.get('/resgister/:uname&:upwd&:email',(req,res)=>{
	var uname = req.params.uname;
	var upwd = req.params.upwd;
	var email = req.params.email;
	console.log(uname,upwd,email)
	var sql = "insert into sc_user (uname,upwd,email) values (?,?,?)"
	pool.query(sql,[uname,upwd,email],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1')
		}else{
			res.send('0')
		}
	})
})

// 查询用户名重复
router.get('/checkName/:uname',(req,res)=>{
	var uname = req.params.uname;
	var sql = "select uname from sc_user where uname=?"
	pool.query(sql,[uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1')
		}else{
			res.send('0')
		}
	})
})

// 图片路由
router.get('/img',(req,res)=>{
	var sql = "select * from sc_food"
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

// 商品列表路由
router.get("/product",(req,res)=>{
	var kwords = req.query.kwords;
	console.log(kwords);
	var pno = req.query.pno;
	console.log(pno);
	var arr=kwords.split(" ");//arr[夏普 空气净化器,三星]
	console.log(arr)
	for(var i=0;i<arr.length;i++){
		arr[i]=`title like '%${arr[i]}%'`;
	}
	var where = " where " + arr.join(" and ");
    // where title like '%夏普%' and title like '% 空气净化器%' and title like '%,三星%'
	var output={pageSize:8};//每页8个商品
	output.pno=pno;
	var sql="SELECT *,( SELECT md from sc_laptop_pic where laptop_id=lid limit 1 ) as md FROM sc_laptop ";
	pool.query(sql+where,[],(err,result)=>{
		if(err) console.log(err)
		output.count=result.length;//获得总记录数
		output.pageCount=Math.ceil(output.count/output.pageSize);//计算总页数
		output.products = result.slice(output.pno*8,output.pno*8+8);
		// console.log(result)
		res.writeHead(200,{
			"Content-Type":"application/json charset=utf-8",
            "Access-Control-Allow-Origin":"*"
		})
		res.write(JSON.stringify(output));
		res.end();
	})
})

// 商品详情路由
router.get("/getdetails",(req,res)=>{
    var lid = req.query.lid;
    //console.log(lid);
    var output={product:{},pics:[],specs:[]};
    var sql1 = "select * from sc_laptop where lid= ? ";
    var sql2 = "select * from sc_laptop_pic where laptop_id=?" //根据id查图片
    var sql3 = "select lid,spec from sc_laptop where family_id =(select family_id from sc_laptop where lid=?)";

    Promise.all([
        //查询商品
        new Promise(function(open){
            pool.query(sql1,[lid],(err,result)=>{
                if(err) console.log(err)
                //console.log(result);
                output.product =result[0]
                open();
            })
        }),
        new Promise(function(open){
            pool.query(sql2,[lid],(err,result)=>{
                if(err) console.log(err);
                //console.log(result);
                output.pics=result;
                open()
            })
        }),
        new Promise(function(open){
            pool.query(sql3,[lid],(err,result)=>{
                if(err) console.log(err)
                //console.log(result);
                output.specs = result;
                open();
            })
        })
    ]).then(function(){
        res.writeHead(200,{
            "Content-Type":"application/json charset=utf-8",
            "Access-Control-Allow-Origin":'*'
        })
        res.write(JSON.stringify(output));
        res.end();
    })
})



// 路由对象导出
module.exports = router;