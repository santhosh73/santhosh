import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { AlertService } from 'src/app/service/alert.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { getViewData } from '@angular/core/src/render3/instructions';
import { getParseErrors } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm:FormGroup;
  submitted=false;
  sginData: any;
  constructor(private formBuilder:FormBuilder,
    private service:CommonServiceService,
    private alertService:AlertService,
    private global:GlobalService,
    private router:Router,
    private authenticate:AuthenticationService,
    private cookies:CookieService) { }

  ngOnInit() {
    this.signInForm=this.formBuilder.group({
      email_id:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }

  get id(){
    return this.signInForm.controls;
  }

  login(){
    this.submitted=true;
    if(this.signInForm.invalid){
      return;
    }
    console.log("in the login event::::")

    console.log("values",this.signInForm.value)

    this.authenticate.loginForm(this.signInForm.value).subscribe(
           data=> this.getdata(data),
           err=> this.getErrors(err)
    )}
    
    getdata(data){
      if(data.status === true){

        console.log(data)
        console.log(":::::::::::"+data.token)
        localStorage.setItem('token',data.token);
        this.sginData= data.data;
        
        console.log("line number 61:::::::"+this.sginData) 

        this.cookies.set('userInfo',this.sginData);
         
        this.router.navigate(['/dashboard'])
        localStorage.setItem('token',data.token);
      }  
    }

    getErrors(err){
      console.log(err)
    }




//       data=> getViewData()
//       {

//       console.log("response:::::",data)

//       if(data!=null){

//         console.log("after fetching the data:::::",data[0].cusr_id)
//         this.global.setUserId(data[0].cusr_id)
//         this.router.navigate(['/dashboard'])
//       }
//       else{
//         this.alertService.failure('Invalid Credentials!!!')

//       }
//     },

//     error=>{
//       console.log("invalid credentials")
//       this.alertService.failure(error)
//     });
//   }
 }
