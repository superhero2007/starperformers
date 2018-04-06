import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import { FormBuilder, Validators,FormControl} from '@angular/forms';//its using for form
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SharedService } from '../services/shared.service'; 
import { LoginService } from '../login/login.service'; 
import {CookieService} from 'ngx-cookie-service';
import {Router,ActivatedRoute} from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';
import swal from 'sweetalert'
declare var $:any;

@Component({
  selector: 'app-sp-profile',
  templateUrl: './sp-profile.component.html',
  styleUrls: ['./sp-profile.component.css'],
  providers:[LoginService,SharedService]
})

export class SpProfileComponent implements OnInit {

    // variable declare--
    @ViewChild('fileInput') fileInput:ElementRef;
    
    current_user;
    id : number;
    file;
    imglink;
    loginerror;
    uploadimg;
    profile_image;
    summary_Info;
    experienceList=[];
    educationList=[];
    certificateList=[];
    settingInfo;
    filesToUpload: Array<File> = [];
    settingmodal;
    modalsettings;
    profilestrength: number = 0;
    zipcodeerror;
    Showborder:boolean=false;
    eduShowborder:boolean=false;
    CertShowborder:boolean=false;
    summaryShowborder:boolean=false;
    disableFields:boolean=true;
    summaryInfo:boolean=true;
    actionType:boolean=false;

    profileresponse;
    education_field;
    image_status;
    profile_progress = 10;
    certification;
    updateInfo;
    settings_data={};
    summaryData={};
    experienceedit = {};
    EduUpdate={};
    educationData={};
    certificateListData={};
    experienceData={};
    experience_count=0;
    settingJob_count;
    updateId;
    from_year;
    to_year;
    currentIndex;
    highlightSection;

    myDatePickerOptionsfromyear:IMyDpOptions;
    myDatePickerOptionstoyear:IMyDpOptions;
    constructor(private loginService:LoginService,private router:Router, private sharedService:SharedService, private cookie:CookieService ) {
     let date = new Date();       
     this.myDatePickerOptionsfromyear = {
        disableDateRanges:[{begin: {year: date.getFullYear(), month: date.getMonth()+1, day: 31}, end: {year: date.getFullYear()+50, month: date.getMonth(), day: date.getDay()}}],
        dateFormat: 'dd.mm.yyyy',
      };
 

     }

    //Date Picker
    public myDatePickerOptions: IMyDpOptions = {
     // other options...
     dateFormat: 'dd.mm.yyyy',
    };

    // Initialized to specific date (09.10.2018).
    public model: any = { year: 2018, month: 10} ;

    ngOnInit() {

      this.current_user = JSON.parse(this.cookie.get('user'));
      this.sharedService.getProfile().subscribe((data)=>{
          this.profileresponse=data.data.user_info.profileUrl;
          if(this.profileresponse==undefined){
            this.image_status=false;
          }
          if(this.profileresponse){
            this.image_status=true;
          }
          this.certificateList=data.data.certification_details;
          this.experienceList = data.data.experience;
            
          if(data.data.summary){
            this.summary_Info = data.data.summary.content;
            this.summaryShowborder = true;
          }
            
          this.educationList = data.data.education;
           
          if(this.profileresponse){
            this.profile_image = this.profileresponse;
            
          }

          if(data.data.settings){
            this.settingInfo = data.data.settings;
            this.settingJob_count = this.settingInfo.job_count;
          }             
          else{
            $("#settingmodal").click() //Show popup when user first time login 
          }

          if(this.experienceList){
            if(this.experienceList.length>0){
              this.Showborder = true;
               var experience_count = this.experienceList.length;
               this.experience_count = this.experienceList.length;

            }
          }

          if(this.educationList.length>0){
             this.eduShowborder = true;
          }

          if(this.certificateList.length>0){
            this.CertShowborder = true;
            this.certificateList=data.data.certification_details;

          }
          this.calculate_score();
      });
      $('#modal-eduction,#modal-experience,#modal-certifications').on('hidden.bs.modal', function () {
        console.log("popup close");
          this.disableFields = true;
          this.actionType = false;
      });
    }

    // setting limit for end date
    limitDate(event){

        this.myDatePickerOptionstoyear = {
          // other options...
          disableDateRanges:[{begin: {year: 1000 , month: 1, day: 1}, end: {year: event.date.year, month: event.date.month, day: event.date.day}}],
          minYear:event.date.year,
          dateFormat: 'dd.mm.yyyy',
      };
    }

    //--Choose File Function--
    chooseFileEnable(){
      this.fileInput.nativeElement.click()
    }

