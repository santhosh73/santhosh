import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { user } from 'src/app/Model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
data:any;
userData:string[];
totalRec:number;
page:number=1;
  constructor(private service:CommonServiceService,
    private router:Router) { }

  ngOnInit() {
    console.log("ngoninit method::::::")
    this.getAllData();
     
  }

  private getAllData(){

    this.service.getAllData().subscribe(data=>{
      this.data=data;
      this.totalRec=this.data.length;
      console.log("totl records::::",this.totalRec)
      console.log("results:::",this.data)
    });
 
  }

  deleteUser(user:user){

    console.log("user data::::::::",user);
    this.service.deleteData(user.cusr_id).subscribe(data=>{
      
      console.log("after deleting data:::::",data)
      this.data=this.data.filter(u=>u!==user);
      console.log("after filtering data:::",this.data)
    });
    
  }

  addUser(){

    console.log("update user:::::::")
    this.router.navigate(['/admin/addUser'])
    
  }
}
