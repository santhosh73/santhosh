import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit,OnDestroy {
 private subscription:Subscription;
 message:any;
  constructor(private alert:AlertService) { }

  ngOnInit() {
    console.log("inside the ngonit function::::::")
    this.subscription=this.alert.getMessage().subscribe(message=>{
      this.message=message;

    });
    //console.log("final message::::",this.subscription)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

}
