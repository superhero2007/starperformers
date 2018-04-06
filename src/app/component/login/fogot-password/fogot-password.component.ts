import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';//its using for form
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-fogot-password',
  templateUrl: './fogot-password.component.html',
  styleUrls: ['./fogot-password.component.css'],
  providers:[LoginService]
})
export class FogotPasswordComponent implements OnInit {

  whichForm:boolean=true;
  tokenStatus;
  token;
  loginerror;
  constructor(private loginService:LoginService,private router:Router,private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
     this.activatedRoute.queryParamMap.subscribe((params) => {
     console.log("check perameter",params);
       if(params.get("token") == null){
         this.whichForm = true;
         }else{
           this.token=params.get("token");
           console.log("token",this.token);
           this.whichForm = false;
         }
    });
  }
//--Forgotpassword--

  onforgotpass(pass){
    
    this.loginService.forgotPassword(pass).subscribe((data)=>{
      this.loginerror = data.message;
    });

  }

// --Reset Password--
  onresetPass(reenter){

    if(reenter.password===reenter.Confirmpassword){
      reenter['token']=this.token;
      var data={}
      data['token']=this.token;
      data['Confirmpassword'] = reenter.Confirmpassword;
      this.loginService.resetPassword(data).subscribe((data)=>{
        this.loginerror = data.message;
      });
    }
    else{
      alert("Passwords doesnot match");
    }

  }

}
