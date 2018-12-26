var express=require('express');
var app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended:true
}));
var router=require('./routers/user');
app.use('/api',router);
//app.use(router);
app.listen(3000);