import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SignInComponent } from '../components/login/sign-in/sign-in.component';
import { RegisterComponent } from '../components/login/register/register.component';
import { ListComponent } from '../components/admin/list/list.component';
//import { AddUserComponent } from '../components/admin/add-user/add-user.component';
import { EditComponent } from '../components/admin/edit-user/edit/edit.component';
import { DashboardComponent } from '../components/dashboard/dashboard/dashboard.component';
//import { SignInComponent } from './login/sign-in/sign-in.component';
//import { RegisterComponent } from './login/register/register.component'
//import { ListComponent } from './components/admin/list/list.component';
//import { SignInComponent } from './components/login/sign-in/sign-in.component';
//import { RegisterComponent } from './components/login/register/register.component';
//import { AddUserComponent } from './components/admin/add-user/add-user.component';



const routes:Routes=[
  {
    path:'',
    component: SignInComponent
  },
  {
    path:'signIn',
    component: SignInComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin/listing',
    component:ListComponent
  },
 
  {
    path:'admin/edit/:id',
    component:EditComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
export const routingComponents=[SignInComponent,RegisterComponent,ListComponent,EditComponent];