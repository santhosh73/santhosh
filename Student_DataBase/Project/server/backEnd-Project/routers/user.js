
const express=require('express');
//const bcrypt=require('bcrypt');
const saltRounds = 10;
const app=express();
const bodyparser=require('body-parser');
const router=express.Router();
const jwt=require('jsonwebtoken');
const db=require('../dataBase/db');
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({
   extended:true
 }));


router.get('/fetch',(req,res)=>{
    console.log("inside the get function::::")
    db.query('select * from cusr',(error,results,field)=>{
      if(error)throw error 
      console.log("values are fetched successfully::::")
      res.end(JSON.stringify(results));
    })
  });


  router.post('/validateUser',(req,res)=>{
    //console.log("inside the validate user",req)
    console.log("validate user::::",req.body)
    let email=req.body.email_id;
    let password=req.body.password;
    db.query('select * from `cusr` where `email_id`=? and `password`=?',[email,password],(error,results,fields)=>{
      if(error){
        res.json({
        status:false,
        message: 'There is issue with query',
        
      })

      }else{
        var token=jwt.sign({
          email
        },'MY_PRIVATE_KEY');
      
      console.log(results)
      console.log(":::::",token)

      if(results.length>0){
        console.log("results:::::32::::",results)
        // res.end(JSON.stringify(results)
        // ,
         //  status:'ture'


         var results2=JSON.stringify(results);
          
         res.json({
            status:true,
            data:results2,
            token:token,
            message:'data insert sucessfully'
         })
      }
      
      else{
        console.log("facing some error")
        let text='{"response":"Invalid Credentials"}';
        console.log("::::::",JSON.stringify(text))
        console.log("1111::::::",JSON.parse(text))
        res.end(error)
      }
    }
    })
  })


  router.post('/register',function (req,res) {

    console.log("post operation::::",req)
    console.log("inside the request ::::::",req.body)
    let body=req.body;
    let password=body.password;
    //let params=[body.cusr_id,body.cusr_name,body.email_id,body.password,body.gender,body.state,body.city,body.zip];
    console.log("params::::::::::",password)

    //bcrypt.hash(password, saltRounds, function(err, hash) {
      // Store hash in your password DB.
    

    db.query('insert into cusr (cusr_id,cusr_name,email_id,password,gender,state,city,zip) values (?,?,?,?,?,?,?,?)',[body.cusr_id,body.cusr_name,body.email_id,hash,body.gender,body.state,body.city,body.zip],(err,result,fields)=>{
      if(err)throw err
      console.log("successful !!!!")
      console.log(result)
      let text='{"responseCode":"000","responseMessage":"Values are inserted successfully"}';
      text=JSON.parse(text);
      console.log("text:::::::",text)
      res.end(JSON.stringify(text));
      //res.send('Hello,'+result[0].cusr_name);
    })
  });
  //});



  router.delete('/deleteUser/:id',(req,res)=>{
    console.log("am in delete section",req.params.id)
    db.query('delete from `cusr` where `cusr_id`=?',[req.params.id],(error,results,fields)=>{
      if(error)throw error;
      console.log("after deleting the record::::")
      let text='{"response":"Record has been deleted successfully!!!!"}';
      text=JSON.parse(text);
      console.log("59:::::::",text)
      console.log("60:::::::",JSON.stringify(text))
      res.end(JSON.stringify(text));
    });
    });

    router.get('/fetchUser/:id',(req,res)=>{
    console.log("line number 67::::",req.params.id)
    db.query('select cusr_id,cusr_name,email_id,gender,city,state,zip from cusr where `cusr_id`=?',[req.params.id],(error,results,fields)=>{
      if(error) throw error;
      console.log("result::::",results)
      res.end(JSON.stringify(results))
    })
    });

    router.post('/updateUser',(req,res)=>{
      console.log("line number 76::::",req.body)
      var updateQuery='update cusr set cusr_name=?,email_id=?,gender=?,city=?,state=?,zip=? where cusr_id=?';
      db.query(updateQuery,[req.body.cusr_name,req.body.email_id,req.body.gender,req.body.city,req.body.state,req.body.zip,req.body.cusr_id],(error,results,fields)=>{
        if(error)throw error;
        console.log("Data updated successfully!!!!!",results)
        var text='{"responseCode":"000","responseMessage":"Values are Updated successfully"}';
        res.end(JSON.stringify(text));
      })
    });

  module.exports=router;

