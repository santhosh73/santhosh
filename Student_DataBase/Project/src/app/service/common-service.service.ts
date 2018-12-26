import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../Model/user';


  @Injectable({
    providedIn: 'root'
 })
export class CommonServiceService {

  show:boolean;
  constructor(private http:HttpClient) { }

register(user:user){
 this.show=true;
  console.log("user::::::::::::::::::::::",user)

return this.http.post('http://localhost:3000/api/register',user);

}

getAllData(){
  console.log("inside the getAll function:::::")
  return this.http.get('http://localhost:3000/api/fetch');
}

deleteData(id:number){
  console.log("before delete function::::")
  return this.http.delete('http://localhost:3000/api/deleteUser/'+id);
  
}
editUser(id){
  console.log("updating user::::::",id)
return this.http.get('http://localhost:3000/api/fetchUser/'+id);
}

updateUserData(user:user){
console.log("line number 38::::",user)
return this.http.post('http://localhost:3000/api/updateUser',user)
}

// loginForm(user){
//   console.log("in the login form::::",user)
//   return this.http.post('http://localhost:3000/api/validateUser',user);
// }

}
