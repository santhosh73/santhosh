import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  registerForm:FormGroup;
  records:any;
  constructor(private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private service:CommonServiceService,
    private router:Router) {
      this.createForm();
     }

     createForm(){
       this.registerForm=this.formBuilder.group({
         cusr_name:['',Validators.required],
         cusr_id:['',[Validators.required,Validators.maxLength(3)]],
         email_id:['',Validators.required],
         gender:['',Validators.required],
         city:['',Validators.required],
         state:['',Validators.required],
         zip:['',[Validators.required,Validators.maxLength(6)]]
       });
                }
                
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.service.editUser(params.id).subscribe(res=>{
        console.log("line number 36::::",res)
        this.registerForm.setValue(res[0]);
        //console.log("ngoninit function::::",this.registerForm.value)
         //this.records=res[0];
      });
      });

  }

  updateUser(){
    console.log("inside the update user:::::",this.registerForm.value)
    this.service.updateUserData(this.registerForm.value).subscribe(data=>{
      console.log(":::::::::",data)
    })
  }

}
