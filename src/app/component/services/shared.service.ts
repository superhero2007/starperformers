import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class SharedService {

  constructor(private _http : Http,private cookie:CookieService) { }

// SP-Profile Summary--
    public summary(formdata: any){
    	var options = this.getToken();
	  	return this._http.post(environment.apiUrl +'summary',formdata,options).map((data)=>data.json());
	}

// SP-Profile Experience--
    public experience(formdata: any){
    	var options = this.getToken();
	  	return this._http.post(environment.apiUrl +'experience',formdata,options).map((data)=>data.json());
	}

// SP-Profile Update Experience--
    public updateExperience(id:any,formdata: any){
    	var options = this.getToken();
	  	return this._http.put(environment.apiUrl +'edit_experience/'+id,formdata,options).map((data)=>data.json());
	}
// SP-Profile Delete Experience--
    public deleteExperience(id:any){
    	var options = this.getToken();
	  	return this._http.delete(environment.apiUrl +'remove_experience/'+id,options).map((data)=>data.json());
	}

// SP-Profile Eduction--
	public eduction(formdata: any){	
		var options = this.getToken();
	  	return this._http.post(environment.apiUrl +'education',formdata,options).map((data)=>data.json());
	}
// SP-Profile Update eduction--
    public updateEduction(id:any,formdata: any){
    	var options = this.getToken();
	  	return this._http.put(environment.apiUrl +'edit_education/'+id,formdata,options).map((data)=>data.json());
	}
// SP-Profile Delete eduction--
    public removeEduction(id:any){
    	var options = this.getToken();
	  	return this._http.delete(environment.apiUrl +'remove_education/'+id,options).map((data)=>data.json());
	}

// Certifications
	public Certifications(formdata: any){
		var options = this.getToken();
	  	return this._http.post(environment.apiUrl +'certification',formdata,options).map((data)=>data.json());
	}
// SP-Profile Update Certifications--
    public updatecertifications(id:any,formdata: any){
    	var options = this.getToken();
	  	return this._http.put(environment.apiUrl +'edit_certificates/'+id,formdata,options).map((data)=>data.json());
	}
// SP-Profile Delete Certifications--
    public removecertifications(id:any){
    	var options = this.getToken();
	  	return this._http.delete(environment.apiUrl +'remove_certifications/'+id,options).map((data)=>data.json());
	}

// SP-Profile Setting--
	public onsetting(formdata: any){
		var options = this.getToken();
	  	return this._http.post(environment.apiUrl +'settings',formdata,options).map((data)=>data.json());
	}
// Upload image--
	public imageupload(formdata: any){
		var options = this.getToken();
	  	return this._http.post(environment.apiUrl +'upload',formdata,options).map((data)=>data.json());
	}
//get profile info
	getProfile(){
		var options = this.getToken();
		return this._http.get(environment.apiUrl +'profileinfo',options).map((data)=>data.json());
	}

	getToken(){
		var token = JSON.parse(this.cookie.get('user')).token;
		let header = new Headers();
		header.append('Authorization',token);
		let opts = new RequestOptions();
		opts.headers = header;
		return opts;
	}

}
