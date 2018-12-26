import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
   public userID:number;
   getUserId(){
 return this.userID;
   }
   setUserId(userID){
 this.userID=userID;
   }
  
}
