const express = require('express');
// 引入路由器
const userRouter = require('./routers/user.js')
//引入body-parser中间件
const bodyParser = require('body-parser');
var app = express();
// 构建服务器
app.listen(8080,()=>{
    console.log('服务器启动成功')
});
//应用中间件，将post请求的数据解析为对象
app.use(bodyParser.urlencoded({
    extended:false
}));
//托管静态资源
app.use(express.static('public'));
// 挂载路由器
app.use('/router',userRouter);