    uploadFile(event){
      this.filesToUpload = <Array<File>>event.target.files;
      const formData: any = new FormData();
      const files: Array<File> = this.filesToUpload;
      if(files[0]['name']){
        formData.append("uploads[]", files[0], files[0]['name']);
      }
      this.sharedService.imageupload(formData).subscribe((data)=>{
        if(data.status){
          this.image_status=true;
          this.profile_image = data.image_url;
          swal({
            text: "Image uploaded successfully!",
            icon: "success",
            timer: 1000              
          });
        }
      })
    }


    //--Summary Data Submit--
    onSummary(summ){
      var self =this;
      self.sharedService.summary(summ).subscribe((data)=>{
        this.summaryShowborder = true;
        swal({
          text: "Summary has been successfully updated!",
          icon: "success",
           timer: 1000              
        });
        this.summaryInfo = true;
      });
    }

    // --Experience form data submit--
    onExperience(exp){
      this.loginerror = "";
      if((this.from_year && this.to_year) || (this.from_year && exp['present']) ){
        exp['from_year'] = this.from_year;
      exp['to_year'] = this.to_year;
      console.log(exp,"exp");
        var self =this;
        $.ajax({
          url: "http://ziptasticapi.com/" + exp.zipcode,
          dataType: "json",
          type: "GET",
          success: function(result, success) {
            if(result.error){
              self.loginerror = result.error;
            }else{
              if(self.actionType){
                exp.state = result.state;
                exp.city = result.city;
                self.sharedService.updateExperience(self.updateId,exp).subscribe((data)=>{
                  $('#modal-experience').modal('hide');
                  self.actionType = false;
                  self.experienceList[self.currentIndex] = data.updated_data;
                  swal({
                    text: "Experience has been successfully updated!",
                    icon: "success",
                    timer: 1000              
                  });
                  self.calculate_score();
                  $('#expForm')[0].reset();
                });
              }else{

                if(self.experience_count < self.settingJob_count ){

                  console.log(self.experience_count,self.settingJob_count);
                  self.experience_count = self.experience_count + 1;
                  exp.state = result.state;
                  exp.city = result.city;
                  
                  self.sharedService.experience(exp).subscribe((data)=>{
                    self.experienceList.push(data.data);
                    $('#modal-experience').modal('hide');
                    self.disableFields=true;
                    swal({
                      text: "Experience has been successfully added!",
                      icon: "success",
                      timer: 1000              
                    });
                    $('#expForm')[0].reset();
                   self.calculate_score();
                  })
              }
              else{
                  console.log(self.experience_count,self.settingJob_count, 'inside else');

                swal({
                    text: "You have already added EXPERIENCE till your specified number of job counts \n To add more experience details Please increase your job count",
                    icon: "warning"              
                  });
              }
            }  
            }
          },
          error: function(result, success) { 
          }
        });
      }
     else{
       this.loginerror = "Please select dates";
     }   
     
    }
    


    //--Update Experience data--
    updateExperience(experience,i){
      this.currentIndex = i;
      this.actionType = true;
      this.disableFields=false;
      this.updateId = experience._id;
      this.experienceData = experience;
      this.from_year = { date: { year: experience.from_year, month: experience.from_month, day: 1 }};
      if(experience.to_year && experience.to_month){
        this.to_year = { date: { year: experience.to_year, month: experience.to_month, day: 1 }};
      }else{
        this.to_year = { date: { year: 2017, month: 1, day: 1 }};
      }
      console.log(this.actionType,"before");
    }
   
   //--Delete Experience data--

    removeExperience(i,id){
      var self =this;
      this.sharedService.deleteExperience(id).subscribe((data)=>{
        self.experienceList.splice(i,1);
        self.calculate_score();
        swal({
          text: "Experience has been successfully deleted!",
          icon: "success",
            timer: 1000              
        });
      });
    }

    // --Education form data submit--
    onEducation(edu:any){
            this.loginerror = "";
      if((this.from_year && this.to_year) || (this.from_year && edu['present']) ){
        edu['from_year'] = this.from_year;
        edu['to_year'] = this.to_year;
        // for updating
        if(this.actionType){
          this.sharedService.updateEduction(this.updateId,edu).subscribe((data)=>{
            $('#modal-eduction').modal('hide');
            this.actionType = false;
            this.educationList[this.currentIndex] = data.updated_data;
            swal({
              text: "Education has been successfully updated!",
              icon: "success",
                timer: 1000              
            });
            this.calculate_score();
            $('#eduForm')[0].reset();
          });
        }else{ //for adding
          var self =this;
          self.sharedService.eduction(edu).subscribe((data)=>{
            self.educationList.push(data.data);
            $('#modal-eduction').modal('hide');
            if(data.status){
              this.eduShowborder = true;
              this.disableFields=true;
              swal({
                  text: "Education has been successfully added!",
                  icon: "success",
                   timer: 1000              
              });
              self.calculate_score();
              $('#eduForm')[0].reset();
            
            }
          });
        }
      }
      else{
        this.loginerror="Please select dates";
      }
      switch(edu.education_level){
        case('High School/GED'):
          this.education_field=1;
          break;
          case("Bachelor's Degree"):
          this.education_field=2;
          break;
          case("Master's Degree"):
          this.education_field=3;
          break;
          case('Advanced Graduate'):
          this.education_field=4;

          default:
          this.education_field=0;
        

      }
    }
    //--Education Update
    updateEducation(updateedu,i){
      this.currentIndex = i;
      this.actionType = true;
      this.updateId = updateedu._id;
      this.disableFields=false;
      this.educationData=updateedu;
      this.from_year = { date: { year: updateedu.begin_year, month: updateedu.begin_month, day: 1 }};
      if(updateedu.begin_year && updateedu.begin_month){
        this.to_year = { date: { year: updateedu.end_year, month: updateedu.end_month, day: 1 }};
      }else{
        this.to_year = { date: { year: 2017, month: 1, day: 1 }};
      }
    }
    
