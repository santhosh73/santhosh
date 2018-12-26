import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
private subject=new Subject<any>();
  constructor() { }

  success(message:string){
    console.log("inside success::::",message)
    this.subject.next({type:'success',text:message});

  }
  failure(message:string){
    console.log("inside success::::",message)
    this.subject.next({type:'failed',text:message});

  }

  getMessage():Observable<any>{
    return this.subject.asObservable();
  }
}
