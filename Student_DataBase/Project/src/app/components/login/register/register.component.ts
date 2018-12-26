import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormControl } from '@angular/forms';
//import { CommonServiceService } from '../../common-service.service';
import { AlertService } from 'src/app/service/alert.service';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  data:any;
  submitted=false;

  constructor(private fb: FormBuilder,
    private service: CommonServiceService,
    private alertService:AlertService,
    private router:Router) { }

  ngOnInit() {
  this.contactForm();
  }

 contactForm(){

             this.registerForm = this.fb.group({
                      name: new FormControl('', {
                       validators: [Validators.required, Validators.maxLength(55)],
                      updateOn: 'change' 
                      }),

                      phone: new FormControl('', {
                        validators: [Validators.required, Validators.maxLength(15)],
                       updateOn: 'change' 
                       }),

                 });

          this.registerForm.controls['name'].setValue('aman')
           
}

onSubmit(){
     console.log(this.registerForm.value)

     console.log(this.registerForm)
    let  abc={
        firstName: this.registerForm.controls['name'].value,

     }
  console.log(abc)


}



// contactForm(){
//   this.registerForm=this.formBuilder.group({
//     cusr_name:['',Validators.required,],
//     cusr_id:['',[Validators.required,Validators.maxLength(3)]],
//     email_id:['',[Validators.required,Validators.email]],
//     gender:['',Validators.required],
//     city:['',Validators.required],
//     state:['',Validators.required],
//     zip:['',[Validators.required,Validators.maxLength(6)]],
//     password:['',[Validators.required,Validators.minLength(6)]],
//     password1:['',[Validators.required,Validators.minLength(6)]]
//   });
// }


//    get id(){
//      return this.registerForm.controls;
//    }

//   submit(){
//     this.submitted = true;

//     if (this.registerForm.invalid) {
//       return;
//       }
//     // this.alertService.success("I am here");
//     // return;

//     console.log("/:::::::::::::::");
//     console.log(this.registerForm.value);
//    // console.log("/:::::::::::::::"+this.registerForm.controls.firstName.value)
//     this.service.register(this.registerForm.value).subscribe(data=>{
//       console.log("after the getting the response:::::",data)
//       this.alertService.success('Registration Successful');
//       this.router.navigate(['/signIn']);
//     },
//     error=>{
//       this.alertService.failure(error);
//     });

//   }

}
