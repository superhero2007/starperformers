import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';//its using for form
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '../login.service'; 
import {Router,ActivatedRoute} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-splogin',
  templateUrl: './splogin.component.html',
  styleUrls: ['./splogin.component.css'],
  providers:[LoginService]
})
export class SploginComponent implements OnInit {

  loginerror:string;
  constructor(private loginService:LoginService,private router:Router,private route:ActivatedRoute,private cookie:CookieService ) {}

  ngOnInit() {
  }
  onlogin(addinfo:any)
	{
    this.loginerror = "";
    console.log(this.loginerror, 'ok')
		console.log('test',addinfo);
	  this.loginService.userlogin(addinfo)

    .subscribe(data => { 
      if(data.status){
      console.log(data);
      this.cookie.set('user',JSON.stringify(data));
      this.router.navigate(['../../SpProfile'],{relativeTo:this.route});
      

      }else{
        this.loginerror = data.message;
      }

    });

  }
    onforgotpass(pass:any){
      console.log('test',pass);
      this.loginService.userlogin(pass).subscribe((data)=>{});
    }
}
