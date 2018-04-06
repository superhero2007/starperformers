import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router, CanActivate} from '@angular/router'; 

import { LoginComponent } from '../login/login.component';
import { BologinComponent } from '../login/bologin/bologin.component';
import { SploginComponent } from '../login/splogin/splogin.component';
import { BosignupComponent } from '../login/bosignup/bosignup.component';
import { SignupComponent } from '../login/signup/signup.component';
import { FogotPasswordComponent } from '../login/fogot-password/fogot-password.component';

import { SpProfileComponent } from '../sp-profile/sp-profile.component';
import { HomeComponent } from '../home/home.component';
import {CookieService} from 'ngx-cookie-service';



@Injectable()

export class AlwaysAuthGuard implements CanActivate {
 
   constructor(private router: Router,private _cookieService:CookieService) {}
 
   public canActivate() {
       let usersData = this._cookieService.get("user");
       if(usersData){
         return true;

       }else{  
         this.router.navigate(['']);
            return false;
       } 

   }
}


@Injectable()
export class loggedInGuard implements CanActivate {
 
   constructor(private router: Router,private _cookieService:CookieService) {}
 
   public canActivate() {
       let usersData = this._cookieService.get("user");
       if(usersData){
         this.router.navigate(['SpProfile']);
            return false;
       }else{  
         return true;
       } 

   }
}


// --routes path 

const appRoutes: Routes = [

	{path:'', component:HomeComponent,canActivate: [loggedInGuard]},
	{path:'SpProfile', component:SpProfileComponent,canActivate: [AlwaysAuthGuard] },

	// login routes
	{path:'login', component:LoginComponent, children:[
		{path:'',redirectTo:'splogin',pathMatch:'full'},
		{path:'Bosignup', component:BosignupComponent },
		{path:'splogin',component:SploginComponent},
		{path:'Spsignup',component:SignupComponent},
		{path:'bologin',component:BologinComponent},
		{path:'forgotPassword',component:FogotPasswordComponent},
	]}

];

@NgModule({
   imports: [CommonModule,RouterModule.forChild(appRoutes)],
  declarations: [],
  exports: [ RouterModule ],
  providers: [AlwaysAuthGuard,loggedInGuard] 
})

export class RoutingModuleModule { }

//export routingcomponet class include in module.ts file 

export const routingcomponent =
	[ 
		LoginComponent,
		SploginComponent,
		BologinComponent,
		SignupComponent,
		BosignupComponent,
		HomeComponent,
		SpProfileComponent,
		FogotPasswordComponent
		
	]