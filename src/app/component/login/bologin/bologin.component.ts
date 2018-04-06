import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';//its using for form
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-bologin',
  templateUrl: './bologin.component.html',
  styleUrls: ['./bologin.component.css'],
   providers:[LoginService]
})
export class BologinComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  onbologin(addinfo:any)
	{
		console.log('test',addinfo);
	  	this.loginService.boLogin(addinfo).subscribe((data)=>{});
  	}
    forgotpass(forgpass:any){
      console.log('test',forgpass);
      this.loginService.boLogin(forgpass).subscribe((data)=>{});

    }

}
