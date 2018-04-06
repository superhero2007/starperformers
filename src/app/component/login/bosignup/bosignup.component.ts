import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';//its using for form
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-bosignup',
  templateUrl: './bosignup.component.html',
  styleUrls: ['./bosignup.component.css'],
  providers:[LoginService]
})
export class BosignupComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  onsignup(addinfo:any)
	{
		console.log('test',addinfo);
	  	this.loginService.boSignup(addinfo).subscribe((data)=>{});
  	}

}
