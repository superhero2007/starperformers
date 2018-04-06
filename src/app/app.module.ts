import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';//its module using for routes

//routing file
import {RoutingModuleModule} from './component/routing-module/routing-module.module';

// import { RoutingModuleModule } from './component/routing-module/routing-module.module';
import { routingcomponent } from './component/routing-module/routing-module.module';
import { HeaderComponent } from './component/include/header/header.component';
import { FooterComponent } from './component/include/footer/footer.component';
import { LoginHeaderComponent } from './component/login/login-header/login-header.component';
import {BologinComponent } from './component/login/bologin/bologin.component';
import { MyDatePickerModule } from 'mydatepicker';


//cookie service
import {CookieService} from 'ngx-cookie-service';

import { FileSelectDirective } from 'ng2-file-upload';



@NgModule({
  declarations: [
    AppComponent,
    routingcomponent,
    HeaderComponent,
    FooterComponent,
    LoginHeaderComponent,
    BologinComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    RoutingModuleModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
