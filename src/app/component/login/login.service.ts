import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
@Injectable()
export class LoginService {

  constructor(private _http : Http) { }
// Splogin--
    public userlogin(formdata: any){
	  	return this._http.post(environment.apiUrl +'splogin',formdata).map((data)=>data.json());
	}
//SpSignup--
	public spSignup(formdata: any){
	  	return this._http.post(environment.apiUrl + 'spsignup',formdata).map((data)=>data.json());
	}
//boSignup--
	public boSignup(formdata: any){
	  	return this._http.post(environment.apiUrl + 'user',formdata).map((response: Response) => {
	      return response.json();
	    });
	}
//bologin--
	public boLogin(formdata: any){
	  	return this._http.post(environment.apiUrl + 'user',formdata).map((response: Response) => {
	      return response.json();
	    });
	}
//forgot password
	public forgotPassword(data: any){
	  	return this._http.post(environment.apiUrl + 'forgotpassword',data).map((response: Response) => {
	      return response.json();
	    });
	}
//forgot password
	public resetPassword(data){
	  	return this._http.post(environment.apiUrl + 'reset_password',data).map((response: Response) => {
	      return response.json();
	    });
	}

}