import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { AlertService } from 'src/app/service/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id:number;
  cookieValue;
  registerForm:FormGroup;
  constructor(private global:GlobalService,
    private service:CommonServiceService,
    private alert:AlertService,
    private cookies:CookieService,
    private formBuilder:FormBuilder) { 
      this.registerForm=this.formBuilder.group({
        cusr_name:['',Validators.required],
        cusr_id:['',Validators.required],
        email_id:['',Validators.required],
        gender:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        zip:['',Validators.required]
      })
    }

  ngOnInit() {
     this.cookieValue=this.cookies.get('userInfo')
     console.log("am in ngonit method:::::"+this.cookieValue)
     this.registerForm.setValue(this.cookieValue);
    // console.log("inside the ngonit::::",this.global.getUserId)
    // this.id=this.global.getUserId()
    // console.log("line number 18:::",this.id)
    // this.service.editUser(this.id).subscribe(res=>{
    //   console.log("line number 20:::::",res)
    //   this.registerForm.setValue(res[0])
    //  })

  }

}
