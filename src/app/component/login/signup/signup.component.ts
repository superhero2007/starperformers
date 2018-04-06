import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';//its using for form
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { LoginService } from '../login.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[LoginService]
})
export class SignupComponent implements OnInit {

  loginerror:string;
  logincomponent;
  constructor(private loginService:LoginService,private cookie:CookieService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  onsignup(addinfo:any)
	{
    this.loginerror = "";
    console.log(this.loginerror, 'ok')
		console.log('test',addinfo);
	  	this.loginService.spSignup(addinfo).subscribe((data)=>{
        console.log(data);
        this.logincomponent=data.status;
        if(data.status){
        this.cookie.set('user',JSON.stringify(data));
        this.loginerror = data.message;
        this.router.navigate(['../../SpProfile'],{relativeTo:this.route});

      }else{
        this.loginerror = data.message;
      }
      });
  	}
    passwordValidate(){
      console.log()
    }

}