    //--Education Delete
    removeEducation(i,id){
      var self =this;
      this.sharedService.removeEduction(id).subscribe((data)=>{
        self.educationList.splice(i,1);
         self.calculate_score();
        swal({
          text: "Education has been successfully deleted!",
          icon: "success",
          timer: 1000              
        });
      });
    }

    // --Certifications form data submit--
    oncertifications(cer:any){
            this.loginerror = "";

      if(this.actionType){
          this.sharedService.updatecertifications(this.updateId,cer).subscribe((data)=>{
            $('#modal-certifications').modal('hide');
            this.actionType = false;
            this.certificateList[this.currentIndex] = data.updated_data;
            swal({
              text: "certificateList has been successfully updated!",
              icon: "success",
                timer: 1000              
              });
            this.calculate_score();
            $('#crtForm')[0].reset();
          });
      }else{
        var self =this;
        this.sharedService.Certifications(cer).subscribe((data)=>{
          self.certificateList.push(data.data);
          $('#modal-certifications').modal('hide');
          if(data.status){
            this.CertShowborder = true;
            this.disableFields=true;
            swal({
              text: "Ceritificate has been successfully added!",
              icon: "success",
               timer: 1000              
            });
            self.calculate_score();
            $('#crtForm')[0].reset();
          }
        });
      }
    }

    // --Certifications Update--
    updatecertifications(updatecertificateList,i){
      this.currentIndex = i;
      this.actionType = true;
      this.disableFields=false;
      this.updateId = updatecertificateList._id;
      this.certificateListData=updatecertificateList;
    }

    //--Certifications delete
    removecertifications(i,id){
      var self =this;
      this.sharedService.removecertifications(id).subscribe((data)=>{
        self.certificateList.splice(i,1);
        swal({
          text: "certificateList has been successfully deleted!",
          icon: "success",
          timer: 1000              
        });
        this.calculate_score();
      });
    }
    
    // --Setting popup show when user first time login data submit--

    onSetting(set:any){
      var self = this;
      $.ajax({
        url: "http://ziptasticapi.com/" + set.zipcode,
        dataType: "json",
        type: "GET",
        success: function(result, success) {
          if(result.error){
            self.zipcodeerror = result.error;
          }else{
            set.state = result.state;
            set.city = result.city;
            self.zipcodeerror = result.error;
            self.sharedService.onsetting(set).subscribe((data)=>{
              self.settings_data=data.setting;
              self.settingInfo = data.setting;
              $('#modal-settings').modal('hide');
              swal({
                text: "Settings has been successfully updated!",
                icon: "success",
                 timer: 1000              
              });
              self.calculate_score();
            });
            this.settingJob_count=set.job_count;
            console.log(this.settingJob_count,"");
          }
        },
        error: function(result, success) {  
          swal({
            text: "Please check with zip code!",
            icon: "error",
            timer: 1000              
          });
        }
      });
    }

    // --User Logout--
    logoutUser(){
      this.cookie.delete('user');
      this.router.navigate(['/']);
    }

    calculate_score(){
      this.profile_progress = 10;
      if(this.profileresponse){
          this.profile_progress += 10;
      }
      if(this.settingInfo){
        this.profile_progress += 20;
      }

      if(this.experienceList.length>0){
        var experience_count = this.experienceList.length;
        if(this.settingInfo){

         var job_count = this.settingInfo.job_count;
        }
         var percent_filled = (experience_count/job_count) * 30;
         this.profile_progress += percent_filled;
      }
      if(this.educationList.length>0){
       this.profile_progress += 30;
      }
  }

// --Nav highlight Area--
  highlightArea(value,area){
    
    this.highlightSection = value;
    $('html, body').animate({
      scrollTop: $("#"+area).offset().top - 30
    }, 2000);
    
  }
 
}
