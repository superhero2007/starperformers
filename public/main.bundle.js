webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_routing_module_routing_module_module__ = __webpack_require__("../../../../../src/app/component/routing-module/routing-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_include_header_header_component__ = __webpack_require__("../../../../../src/app/component/include/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_include_footer_footer_component__ = __webpack_require__("../../../../../src/app/component/include/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_login_login_header_login_header_component__ = __webpack_require__("../../../../../src/app/component/login/login-header/login-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_login_bologin_bologin_component__ = __webpack_require__("../../../../../src/app/component/login/bologin/bologin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //its module using for routes
//routing file

// import { RoutingModuleModule } from './component/routing-module/routing-module.module';






//cookie service


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_routing_module_routing_module_module__["b" /* routingcomponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_include_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_include_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_login_login_header_login_header_component__["a" /* LoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_login_bologin_bologin_component__["a" /* BologinComponent */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__["FileSelectDirective"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__component_routing_module_routing_module_module__["a" /* RoutingModuleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_mydatepicker__["MyDatePickerModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12_ngx_cookie_service__["a" /* CookieService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n    <section class=\"section-1 text-center d-flex m-h-100\">\n        <div class=\"container my-auto\">\n            <div class=\"owl-wrap\">\n              <div class=\"owl-1 owl-carousel owl-theme\">\n                  <div class=\"block-wrap\">\n                    <div class=\"block\">\n                      <div class=\"h1\"><strong>Let Us Help You Find <br> & Apply For Your Ideal Job</strong></div>\n                     <!-- <div class=\"h5\">We go live in 4 weeks!</div>\n                     <div class=\"h5\">Join the list to be an early adaptor</div> -->\n                     <br>\n                      <a href=\"SPSignup.html\" class=\"btn btn-warning\">Get Started For Free</a>\n                    </div>\n                  </div>\n                  <div class=\"block-wrap\">\n                    <div class=\"block\">\n                      <div class=\"h1\"><strong>Let Us Help You Find <br> & Apply For Your Ideal Job</strong></div>\n                      <div class=\"h5\">We go live in 4 weeks!</div>\n                      <div class=\"h5\">Join the list to be an early adaptor.</div>\n                      <a href=\"#\" class=\"btn btn-warning\">Join the list</a>\n                    </div>\n                  </div>\n              </div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"section-2\">\n        <div class=\"container\">\n\n          <div class=\"h2 yellow text-center\"><strong>HOW IT WORKS</strong></div>\n\n          <div class=\"shadow\">\n\n            <nav class=\"nav nav-tabs nav-justified\" id=\"myTab\" role=\"tablist\">\n                <a class=\"nav-item nav-link active\" id=\"nav-1-tab\" data-toggle=\"tab\" href=\"#nav-1\" aria-selected=\"true\">For Service Professionals</a>\n                <a class=\"nav-item nav-link\" id=\"nav-2-tab\" data-toggle=\"tab\" href=\"#nav-2\" aria-selected=\"false\">For Business Owners</a>\n               <!-- <a class=\"nav-item nav-link\" id=\"nav-3-tab\" data-toggle=\"tab\" href=\"#nav-3\" aria-selected=\"false\">For Customers</a> -->\n            </nav>\n\n            <div class=\"tab-content\">\n                <div class=\"tab-pane fade show active\" id=\"nav-1\">\n\n                  <div class=\"row mx-0\">\n                    <div class=\"col-md-6 px-0 py-0\">\n                      <img src=\"../../../assets/img/1.jpg\" alt=\"\" class=\"mb-3 mb-md-0\">\n                    </div>\n                    <div class=\"col-md-6 pr-44 order-md-first\">\n                      <div class=\"h5 mb-4\"><strong>Step 1 (Create A Free Profile)</strong></div>\n                      <p class=\"text-justify\">Create a profile at Starperformers and list your job preferences including industry, location, and salary requirements.</p>\n                      <div class=\"text-right pt-2\">\n                        <a href=\"SP-login.html\" class=\"btn btn-warning\">Create Profile</a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row mx-0\">\n                    <div class=\"col-md-6 px-0 py-0\">\n                      <img src=\"../../../assets/img/2.jpg\" alt=\"\" class=\"mb-3 mb-md-0\">\n\n                    </div>\n                    <div class=\"col-md-6 pl-44\">\n                      <div class=\"h5 mb-4\"><strong>Step 2 (Let Us Do The Magic)</strong></div>\n                      <p class=\"text-justify\">Our algorithms find the ideal jobs for you based on your preferences and you will receive a weekly list of Jobs that are a perfect fit!</p>\n                    </div>\n                  </div>\n                  <div class=\"row mx-0\">\n                    <div class=\"col-md-6 px-0 py-0\">\n                      <img src=\"../../../assets/img/3.jpg\" alt=\"\" class=\"mb-3 mb-md-0\">\n                    </div>\n                    <div class=\"col-md-6 pr-44 order-md-first\">\n                      <div class=\"h5 mb-4\"><strong>Step 3 (Dowload Resume & Apply)</strong></div>\n                      <p class=\"text-justify\">Download expert verified custom resumes from your dashboard and apply to your ideal job. Easy</p>\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"tab-pane fade\" id=\"nav-2\">\n\n                  <div class=\"row mx-0\">\n                    <div class=\"col-md-6 px-0 py-0\">\n                      <img src=\"../../../assets/img/1.jpg\" alt=\"\" class=\"mb-3 mb-md-0\">\n                    </div>\n                    <div class=\"col-md-6 pr-44 order-md-first\">\n                      <div class=\"h5 mb-4\"><strong>Step 1 (Create A Free Profile)</strong></div>\n                      <p class=\"text-justify\">Create a profile at Starperformers to list your job preferences including industry, location, and salary requirements.</p>\n                      <div class=\"text-right pt-2\">\n                        <a href=\"SP-login.html\" class=\"btn btn-warning\">C</a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row mx-0\">\n                    <div class=\"col-md-6 px-0 py-0\">\n                      <img src=\"../../../assets/img/2.jpg\" alt=\"\" class=\"mb-3 mb-md-0\">\n                    </div>\n                    <div class=\"col-md-6 pl-44\">\n                      <div class=\"h5 mb-4\"><strong>Step 2 (Let Us Do The Magic)</strong></div>\n                      <p class=\"text-justify\">Our algorithms find the ideal jobs for you based on your preferences and you will receive a weekly list of Jobs that are a perfect fit!</p>\n                    </div>\n                  </div>\n                  <div class=\"row mx-0\">\n                    <div class=\"col-md-6 px-0 py-0\">\n                      <img src=\"../../../assets/img/3.jpg\" alt=\"\" class=\"mb-3 mb-md-0\">\n                    </div>\n                    <div class=\"col-md-6 pr-44 order-md-first\">\n                      <div class=\"h5 mb-4\"><strong>Step 3 (Dowload Resume & Apply)</strong></div>\n                      <p class=\"text-justify\">Download expert verified custom resumes from your dashboard and apply to your ideal job. Easy</p>\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"tab-pane fade\" id=\"nav-3\">\n\n                  <div class=\"row mx-0\">\n                    <div class=\"col-md-6 px-0 py-0\">\n                      <img src=\"i../../../assets/mg/1.jpg\" alt=\"\" class=\"mb-3 mb-md-0\">\n                    </div>\n                    <div class=\"col-md-6 pr-44 order-md-first\">\n                      <div class=\"h5 mb-4\"><strong>Step 1 (Create A Free Profile)</strong></div>\n                      <p class=\"text-justify\">Create a profile at Starperformers to list your job preferences including industry, location, and salary requirements.</p>\n                      <div class=\"text-right pt-2\">\n                        <a href=\"SP-login.html\" class=\"btn btn-warning\">Sign up</a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row mx-0\">\n                    <div class=\"col-md-6 px-0 py-0\">\n                      <img src=\"../../../assets/img/2.jpg\" alt=\"\" class=\"mb-3 mb-md-0\">\n                    </div>\n                    <div class=\"col-md-6 pl-44\">\n                      <div class=\"h5 mb-4\"><strong>Step 2 (Let Us Do The Magic)</strong></div>\n                      <p class=\"text-justify\">Our algorithms find the ideal jobs for you based on your preferences and you will receive a weekly list of Jobs that are a perfect fit!</p>\n                    </div>\n                  </div>\n                  <div class=\"row mx-0\">\n                    <div class=\"col-md-6 px-0 py-0\">\n                      <img src=\"../../../assets/img/3.jpg\" alt=\"\" class=\"mb-3 mb-md-0\">\n                    </div>\n                    <div class=\"col-md-6 pr-44 order-md-first\">\n                      <div class=\"h5 mb-4\"><strong>Step 3 (Dowload Resume & Apply)</strong></div>\n                      <p class=\"text-justify\">Download expert verified custom resumes from your dashboard and apply to your ideal job. Easy</p>\n                    </div>\n                  </div>\n\n                </div>\n            </div>\n\n          </div>\n\n        </div>\n    </section>\n\n    <section class=\"section-3 professionals\">\n      <div class=\"container\">\n        <div class=\"h2 yellow text-center tt-u\"><strong>See what clients are saying about Starperformers</strong></div>\n        <div class=\"block-wrap\">\n          <div class=\"block\">\n            <div class=\"text-center\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-warning btn-active professionals-link\">Service Professionals</button>\n                <button type=\"button\" class=\"btn btn-warning owners-link\">Business Owners</button>\n              <!--  <button type=\"button\" class=\"btn btn-warning customers-link\">Customers</button>-->\n              </div>\n            </div>\n            <div class=\"row justify-content-center\">\n              <div class=\"col-md-9\">\n                <p class=\"text-justify professionals\">\"I signedup up for linkedin years ago but it never served an purpose as it was targeting service professionals. I am so gladStarperformers came along and made the prorcess of applying ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc.\"</p>\n                <p class=\"text-justify owners\">Necessitatibus obcaecati exercitationem, illo molestias delectus laboriosam et officia illum ab autem optio rerum alias neque dolorum architecto error iusto dolores. Eveniet ex explicabo, aperiam similique, odit, provident laudantium velit.</p>\n                <p class=\"text-justify customers\">Deleniti blanditiis non fugiat nulla earum nobis, molestias quis voluptatum quam, laborum unde sit repudiandae qui. Ullam doloremque ex alias, nam corporis quos expedita aliquid nulla corrupti assumenda magnam ipsam. Lorem ipsum dolor sit.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/component/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/include/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/include/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "    <footer class=\"\">\n        <div class=\"container\">\n            <div class=\"navbar-nav flex-column flex-lg-row text-center\">\n              <a class=\"nav-item nav-link px-0 mr-lg-auto\" routerLink=\"/\">Info@starperformers.nyc</a>\n              <div class=\"navbar-nav flex-row nav-socials justify-content-center\">\n                <a class=\"nav-item nav-link\" routerLink=\"/\"><i class=\"fa fa-2x fa-facebook-square\"></i></a>\n                <a class=\"nav-item nav-link\" routerLink=\"/\"><i class=\"fa fa-2x fa-twitter-square\"></i></a>\n                <a class=\"nav-item nav-link\" routerLink=\"/\"><i class=\"fa fa-2x fa-instagram\"></i></a>\n              </div>\n            </div>\n            <div class=\"copyright text-center\">Copyright Starperformers 2017</div>\n        </div>\n    </footer>"

/***/ }),

/***/ "../../../../../src/app/component/include/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/component/include/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/include/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/include/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/include/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<nav class=\"navbar navbar-dark sticky-top navbar-expand-lg\">\n      <div class=\"container-fluid align-items-lg-end\">\n        <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../../../assets/img/logo.png\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\n          <a routerLink=\"/\" class=\"btn btn-warning nav-item nav-link mt-3 mt-lg-0 mx-auto\">Business Owner?</a>\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n            <a class=\"nav-item nav-link\" routerLink=\"/login/\">Login</a>\n            <a class=\"btn btn-warning nav-item nav-link\" routerLink=\"/\">Join Now</a>\n          </div>\n        </div>\n      </div>\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/component/include/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/component/include/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/include/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/bologin/bologin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/bologin/bologin.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-dark sticky-top navbar-expand-lg navbar-login\">\n      <div class=\"container-fluid align-items-lg-end\">\n         <a class=\"navbar-brand\" routerLink=\"/home\"><img src=\"../../../../assets/img/logo.png\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\n          <a routerLink=\"/login/Spsignup\" class=\"btn btn-warning mt-3 mt-lg-0 mx-auto\">Service Provider?</a>\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLink=\"/\">< Back to Home</a>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <section class=\"d-flex m-h-100 text-center section-login\">\n        <div class=\"my-auto w-100\">\n          <div class=\"container\">\n\n            <div class=\"bg-login bg-login-2\">\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n  \n                  <div class=\"block-wrap\">\n                    <div class=\"block\">\n                      <div class=\"h3\"><strong>Welcome Back Business Owner</strong></div>\n                      <div class=\"h5 mt-5\">Not a member?</div>\n                      <div class=\"h5 mb-5\"><a routerLink=\"/login/Bosignup\">Sign Up</a> for free</div>\n\n                      <form #boLoginForm = \"ngForm\" (ngSubmit)=\"onbologin(boLoginForm.value)\"ngNativeValidate>\n                        <div class=\"form-group\">\n                          <input type=\"email\"  id=\"myEmail\" name=\"email\" #emailInput class=\"form-control\" placeholder=\"Email\" required  ngModel>\n                        </div>\n                        <div class=\"form-group\">\n                          <input type=\"password\"  id=\"myPassword\" name=\"password\" #passInput class=\"form-control\" placeholder=\"Password\" required ngModel>\n                        </div>\n                        <div class=\"text-center\">\n\t\t\t\t\t\t              <button type=\"submit\" id=\"btnJoinNow\" class=\"btn btn-warning\">Login</button>\n                        </div>\n                        <div class=\"text-center fz-10 mt-3\">\n                          <strong><a routerLink=\"/\" data-toggle=\"modal\" data-target=\"#modal-forgotpass\">Forgot Password?</a></strong>\n                        </div>\n                        <div  id=\"resultDiv\"></div>\n                      </form>\n\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n    </section>\n\n<!-- forget passwor popup -->\n    <div class=\"modal fade\" id=\"modal-forgotpass\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <div class=\"text-center fz-20\"><strong>Fill for new password</strong></div>\n\n            <form #forgotpass = \"ngForm\" (ngSubmit)=\"onforgotpass(forgotpass.value)\"ngNativeValidate>\n              <div class=\"row\">\n                <div class=\"col-sm\">\n                  <div class=\"form-group form-group-min\">\n                    <p class=\"mb-1\"><strong>Email</strong></p>\n                    <input type=\"text\" class=\"form-control form-control-min\" name=\"email\" placeholder=\"email\" #email ngModel required>\n                  </div>\n                </div>\n                <div class=\"col-sm\">\n                  <div class=\"form-group form-group-min\">\n                    <p class=\"mb-1\"><strong>Phone number</strong></p>\n                    <input type=\"text\" class=\"form-control form-control-min\" placeholder=\"password\" name=\"password\" #password ngModel required>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row justify-content-end\">\n                <div class=\"col-sm-auto\">\n                  <button type=\"submit\" class=\"btn btn-min btn-block btn-warning mb-3\">Save</button>\n                </div>\n              </div>\n            </form>\n\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/component/login/bologin/bologin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BologinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/component/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BologinComponent = (function () {
    function BologinComponent(loginService) {
        this.loginService = loginService;
    }
    BologinComponent.prototype.ngOnInit = function () {
    };
    BologinComponent.prototype.onbologin = function (addinfo) {
        console.log('test', addinfo);
        this.loginService.boLogin(addinfo).subscribe(function (data) { });
    };
    BologinComponent.prototype.forgotpass = function (forgpass) {
        console.log('test', forgpass);
        this.loginService.boLogin(forgpass).subscribe(function (data) { });
    };
    BologinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bologin',
            template: __webpack_require__("../../../../../src/app/component/login/bologin/bologin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/bologin/bologin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]])
    ], BologinComponent);
    return BologinComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/bosignup/bosignup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/bosignup/bosignup.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-dark sticky-top navbar-expand-lg navbar-login\">\n      <div class=\"container-fluid align-items-lg-end\">\n         <a class=\"navbar-brand\" routerLink=\"/home\"><img src=\"../../../../assets/img/logo.png\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\n          <a routerLink=\"/login/Spsignup\" class=\"btn btn-warning mt-3 mt-lg-0 mx-auto\">Service Professional?</a>\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLink=\"/\">< Back to Home</a>\n          </div>\n        </div>\n      </div>\n    </nav>\n   <section class=\"d-flex m-h-100 text-center section-login\">\n        <div class=\"my-auto w-100\">\n          <div class=\"container\">\n\n            <div class=\"bg-login bg-login-1\">\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n  \n                  <div class=\"block-wrap\">\n                    <div class=\"block\">\n                      <div class=\"h3\"><strong>Welcome Business Owner</strong></div>\n                      <div class=\"h5 mt-5\">Sign Up For Free</div>\n                      <div class=\"h5 mb-5\">Already have an account? <a routerLink=\"/login/bologin\">Login</a></div>\n\n                      <form #boSignupForm = \"ngForm\" (ngSubmit)=\"onsignup(boSignupForm.value)\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                              <input type=\"text\" id=\"firstName\" #fname name=\"fname\" class=\"form-control\" placeholder=\"First Name\" ngModel>\n                             \n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                              <input type=\"text\" id=\"lastName\" #lname name=\"lnaame\" class=\"form-control\" placeholder=\"Last Name\" ngModel>\n                              \n                            </div>\n                          </div>\n                          <div class=\"col-12\">\n                            <div class=\"form-group\">\n                              <input type=\"email\"  id=\"myEmail\" #emailInput name=\"email\" class=\"form-control\" placeholder=\"e-mail\" ngModel>\n                              \n                            </div>\n                          </div>\n                          <div class=\"col-12\">\n                            <div class=\"form-group\">\n                              <input type=\"password\"  id=\"myPassword\" #passlInput name=\"password\" class=\"form-control\" placeholder=\"Password\" ngModel>\n                            </div>\n                          </div>\n                          <div class=\"col-12 text-center fz-10 mb-3\">\n                            <strong>By Signing Up, I agree to Starperformers <a href=\"#\" class=\"\">Terms Of Use</a> and <a href=\"#\">Privacy Policy</a></strong>\n                          </div>\n                          <div class=\"col-12 text-center\">\n                            <button type=\"submit\" href=\"javascript:void(0)\" id=\"btnJoinNow\" class=\"btn btn-warning\">Join Now</button>\n                          </div>\n                        </div>\n                        <div  id=\"resultDiv\"></div>\n                      </form>\n\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n    </section>\n"

/***/ }),

/***/ "../../../../../src/app/component/login/bosignup/bosignup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BosignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/component/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BosignupComponent = (function () {
    function BosignupComponent(loginService) {
        this.loginService = loginService;
    }
    BosignupComponent.prototype.ngOnInit = function () {
    };
    BosignupComponent.prototype.onsignup = function (addinfo) {
        console.log('test', addinfo);
        this.loginService.boSignup(addinfo).subscribe(function (data) { });
    };
    BosignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bosignup',
            template: __webpack_require__("../../../../../src/app/component/login/bosignup/bosignup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/bosignup/bosignup.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]])
    ], BosignupComponent);
    return BosignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/fogot-password/fogot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resetpass {\n    text-align: left;\n    font-size: 15px;\n    color: #f4c400;\n}\n.row.justify-content.updatepass {\n    text-align: center;\n    margin: 45px auto 0;\n    width: 270px;\n}\n.resetpass:first-child {\n    margin-top: 30px;\n}\n.resetpasswordsave {\n    text-align: center;\n    margin:40px 0 0 20px;\n}\n.emaildesign{\n\tmargin-top:40px;\n}\na.nav-item.nav-link.link_text {\n    font-size: 15px;\n    padding: 0px 0px 10px 0;\n    line-height: 40px;\n}\n.loginerror {\n    color: #f4c300;\n    font-size: 16px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/fogot-password/fogot-password.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-dark sticky-top navbar-expand-lg navbar-login\">\n      <div class=\"container-fluid align-items-lg-end\">\n         <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../../../../assets/img/logo.png\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\n          <a routerLink=\"/login/bologin\" class=\"btn btn-warning mt-3 mt-lg-0 mx-auto\">Business Owner?</a>\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLink=\"/\">< Back to Home</a>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n\n\n        <section class=\"d-flex m-h-100 text-center section-login\">\n        <div class=\"my-auto w-100\">\n          <div class=\"container\">\n\n            <div class=\"bg-login\">\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"block-wrap\">\n <!-- forget password --> \n                    <div class=\"block\" *ngIf=\"whichForm\">\n                      <div class=\"h3\"><strong>Please Enter Your Email For Reset Password</strong></div>\n                      <p class=\"loginerror\">{{loginerror}}</p>\n                      <p class=\"resetpass emaildesign\">Enter Email</p>\n                      <form #forgotpass = \"ngForm\" (ngSubmit)=\"onforgotpass(forgotpass.value)\"ngNativeValidate>\n                        <div class=\"form-group\">\n                          <input type=\"email\"  id=\"myEmail\" #emailInput class=\"form-control\" placeholder=\"Email\" name=\"email\" required ngModel>\n                          <!-- <span id ='email_error_message'></span> -->\n                        </div>\n\n                      <div class=\"row justify-content resetpasswordsave\">\n                      <div class=\"col-sm-auto\">\n                         <a class=\"nav-item nav-link link_text\" routerLink=\"/login/splogin\">Click to login</a>\n                      </div>\n                      <div class=\"col-sm-auto\">\n                        <button type=\"submit\"  class=\"btn btn-min btn-block btn-warning mb-3\" onClick=\"modal_hide\">Save</button>\n                      </div>\n                    </div>\n                      </form>\n                    </div>\n<!-- Confirm Password -->\n                    <div class=\"block\" *ngIf=\"!whichForm\">\n                      <div class=\"h3\"><strong>Please Enter Your new Password</strong></div>\n                      <p class=\"loginerror\">{{loginerror}}</p>\n                      <form #confirmpassword = \"ngForm\" (ngSubmit)=\"onresetPass(confirmpassword.value)\"ngNativeValidate>\n                        <div class=\"form-group\">\n                           <p class=\"resetpass\">New Password</p>\n                          <input type=\"password\"  id=\"password\" #password class=\"form-control\" placeholder=\"password\" name=\"password\" required ngModel>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                          <p class=\"resetpass\">Re-enter Password</p>\n                          <input type=\"password\"  id=\"Confirmpassword\" #Confirmpassword class=\"form-control\" placeholder=\"Re-enter Password\" name=\"Confirmpassword\" required ngModel>\n                        </div>\n\n                        <div class=\"row justify-content updatepass\">\n                          <div class=\"col-sm-auto\">\n                            <a class=\"nav-item nav-link link_text\" routerLink=\"/login/splogin\">Click to login</a>\n                            <button type=\"submit\"  class=\"btn btn-min btn-block btn-warning mb-3\" onClick=\"modal_hide\">Reset password</button>\n                          </div>\n                        </div>\n                      </form>\n\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n    </section>\n"

/***/ }),

/***/ "../../../../../src/app/component/login/fogot-password/fogot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FogotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/component/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FogotPasswordComponent = (function () {
    function FogotPasswordComponent(loginService, router, activatedRoute) {
        this.loginService = loginService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.whichForm = true;
    }
    FogotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParamMap.subscribe(function (params) {
            console.log("check perameter", params);
            if (params.get("token") == null) {
                _this.whichForm = true;
            }
            else {
                _this.token = params.get("token");
                console.log("token", _this.token);
                _this.whichForm = false;
            }
        });
    };
    //--Forgotpassword--
    FogotPasswordComponent.prototype.onforgotpass = function (pass) {
        var _this = this;
        this.loginService.forgotPassword(pass).subscribe(function (data) {
            _this.loginerror = data.message;
        });
    };
    // --Reset Password--
    FogotPasswordComponent.prototype.onresetPass = function (reenter) {
        var _this = this;
        if (reenter.password === reenter.Confirmpassword) {
            reenter['token'] = this.token;
            var data = {};
            data['token'] = this.token;
            data['Confirmpassword'] = reenter.Confirmpassword;
            this.loginService.resetPassword(data).subscribe(function (data) {
                _this.loginerror = data.message;
            });
        }
        else {
            alert("Passwords doesnot match");
        }
    };
    FogotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fogot-password',
            template: __webpack_require__("../../../../../src/app/component/login/fogot-password/fogot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/fogot-password/fogot-password.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], FogotPasswordComponent);
    return FogotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/login-header/login-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/login-header/login-header.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-dark sticky-top navbar-expand-lg navbar-login\">\n      <div class=\"container-fluid align-items-lg-end\">\n         <a class=\"navbar-brand\" routerLink=\"/home\"><img src=\"../../../../assest/img/logo.png\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\n          <a routerLink=\"/boligin\" class=\"btn btn-warning mt-3 mt-lg-0 mx-auto\">Business Owner?</a>\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLink=\"/home\">< Back to Home</a>\n          </div>\n        </div>\n      </div>\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/component/login/login-header/login-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginHeaderComponent = (function () {
    function LoginHeaderComponent() {
    }
    LoginHeaderComponent.prototype.ngOnInit = function () {
    };
    LoginHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-header',
            template: __webpack_require__("../../../../../src/app/component/login/login-header/login-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/login-header/login-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginHeaderComponent);
    return LoginHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-login-header></app-login-header> -->\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/component/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    // Splogin--
    LoginService.prototype.userlogin = function (formdata) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'splogin', formdata).map(function (data) { return data.json(); });
    };
    //SpSignup--
    LoginService.prototype.spSignup = function (formdata) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'spsignup', formdata).map(function (data) { return data.json(); });
    };
    //boSignup--
    LoginService.prototype.boSignup = function (formdata) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'user', formdata).map(function (response) {
            return response.json();
        });
    };
    //bologin--
    LoginService.prototype.boLogin = function (formdata) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'user', formdata).map(function (response) {
            return response.json();
        });
    };
    //forgot password
    LoginService.prototype.forgotPassword = function (data) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'forgotpassword', data).map(function (response) {
            return response.json();
        });
    };
    //forgot password
    LoginService.prototype.resetPassword = function (data) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'reset_password', data).map(function (response) {
            return response.json();
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginerror{\n\tcolor: #ffcc00;\n}\n/*.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948;  green \n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n/*}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-dark sticky-top navbar-expand-lg navbar-login\">\n      <div class=\"container-fluid align-items-lg-end\">\n         <a class=\"navbar-brand\" routerLink=\"/home\"><img src=\"../../../../assets/img/logo.png\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\n          <a routerLink=\"/login/Bosignup\" class=\"btn btn-warning mt-3 mt-lg-0 mx-auto\">Business Owner?</a>\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLink=\"/login/splogin\">Login</a>\n          </div>\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLink=\"/\">< Back to Home</a>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <section class=\"d-flex m-h-100 text-center section-login\">\n        <div class=\"my-auto w-100\">\n          <div class=\"container\">\n\n            <div class=\"bg-login\">\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n  \n                  <div class=\"block-wrap\">\n                    <div class=\"block\">\n                      <div class=\"h3\"><strong>Welcome Star performer</strong></div>\n                      <div class=\"h5 mt-5\">Sign Up For Free</div>\n                      <div class=\"h5 mb-5\">Already have an account? <a routerLink=\"/login/splogin\">Login</a></div>\n                      \n                      <p class=\"loginerror\">{{loginerror}}</p>\n                      <form #SignupForm = \"ngForm\" (ngSubmit)=\"onsignup(SignupForm.value)\" ngNativeValidate>\n                        <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                              <input type=\"text\" id=\"firstName\" #fname class=\"form-control\" name=\"firstName\" placeholder=\"First Name\" required ngModel >\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                              <input type=\"text\" id=\"lastName\" #lname class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\" ngModel>\n                            </div>\n                          </div>\n                          <div class=\"col-12\">\n                            <div class=\"form-group\">\n                              <input type=\"email\"  id=\"myEmail\" #email class=\"form-control\" name=\"email\" placeholder=\"e-mail\" required ngModel>\n                            </div>\n                          </div>\n                          <div class=\"col-12\">\n                            <div class=\"form-group\">\n                              <input type=\"password\"  id=\"myPassword\" #password class=\"form-control\" name=\"password\" placeholder=\"Password\"  minlength=\"6\" (onkeyup)=\"passwordValidate(password)\" required ngModel>\n                            </div>\n\n                          </div>\n                          <div class=\"col-12 text-center fz-10 mb-3\">\n                            <strong>By Signing Up, I agree to Starperformers <a href=\"#\" class=\"\">Terms Of Use</a> and <a href=\"\">Privacy Policy</a></strong>\n                          </div>\n                          <div class=\"col-12 text-center\">\n                            <button type=\"submit\" id=\"btnJoinNow\" class=\"btn btn-warning\">Join Now</button>\n                          </div>\n                        </div>\n                        <div  id=\"resultDiv\"></div>\n                      </form>\n\n\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/component/login/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/component/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(loginService, cookie, router, route) {
        this.loginService = loginService;
        this.cookie = cookie;
        this.router = router;
        this.route = route;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onsignup = function (addinfo) {
        var _this = this;
        this.loginerror = "";
        console.log(this.loginerror, 'ok');
        console.log('test', addinfo);
        this.loginService.spSignup(addinfo).subscribe(function (data) {
            console.log(data);
            _this.logincomponent = data.status;
            if (data.status) {
                _this.cookie.set('user', JSON.stringify(data));
                _this.loginerror = data.message;
                _this.router.navigate(['../../SpProfile'], { relativeTo: _this.route });
            }
            else {
                _this.loginerror = data.message;
            }
        });
    };
    SignupComponent.prototype.passwordValidate = function () {
        console.log();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/component/login/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/signup/signup.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/splogin/splogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-upload{\n\tdisplay: none;\n}\n.addphoto{\n\tcursor: pointer;\n}\n.loginerror{\n\tcolor: #ffcc00;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/splogin/splogin.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-dark sticky-top navbar-expand-lg navbar-login\">\n      <div class=\"container-fluid align-items-lg-end\">\n         <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../../../../assets/img/logo.png\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\n          <a routerLink=\"/login/bologin\" class=\"btn btn-warning mt-3 mt-lg-0 mx-auto\">Business Owner?</a>\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLink=\"/login/splogin\">Login</a>\n          </div>\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLink=\"/login/Spsignup\">Signup</a>\n          </div>\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLink=\"/\">Back to Home</a>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <section class=\"d-flex m-h-100 text-center section-login\">\n        <div class=\"my-auto w-100\">\n          <div class=\"container\">\n\n            <div class=\"bg-login\">\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n  \n                  <div class=\"block-wrap\">\n                    <div class=\"block\">\n                      <div class=\"h3\"><strong>Welcome Back Star performer</strong></div>\n                      <div class=\"h5 mt-5\">Not a member?</div>\n                      <div class=\"h5 mb-5\"><a routerLink=\"/login/Spsignup\">Sign Up</a> for free</div>\n                      <p class=\"loginerror\">{{loginerror}}</p>\n                      <form #LoginForm = \"ngForm\" (ngSubmit)=\"onlogin(LoginForm.value)\"ngNativeValidate>\n                        <div class=\"form-group\">\n                          <input type=\"email\"  id=\"myEmail\" #emailInput class=\"form-control\" placeholder=\"Email\" name=\"email\" required ngModel>\n                          <!-- <span id ='email_error_message'></span> -->\n                        </div>\n                        <div class=\"form-group\">\n                          <input type=\"password\"  id=\"mypass\" #passInput class=\"form-control\" placeholder=\"Password\" name=\"password\" required  ngModel>\n                          <!-- <span id ='password_error_message'></span> -->\n\n                        </div>\n                        <div class=\"text-center\">\n\t\t\t\t\t\t              <button type=\"submit\"  id=\"btnJoinNow\" class=\"btn btn-warning\">Login</button>\n                        </div>\n                        <div class=\"text-center fz-10 mt-3\">\n                          <strong><a routerLink=\"/login/forgotPassword\">Forgot Password?</a></strong>\n                        </div>\n                        <div  id=\"resultDiv\"></div>\n                      </form>\n\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n    </section>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/login/splogin/splogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SploginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/component/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SploginComponent = (function () {
    function SploginComponent(loginService, router, route, cookie) {
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.cookie = cookie;
    }
    SploginComponent.prototype.ngOnInit = function () {
    };
    SploginComponent.prototype.onlogin = function (addinfo) {
        var _this = this;
        this.loginerror = "";
        console.log(this.loginerror, 'ok');
        console.log('test', addinfo);
        this.loginService.userlogin(addinfo)
            .subscribe(function (data) {
            if (data.status) {
                console.log(data);
                _this.cookie.set('user', JSON.stringify(data));
                _this.router.navigate(['../../SpProfile'], { relativeTo: _this.route });
            }
            else {
                _this.loginerror = data.message;
            }
        });
    };
    SploginComponent.prototype.onforgotpass = function (pass) {
        console.log('test', pass);
        this.loginService.userlogin(pass).subscribe(function (data) { });
    };
    SploginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-splogin',
            template: __webpack_require__("../../../../../src/app/component/login/splogin/splogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/splogin/splogin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], SploginComponent);
    return SploginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/routing-module/routing-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AlwaysAuthGuard */
/* unused harmony export loggedInGuard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModuleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingcomponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_bologin_bologin_component__ = __webpack_require__("../../../../../src/app/component/login/bologin/bologin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_splogin_splogin_component__ = __webpack_require__("../../../../../src/app/component/login/splogin/splogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_bosignup_bosignup_component__ = __webpack_require__("../../../../../src/app/component/login/bosignup/bosignup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_signup_signup_component__ = __webpack_require__("../../../../../src/app/component/login/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_fogot_password_fogot_password_component__ = __webpack_require__("../../../../../src/app/component/login/fogot-password/fogot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sp_profile_sp_profile_component__ = __webpack_require__("../../../../../src/app/component/sp-profile/sp-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AlwaysAuthGuard = (function () {
    function AlwaysAuthGuard(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
    }
    AlwaysAuthGuard.prototype.canActivate = function () {
        var usersData = this._cookieService.get("user");
        if (usersData) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AlwaysAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_11_ngx_cookie_service__["a" /* CookieService */]])
    ], AlwaysAuthGuard);
    return AlwaysAuthGuard;
}());

var loggedInGuard = (function () {
    function loggedInGuard(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
    }
    loggedInGuard.prototype.canActivate = function () {
        var usersData = this._cookieService.get("user");
        if (usersData) {
            this.router.navigate(['SpProfile']);
            return false;
        }
        else {
            return true;
        }
    };
    loggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_11_ngx_cookie_service__["a" /* CookieService */]])
    ], loggedInGuard);
    return loggedInGuard;
}());

// --routes path 
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */], canActivate: [loggedInGuard] },
    { path: 'SpProfile', component: __WEBPACK_IMPORTED_MODULE_9__sp_profile_sp_profile_component__["a" /* SpProfileComponent */], canActivate: [AlwaysAuthGuard] },
    // login routes
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], children: [
            { path: '', redirectTo: 'splogin', pathMatch: 'full' },
            { path: 'Bosignup', component: __WEBPACK_IMPORTED_MODULE_6__login_bosignup_bosignup_component__["a" /* BosignupComponent */] },
            { path: 'splogin', component: __WEBPACK_IMPORTED_MODULE_5__login_splogin_splogin_component__["a" /* SploginComponent */] },
            { path: 'Spsignup', component: __WEBPACK_IMPORTED_MODULE_7__login_signup_signup_component__["a" /* SignupComponent */] },
            { path: 'bologin', component: __WEBPACK_IMPORTED_MODULE_4__login_bologin_bologin_component__["a" /* BologinComponent */] },
            { path: 'forgotPassword', component: __WEBPACK_IMPORTED_MODULE_8__login_fogot_password_fogot_password_component__["a" /* FogotPasswordComponent */] },
        ] }
];
var RoutingModuleModule = (function () {
    function RoutingModuleModule() {
    }
    RoutingModuleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(appRoutes)],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            providers: [AlwaysAuthGuard, loggedInGuard]
        })
    ], RoutingModuleModule);
    return RoutingModuleModule;
}());

//export routingcomponet class include in module.ts file 
var routingcomponent = [
    __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_5__login_splogin_splogin_component__["a" /* SploginComponent */],
    __WEBPACK_IMPORTED_MODULE_4__login_bologin_bologin_component__["a" /* BologinComponent */],
    __WEBPACK_IMPORTED_MODULE_7__login_signup_signup_component__["a" /* SignupComponent */],
    __WEBPACK_IMPORTED_MODULE_6__login_bosignup_bosignup_component__["a" /* BosignupComponent */],
    __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_9__sp_profile_sp_profile_component__["a" /* SpProfileComponent */],
    __WEBPACK_IMPORTED_MODULE_8__login_fogot_password_fogot_password_component__["a" /* FogotPasswordComponent */]
];


/***/ }),

/***/ "../../../../../src/app/component/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SharedService = (function () {
    function SharedService(_http, cookie) {
        this._http = _http;
        this.cookie = cookie;
    }
    // SP-Profile Summary--
    SharedService.prototype.summary = function (formdata) {
        var options = this.getToken();
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'summary', formdata, options).map(function (data) { return data.json(); });
    };
    // SP-Profile Experience--
    SharedService.prototype.experience = function (formdata) {
        var options = this.getToken();
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'experience', formdata, options).map(function (data) { return data.json(); });
    };
    // SP-Profile Update Experience--
    SharedService.prototype.updateExperience = function (id, formdata) {
        var options = this.getToken();
        return this._http.put(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'edit_experience/' + id, formdata, options).map(function (data) { return data.json(); });
    };
    // SP-Profile Delete Experience--
    SharedService.prototype.deleteExperience = function (id) {
        var options = this.getToken();
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'remove_experience/' + id, options).map(function (data) { return data.json(); });
    };
    // SP-Profile Eduction--
    SharedService.prototype.eduction = function (formdata) {
        var options = this.getToken();
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'education', formdata, options).map(function (data) { return data.json(); });
    };
    // SP-Profile Update eduction--
    SharedService.prototype.updateEduction = function (id, formdata) {
        var options = this.getToken();
        return this._http.put(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'edit_education/' + id, formdata, options).map(function (data) { return data.json(); });
    };
    // SP-Profile Delete eduction--
    SharedService.prototype.removeEduction = function (id) {
        var options = this.getToken();
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'remove_education/' + id, options).map(function (data) { return data.json(); });
    };
    // Certifications
    SharedService.prototype.Certifications = function (formdata) {
        var options = this.getToken();
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'certification', formdata, options).map(function (data) { return data.json(); });
    };
    // SP-Profile Update Certifications--
    SharedService.prototype.updatecertifications = function (id, formdata) {
        var options = this.getToken();
        return this._http.put(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'edit_certificates/' + id, formdata, options).map(function (data) { return data.json(); });
    };
    // SP-Profile Delete Certifications--
    SharedService.prototype.removecertifications = function (id) {
        var options = this.getToken();
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'remove_certifications/' + id, options).map(function (data) { return data.json(); });
    };
    // SP-Profile Setting--
    SharedService.prototype.onsetting = function (formdata) {
        var options = this.getToken();
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'settings', formdata, options).map(function (data) { return data.json(); });
    };
    // Upload image--
    SharedService.prototype.imageupload = function (formdata) {
        var options = this.getToken();
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'upload', formdata, options).map(function (data) { return data.json(); });
    };
    //get profile info
    SharedService.prototype.getProfile = function () {
        var options = this.getToken();
        return this._http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'profileinfo', options).map(function (data) { return data.json(); });
    };
    SharedService.prototype.getToken = function () {
        var token = JSON.parse(this.cookie.get('user')).token;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Authorization', token);
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        opts.headers = header;
        return opts;
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__["a" /* CookieService */]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "../../../../../src/app/component/sp-profile/sp-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choose-file{\n\tdisplay: none;\n}\n.fz-18:hover .choose-file{\n\tdisplay: block;\n\tcursor: pointer;\n}\n.addphoto{\n\tcursor: pointer;\n}\n.col-sm-auto.has-control {\n   -webkit-box-flex: 1;\n       -ms-flex: auto;\n           flex: auto;\n}\n.dashboard-block-min .expinfo p{\n\tfont-size: 17px;\n\ttext-transform: capitalize;\n}\n.expinfo {\n    border-bottom: 1px solid #f4c400;\n    margin-bottom: 20px;\n}\n\n.expinfo:last-child {\n    border: transparent;\n}\nspan {\n    font-size: 17px;\n    font-weight: bold;\n}\n\n.expinfo p:first-child {\n    font-weight: bold;\n}\n.fz-25 {\n    text-transform: capitalize;\n}\n.show-data{\n\tborder: 1px solid #ff0000;\n    margin-bottom: 5px;\n\n}\n.fill{\n\tborder:transparent;\n\n}\n.profile_image{\n\theight: 100%;\n}\n.user.user-big.fz-18 img {\n    height: 100%;\n}\n.expinfo a:hover {\n    color: #00ff00;\n}\n.expinfo .btn {\n    font-size: 20px;\n    font-weight: 500;\n    white-space: normal;\n    border-radius: 5px;\n    padding: 1px 10px;\n    cursor: pointer;\n}\n.expinfo .btn-danger{\n    color:#fff;\n}\n.dashboard-block-title {\n    padding-bottom: 20px;\n    border-bottom: transparent; \n    margin-bottom: 36px;\n}\na {\n    cursor: pointer;\n}\n.cancel_btn{\n    color: #fff!important;\n    border-radius: 10px!important;\n}\n.summary-icon {\n   display: block;\n    text-align: right;\n    position: absolute;\n    top: 20px;\n    right: 25px;\n    cursor: pointer;\n    border: 2px solid #f4c400;\n    padding: 5px;\n    border-radius: 50%;\n    font-size: 16px;\n    width: 30px;\n    height: 30px;\n    line-height: 15px;\n}\n.dashboard-block-min {\n    position: relative;\n}\n.dashboard-block-title{\n    margin-bottom: 5px;\n}\n.btn-center{\n    margin: 0 auto;\n}\n.gray.semibold{\n    font-size: 16px;\n}\ndiv.red {\n    color: #ff0000;\n}\n.edit_btn.btn {\n    padding: 3px 15px;\n    cursor: pointer;\n}\n.experienceList {\n    border-bottom: 1px solid #f4c400;\n    margin: 0px 0 30px 0;\n}\na.btn.btn-danger.edit_btn .fa {\n   color: #fff;\n}\n.loginerror{\n    color: #ff0000;\n}\n.form-control:focus {\n  background-color: #fff;\n}\np.strength_field{\n    font-size: 19px;\n}\n.highlight {\n    border: 3px solid #f4c300;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/sp-profile/sp-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header section start -->\n    <nav class=\"navbar navbar-dark sticky-top navbar-expand-lg\">\n      <div class=\"container-fluid align-items-lg-end\">\n        <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../../../assets/img/logo.png\"></a>\n        <button class=\"navbar-toggler mr-auto\" type=\"button\" id=\"sandwich\">\n          <i class=\"fa fa-angle-right fa-2x\"></i>\n        </button>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" href=\"#\">Job Board</a>\n            <a class=\"nav-item nav-link\" href=\"#\">Resources</a>\n            <a class=\"btn btn-warning nav-item nav-link\" href=\"SPSignup.html\">Earn Cash</a>\n          </div>\n        </div>\n      </div>\n    </nav>\n<!-- Header section end -->\n\n    <div class=\"row mx-0\">\n\n      <div class=\"col-md-4 px-0 sidebar position-sticky\">\n          <img src=\"../../../assets/img/bg-dash-min.jpg\" alt=\"\" class=\"w-100 \">\n        <div class=\"col\">\n\n          <div class=\"info-block text-center\">\n            <div class=\"user\">\n              <img [src]=\"profile_image || '../../../assets/img/bg-dash-min.jpg'\" alt=\"\" class=\"profile_image w-100\">\n            </div>\n            <div><strong>{{current_user.firstname}} {{current_user.lastname}}</strong></div>\n            <p class=\"fz-15\">Lives {{settingInfo?.city}}, {{settingInfo?.state}}</p>\n            <div class=\"progress\">\n              <div class=\"progress-bar bg-warning\" role=\"progressbar\" [ngStyle]=\"{'width.%':profile_progress }\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n            <p class=\"strength_field\">Profile Strength: {{profile_progress}}%</p>\n          </div>\n\n          <div class=\"sidebar-content\">\n            <p>\n              <a ><strong>Profile</strong></a>\n             \n              <a class=\"fz-18\">Contact Informatiom</a>\n              <a class=\"fz-18 show-data\" (click)=\"highlightArea(1,'summary')\" [ngClass]=\"{'fill':summaryShowborder}\">Summary</a>\n              <a class=\"fz-18 show-data\" (click)=\"highlightArea(2,'experience')\" [ngClass]=\"{'fill':this.experienceList?.length }\">Experience  ({{this.experienceList.length}}/{{settingInfo?.job_count}})</a>\n\n              <a class=\"fz-18 show-data\" (click)=\"highlightArea(3,'education')\" [ngClass]=\"{'fill':this.educationList.length}\">Education (0/{{education_field}})</a>\n              <a class=\"fz-18 show-data \" (click)=\"highlightArea(4,'certificate')\" [ngClass]=\"{'fill':this.certificateList.length}\">Certifications</a>\n            </p>\n            <p>\n              <a routerLink=\"/\"><strong>Job Dashboard</strong></a>\n              <a routerLink=\"/\" class=\"fz-18\">Job Preferences</a>\n              <a routerLink=\"/\" class=\"fz-18\">Recommended Jobs</a>\n              <a routerLink=\"/\" class=\"fz-18\">My Resume</a>\n            </p>\n            <p>\n              <a routerLink=\"/\" data-toggle=\"modal\" id=\"settingmodal\" data-target=\"#modal-settings\">Settings</a>\n              <a (click)=\"logoutUser()\">Log Out</a>\n              <a routerLink=\"/\">Get Help</a>\n            </p>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col p-0 py-4\">\n\n        <div class=\"col\">\n          <div class=\"dashboard-content\">\n            <div class=\"text-center mt-2 mb-4\"><i>“We will Display Expert Tips and Inapp messages from Admin here”</i></div>\n            <div class=\"bg-dash-wrap\"></div>\n            <div class=\"dashboard-block\">\n              <div class=\"text-center\">\n                <div class=\"user user-big fz-18\">\n                   <img [src]=\"profile_image || '../../../assets/img/bg-dash-min.jpg'\" alt=\"\" class=\"w-100\">\n                  <form>\n                  <div class=\"form-group\"> \n                    <input name=\"myFile\" #fileInput class=\"image-upload\" type=\"file\" hidden (change)=\"uploadFile($event)\" ngModel accept=\"image/*\" />\n                      <div class=\"choose-file\">\n                        <a (click)=\"chooseFileEnable()\" class=\"addphoto\" *ngIf=\"!image_status;else change_text\">Add Photo</a>\n                        <ng-template #change_text>\n                          <a (click)=\"chooseFileEnable()\" class=\"addphoto\"  >Update</a>\n                        </ng-template>\n                      </div>\n                  </div>\n              </form>\n                </div>\n                <div class=\"fz-25\"><strong>{{current_user.firstname}} {{current_user.lastname}}</strong></div>\n                <p class=\"mb-5\">Current Job, {{settingInfo?.city}}, {{settingInfo?.state}}</p>\n              </div>\n\n<!-- Summary section -->\n\n              <div class=\"dashboard-block-min\" [ngClass]=\"{'highlight': this.highlightSection == 1}\"  id=\"summary\">\n                <div class=\"dashboard-block-title\"><strong>Summary</strong></div>\n                <div class=\"summary_Edit\" *ngIf=\"summaryInfo\">\n                  <i class=\"fa fa-pencil summary-icon\" (click)=\"summaryInfo = !summaryInfo\" aria-hidden=\"true\"></i>\n                  <p [innerHtml]=\"summary_Info\"></p>\n                </div>\n                <div  *ngIf=\"!summaryInfo\">\n                    <form #summaryForm = \"ngForm\" (ngSubmit)=\"onSummary(summaryForm.value)\" ngNativeValidate >\n                        <div class=\"form-group\">\n                            <textarea type=\"text\" name=\"summary_Info\" class=\"form-control form-control-min\" placeholder=\"Write your Summary here...\" [(ngModel)]=\"summary_Info\"></textarea>\n                        </div>\n                        <div class=\"row justify-content-center pt-2 pb-3\">\n                          <div class=\"col-sm-auto px-xl-4\">\n                            <a  type=\"button\" class=\"btn btn-block btn-dark mb-3 cancel_btn\" (click)=\"summaryInfo = !summaryInfo\">Cancel</a>\n                          </div>\n                          <div class=\"col-sm-auto px-xl-4\">\n                            <button type=\"submit\"  class=\"btn btn-block btn-warning mb-3 \">Save</button>\n                          </div>\n                        </div>\n                    </form>\n                </div>\n              </div>\n<!-- Experience and  Education and certifications popup-->\n\n<!-- Experience popup -->\n              <div class=\"dashboard-block-min\" [ngClass]=\"{'highlight': this.highlightSection == 2}\" id=\"experience\">\n                <div class=\"dashboard-block-title\"><strong>Experience <a href=\"#\" class=\"ml-1\" data-toggle=\"modal\" data-target=\"#modal-experience\"><img src=\"../../../assets/img/plus.png\" alt=\"\"></a></strong></div>\n                <div class=\"experienceList\" *ngFor=\"let experience of experienceList; let i = index;\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-5 \">\n                        <p>{{experience?.company}}</p>\n                        <p>{{experience?.state}},{{experience?.city}}</p>\n                      </div>\n                      <div class=\"col-sm-5\">\n                      <span *ngIf=\"experience?.present\">\n                         {{experience?.from_month}}.{{experience?.from_year}} - Present\n                      </span>\n                      <span *ngIf=\"!experience?.present\">\n                         {{experience?.from_month}}.{{experience?.from_year}} - {{experience?.to_month}}.{{experience?.to_year}}\n                      </span>\n                      </div>\n                      <div class=\"col-sm-1 text-right\">\n                        <a  class=\"btn btn-success edit_btn\" (click)=\"updateExperience(experience,i)\" href=\"#\" id=\"experienceUpdate\" data-toggle=\"modal\" data-target=\"#modal-experience\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n                      </div>\n                      <div class=\"col-sm-1\">\n                         <a class=\"btn btn-danger edit_btn\" (click)=\"removeExperience(i,experience._id)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>\n                      </div>\n                      \n                  </div>\n\n                  <div>\n                    <p>{{experience?.responsibility1}}</p>\n                    <p>{{experience?.responsibility2}}</p>\n                  </div>\n              </div>\n              </div>\n\n<!--Education  -->\n              <div class=\"dashboard-block-min\" [ngClass]=\"{'highlight': this.highlightSection == 3}\" id=\"education\">\n                <div class=\"dashboard-block-title\"><strong>Education <a href=\"#\" class=\"ml-1\" data-toggle=\"modal\" data-target=\"#modal-eduction\"><img src=\"../../../assets/img/plus.png\" alt=\"\"></a></strong>\n                <div class=\"experienceList\" *ngFor=\"let education of educationList; let i = index;\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-5\">\n                        <p>{{education?.education_level}}</p>\n                        <p>{{education?.school}}</p>\n                      </div>\n                      <div class=\"col-sm-5\">\n                         <span *ngIf=\"education?.present\">\n                          {{education?.begin_month}}.{{education?.begin_year}} - Present\n                        </span>\n                        <span *ngIf=\"!education?.present\">\n                          {{education?.begin_month}}.{{education?.begin_year}}-{{education?.end_month}}.{{education?.end_year}}\n                        </span>\n                      </div> \n                      <div class=\"col-sm-1 text-right\">\n                        <a  class=\"btn btn-success edit_btn\" (click)=\"updateEducation(education,i)\" href=\"#\" id=\"experienceUpdate\" data-toggle=\"modal\" data-target=\"#modal-eduction\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n                      </div>\n                      <div class=\"col-sm-1\">\n                         <a class=\"btn btn-danger edit_btn\" (click)=\"removeEducation(i,education._id)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>\n                      </div>      \n                  </div>\n              </div>\n                </div>\n              </div>\n\n<!--certifications  -->\n              <div class=\"dashboard-block-min\" [ngClass]=\"{'highlight': this.highlightSection == 4}\" id=\"certificate\">\n                <div class=\"dashboard-block-title\"><strong>Certifications <a href=\"#\" class=\"ml-1\" data-toggle=\"modal\" data-target=\"#modal-certifications \"><img src=\"../../../assets/img/plus.png\" alt=\"\"></a></strong>\n                <div class=\"experienceList\" *ngFor=\"let certificate of certificateList; let i = index;\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-5\">\n                        <p>{{certificate?.certificate_num}}</p>\n                        <p>{{certificate?.certification_type}}</p>\n                      </div>\n                      <div class=\"col-sm-1 text-right\">\n                        <a  class=\"btn btn-success edit_btn\" (click)=\"updatecertifications(certificate,i)\" href=\"#\" id=\"certificateListUpdate\" data-toggle=\"modal\" data-target=\"#modal-certifications\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n                      </div>\n                      <div class=\"col-sm-1\">\n                         <a class=\"btn btn-danger edit_btn\" (click)=\"removecertifications(i,certificate._id)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>\n                      </div>        \n                  </div>\n                 </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n<!-- Experience popup -->\n    <div class=\"modal fade\" id=\"modal-experience\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n\n            <p class=\"text-center fz-20\"><strong>Add New Experience</strong></p>\n            <p class=\"loginerror\">{{loginerror}}</p>\n\n            <form #experienceForm = \"ngForm\" (ngSubmit)=\"onExperience(experienceForm.value)\" ngNativeValidate  id=\"expForm\">\n              <div class=\"form-group form-group-min\">\n                <p class=\"mb-1\"><strong>Where have you worked?</strong></p>\n                <input type=\"text\" name=\"company\" class=\"form-control form-control-min\" placeholder=\"Company name\" [ngModel]=\"experienceData.company\" ngModel required>\n              </div>\n\n              <div class=\"form-group form-group-min\" *ngIf=\"disableFields\">\n                <p class=\"mb-1\"><strong>What was your position?</strong></p>\n                <input type=\"text\" name=\"position\" class=\"form-control form-control-min\" placeholder=\"Position name\" [ngModel]=\"experienceData.position\" required>\n              </div>\n              <div class=\"form-group form-group-min\" >\n                <p class=\"mb-1\"><strong>Zipcode</strong></p>\n                <input type=\"text\" name=\"zipcode\" pattern=\"[0-9]*\" class=\"form-control form-control-min\" placeholder=\"01234\" [ngModel]=\"experienceData.zipcode\" required>\n              </div>\n              <div class=\"form-group form-group-min\">\n                <p class=\"mb-1\"><strong>Responsibility 1</strong></p>\n                <textarea type=\"text\" name=\"responsibility1\" class=\"form-control form-control-min\" placeholder=\"Write your responsibility 1 here...\" [ngModel]=\"experienceData.responsibility1\" required></textarea>\n              </div>\n              <div class=\"form-group form-group-min\">\n                <p class=\"mb-1\"><strong>Responsibility 1</strong></p>\n                <textarea type=\"text\" name=\"responsibility2\" class=\"form-control form-control-min\" placeholder=\"Write your responsibility 2 here...\" [ngModel]=\"experienceData.responsibility2\" required></textarea>\n              </div>\n              <p class=\"mb-1\"><strong>When did you work there?</strong></p>\n\n              <div class=\"row\">\n                <div class=\"col-sm-auto has-control\">\n                  <div class=\"form-group form-group-min\">\n                     <my-date-picker name=\"from_year\" [options]=\"myDatePickerOptionsfromyear\"\n                   [(ngModel)]=\"from_year\" (dateChanged)=\"limitDate($event)\" required></my-date-picker>\n                  </div>\n                  </div>\n                <div class=\"col-sm-auto has-control\" *ngIf=\"!experienceData.present\">\n                  <div class=\"form-group form-group-min\">\n                     <my-date-picker name=\"to_year\" [options]=\"myDatePickerOptionstoyear\"\n                    [(ngModel)]=\"to_year\" required></my-date-picker>\n                  </div>\n                  </div>\n              </div>\n              <div class=\"form-group form-group-min\">\n                <label class=\"checkbox-group radio-group-row\">\n                  <input type=\"checkbox\" name=\"present\" [(ngModel)]=\"experienceData.present\">\n                  <span class=\"switch\"></span>\n                  <span class=\"checkbox-title\"><strong>Present</strong></span>\n                </label>\n              </div>\n              <div class=\"row justify-content-end\">\n                <div class=\"col-sm-auto\">\n                  <button type=\"button\" class=\"btn btn-min btn-block btn-dark mb-3\" data-dismiss=\"modal\">Cancel</button>\n                </div>\n                <div class=\"col-sm-auto\">\n                  <button type=\"submit\" class=\"btn btn-min btn-block btn-warning mb-3\" id=\"save\">Save</button>\n                </div>\n              </div>\n            </form>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n<!--Education-->\n\n    <div class=\"modal fade\" id=\"modal-eduction\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <p class=\"text-center fz-20\"><strong>Add New Education</strong></p>\n            <p class=\"loginerror\">{{loginerror}}</p>\n\n            <form #eduction = \"ngForm\" (ngSubmit)=\"onEducation(eduction.value)\" ngNativeValidate id=\"eduForm\" >\n              <div class=\"form-group form-group-min\">\n                <p class=\"mb-1\"><strong>Select an Education Level</strong></p>\n                <select class=\"form-control form-control-min\" name=\"education_level\" [ngModel]=\"educationData.education_level\" required>\n                  <option value=\"\" >Select</option>\n                 <option value=\"High School/GED\" >High School/GED</option>\n                  <option value=\"Bachelor's Degree\">Bachelor's Degree</option>\n                  <option value=\"Master's Degree\">Master's Degree</option>\n                  <option value=\"Advanced Graduate\">Advanced Graduate</option>\n                </select>\n              </div>\n              <div class=\"form-group form-group-min\">\n                <p class=\"mb-1\"><strong>Where did you go to school?</strong></p>\n                <input type=\"text\" class=\"form-control form-control-min\" name=\"school\" [ngModel]=\"educationData.school\" required>\n              </div>\n              <div class=\"form-group form-group-min\" *ngIf=\"disableFields\">\n                <p class=\"mb-1\"><strong>What did you study?</strong></p>\n                <input type=\"text\" class=\"form-control form-control-min\" name=\"specialization\" [ngModel]=\"educationData.specialization\" required>\n              </div>\n              <p class=\"mb-1\"><strong>From</strong></p>\n\n              <div class=\"row\">\n                <div class=\"col-sm-auto has-control\">\n                  <div class=\"form-group form-group-min\">\n                  <my-date-picker name=\"begin_year\"  [options]=\"myDatePickerOptionsfromyear\"\n                    [(ngModel)]=\"from_year\" (dateChanged)=\"limitDate($event)\" required></my-date-picker>\n                  </div>\n                </div>\n                <div class=\"col-sm-auto py-sm-2 pb-2 pt-sm-0\"><strong>To</strong></div>\n                <div class=\"col-sm-auto has-control\" *ngIf = \"!educationData.present\">\n                  <div class=\"form-group form-group-min\">\n                    <my-date-picker name=\"end_year\" [options]=\"myDatePickerOptionstoyear\"\n                    [(ngModel)]=\"to_year\" required></my-date-picker>\n\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group form-group-min\">\n                <label class=\"checkbox-group radio-group-row\">\n                  <input type=\"checkbox\" name=\"present\" [(ngModel)]=\"educationData.present\">\n\n                  <span class=\"switch\"></span>\n                  <span class=\"checkbox-title\"><strong>Present</strong></span>\n                </label>\n              </div>\n              <div class=\"row justify-content-end\">\n                <div class=\"col-sm-auto\">\n                  <button type=\"button\" class=\"btn btn-min btn-block btn-dark mb-3\" data-dismiss=\"modal\">Cancel</button>\n                </div>\n                <div class=\"col-sm-auto\">\n                  <button type=\"submit\"  class=\"btn btn-min btn-block btn-warning mb-3\" onClick=\"modal_hide\">Save</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n<!-- certifications -->\n\n    <div class=\"modal fade\" id=\"modal-certifications\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <p class=\"text-center fz-20\"><strong>Add New Certifications</strong></p>\n            <p class=\"loginerror\">{{loginerror}}</p>\n\n            <form #certifications = \"ngForm\" (ngSubmit)=\"oncertifications(certifications.value)\" ngNativeValidate id=\"crtForm\">\n\n              <div class=\"form-group form-group-min\" *ngIf=\"disableFields\">\n                <p class=\"mb-1\"><strong>Certificate Type</strong></p>\n                  <select class=\"form-control form-control-min\" name=\"certifications_type\" [ngModel]=\"certificateListData.certifications_type\" required>\n                    <option value=\"\" >Select</option>\n                  <option value=\"High School/GED\">High School/GED</option>\n                  <option value=\"Bachelor's Degree\">Bachelor's Degree</option>\n                  <option value=\"Master's Degree\">Master's Degree</option>\n                  <option value=\"Advanced Graduate\">Advanced Graduate</option>\n                </select>\n              </div>\n              <div class=\"form-group form-group-min\" *ngIf=\"disableFields\">\n                <p class=\"mb-1\"><strong>Certificate Number</strong></p>\n                <input type=\"text\" class=\"form-control form-control-min\" name=\"certifications_num\"  [ngModel]=\"certificateListData.certifications_num\" required>\n              </div>\n\n              <div class=\"row justify-content-end\">\n                <div class=\"col-sm-auto\">\n                  <button type=\"button\" class=\"btn btn-min btn-block btn-dark mb-3\" data-dismiss=\"modal\">Cancel</button>\n                </div>\n                <div class=\"col-sm-auto\">\n                  <button type=\"submit\"  class=\"btn btn-min btn-block btn-warning mb-3\">Save</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n<!--Settings popup -->\n\n    <div class=\"modal fade\" id=\"modal-settings\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n\n         \n            <div class=\"text-center fz-20 red\"><strong>Please fill information in below fields, without it you can't access another area of profile.</strong></div>\n            <p class=\"text-center fz-16 gray semibold\">We use information to give you a better experience on Starperformers.</p>\n            \n            <p class=\"loginerror\">{{zipcodeerror}}</p>\n            <form #setting = \"ngForm\" (ngSubmit)=\"onSetting(setting.value)\" ngNativeValidate>\n              <div class=\"form-group form-group-min\">\n                <p class=\"mb-1\"><strong>What brings you to star performers?</strong></p>\n                <select class=\"form-control form-control-min\" name=\"starperformer\" #starperformer \n                ngModel required>\n                <option value=\"\" >Select</option>\n                  <option value=\"Performers\">Performers 1</option>\n                  <option value=\"Performers\">Performers 2</option>\n                  <option value=\"Performers\">Performers 3</option>\n                </select>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm\">\n                  <div class=\"form-group form-group-min\">\n                    <p class=\"mb-1\"><strong>Zipcode</strong></p>\n                    <input type=\"text\" class=\"form-control form-control-min\" name=\"zipcode\" placeholder=\"01234\" #zipcode ngModel required>\n                  </div>\n                </div>\n                <div class=\"col-sm\">\n                  <div class=\"form-group form-group-min\">\n                    <p class=\"mb-1\"><strong>Phone number</strong></p>\n                    <input type=\"text\" pattern=\"[0-9]*\" minlength=\"10\" maxlength=\"10\" required class=\"form-control form-control-min\" placeholder=\"9876543210\" name=\"phone_no\" #phoneNo ngModel required>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-auto has-control\">\n                  <div class=\"form-group form-group-min\">\n                    <p class=\"mb-1\"><strong>Highest Education Level</strong></p>\n                    <select class=\"form-control form-control-min\" name=\"education\"  ngModel required>\n                      <option value=\"\" >Select</option>\n                      <option value=\"1\">Masters</option>\n                      <option value=\"2\">Lorem</option>\n                      <option value=\"3\">Ipsum</option>\n                    </select>\n                  </div>\n                </div> \n              </div>\n\n              <div class=\"form-group form-group-min\">\n                <p class=\"mb-1\"><strong>Approximate number of jobs held in last 5 years</strong></p>\n                <input type=\"number\" pattern=\"[1-9]*\" min=\"1\" max=\"99\" required class=\"form-control form-control-min\" placeholder=\"7\" name=\"job_count\" #ApproximateNo ngModel>\n              </div>\n              <div class=\"row justify-content-centert text-center\">\n                <div class=\"col-sm-auto btn-center\">\n                  <button type=\"submit\" class=\"btn btn-min btn-block btn-warning mb-3\">Save</button>\n                </div>\n              </div>\n            </form>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/sp-profile/sp-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/component/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/component/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert__ = __webpack_require__("../../../../sweetalert/dist/sweetalert.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpProfileComponent = (function () {
    function SpProfileComponent(loginService, router, sharedService, cookie) {
        this.loginService = loginService;
        this.router = router;
        this.sharedService = sharedService;
        this.cookie = cookie;
        this.experienceList = [];
        this.educationList = [];
        this.certificateList = [];
        this.filesToUpload = [];
        this.profilestrength = 0;
        this.Showborder = false;
        this.eduShowborder = false;
        this.CertShowborder = false;
        this.summaryShowborder = false;
        this.disableFields = true;
        this.summaryInfo = true;
        this.actionType = false;
        this.profile_progress = 10;
        this.settings_data = {};
        this.summaryData = {};
        this.experienceedit = {};
        this.EduUpdate = {};
        this.educationData = {};
        this.certificateListData = {};
        this.experienceData = {};
        this.experience_count = 0;
        //Date Picker
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd.mm.yyyy',
        };
        // Initialized to specific date (09.10.2018).
        this.model = { year: 2018, month: 10 };
        var date = new Date();
        this.myDatePickerOptionsfromyear = {
            disableDateRanges: [{ begin: { year: date.getFullYear(), month: date.getMonth() + 1, day: 31 }, end: { year: date.getFullYear() + 50, month: date.getMonth(), day: date.getDay() } }],
            dateFormat: 'dd.mm.yyyy',
        };
    }
    SpProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current_user = JSON.parse(this.cookie.get('user'));
        this.sharedService.getProfile().subscribe(function (data) {
            _this.profileresponse = data.data.user_info.profileUrl;
            if (_this.profileresponse == undefined) {
                _this.image_status = false;
            }
            if (_this.profileresponse) {
                _this.image_status = true;
            }
            _this.certificateList = data.data.certification_details;
            _this.experienceList = data.data.experience;
            if (data.data.summary) {
                _this.summary_Info = data.data.summary.content;
                _this.summaryShowborder = true;
            }
            _this.educationList = data.data.education;
            if (_this.profileresponse) {
                _this.profile_image = _this.profileresponse;
            }
            if (data.data.settings) {
                _this.settingInfo = data.data.settings;
                _this.settingJob_count = _this.settingInfo.job_count;
            }
            else {
                $("#settingmodal").click(); //Show popup when user first time login 
            }
            if (_this.experienceList) {
                if (_this.experienceList.length > 0) {
                    _this.Showborder = true;
                    var experience_count = _this.experienceList.length;
                    _this.experience_count = _this.experienceList.length;
                }
            }
            if (_this.educationList.length > 0) {
                _this.eduShowborder = true;
            }
            if (_this.certificateList.length > 0) {
                _this.CertShowborder = true;
                _this.certificateList = data.data.certification_details;
            }
            _this.calculate_score();
        });
        $('#modal-eduction,#modal-experience,#modal-certifications').on('hidden.bs.modal', function () {
            console.log("popup close");
            this.disableFields = true;
            this.actionType = false;
        });
    };
    // setting limit for end date
    SpProfileComponent.prototype.limitDate = function (event) {
        this.myDatePickerOptionstoyear = {
            // other options...
            disableDateRanges: [{ begin: { year: 1000, month: 1, day: 1 }, end: { year: event.date.year, month: event.date.month, day: event.date.day } }],
            minYear: event.date.year,
            dateFormat: 'dd.mm.yyyy',
        };
    };
    //--Choose File Function--
    SpProfileComponent.prototype.chooseFileEnable = function () {
        this.fileInput.nativeElement.click();
    };
    SpProfileComponent.prototype.uploadFile = function (event) {
        var _this = this;
        this.filesToUpload = event.target.files;
        var formData = new FormData();
        var files = this.filesToUpload;
        if (files[0]['name']) {
            formData.append("uploads[]", files[0], files[0]['name']);
        }
        this.sharedService.imageupload(formData).subscribe(function (data) {
            if (data.status) {
                _this.image_status = true;
                _this.profile_image = data.image_url;
                __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                    text: "Image uploaded successfully!",
                    icon: "success",
                    timer: 1000
                });
            }
        });
    };
    //--Summary Data Submit--
    SpProfileComponent.prototype.onSummary = function (summ) {
        var _this = this;
        var self = this;
        self.sharedService.summary(summ).subscribe(function (data) {
            _this.summaryShowborder = true;
            __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                text: "Summary has been successfully updated!",
                icon: "success",
                timer: 1000
            });
            _this.summaryInfo = true;
        });
    };
    // --Experience form data submit--
    SpProfileComponent.prototype.onExperience = function (exp) {
        this.loginerror = "";
        if ((this.from_year && this.to_year) || (this.from_year && exp['present'])) {
            exp['from_year'] = this.from_year;
            exp['to_year'] = this.to_year;
            console.log(exp, "exp");
            var self = this;
            $.ajax({
                url: "http://ziptasticapi.com/" + exp.zipcode,
                dataType: "json",
                type: "GET",
                success: function (result, success) {
                    if (result.error) {
                        self.loginerror = result.error;
                    }
                    else {
                        if (self.actionType) {
                            exp.state = result.state;
                            exp.city = result.city;
                            self.sharedService.updateExperience(self.updateId, exp).subscribe(function (data) {
                                $('#modal-experience').modal('hide');
                                self.actionType = false;
                                self.experienceList[self.currentIndex] = data.updated_data;
                                __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                                    text: "Experience has been successfully updated!",
                                    icon: "success",
                                    timer: 1000
                                });
                                self.calculate_score();
                                $('#expForm')[0].reset();
                            });
                        }
                        else {
                            if (self.experience_count < self.settingJob_count) {
                                console.log(self.experience_count, self.settingJob_count);
                                self.experience_count = self.experience_count + 1;
                                exp.state = result.state;
                                exp.city = result.city;
                                self.sharedService.experience(exp).subscribe(function (data) {
                                    self.experienceList.push(data.data);
                                    $('#modal-experience').modal('hide');
                                    self.disableFields = true;
                                    __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                                        text: "Experience has been successfully added!",
                                        icon: "success",
                                        timer: 1000
                                    });
                                    $('#expForm')[0].reset();
                                    self.calculate_score();
                                });
                            }
                            else {
                                console.log(self.experience_count, self.settingJob_count, 'inside else');
                                __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                                    text: "You have already added EXPERIENCE till your specified number of job counts \n To add more experience details Please increase your job count",
                                    icon: "warning"
                                });
                            }
                        }
                    }
                },
                error: function (result, success) {
                }
            });
        }
        else {
            this.loginerror = "Please select dates";
        }
    };
    //--Update Experience data--
    SpProfileComponent.prototype.updateExperience = function (experience, i) {
        this.currentIndex = i;
        this.actionType = true;
        this.disableFields = false;
        this.updateId = experience._id;
        this.experienceData = experience;
        this.from_year = { date: { year: experience.from_year, month: experience.from_month, day: 1 } };
        if (experience.to_year && experience.to_month) {
            this.to_year = { date: { year: experience.to_year, month: experience.to_month, day: 1 } };
        }
        else {
            this.to_year = { date: { year: 2017, month: 1, day: 1 } };
        }
        console.log(this.actionType, "before");
    };
    //--Delete Experience data--
    SpProfileComponent.prototype.removeExperience = function (i, id) {
        var self = this;
        this.sharedService.deleteExperience(id).subscribe(function (data) {
            self.experienceList.splice(i, 1);
            self.calculate_score();
            __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                text: "Experience has been successfully deleted!",
                icon: "success",
                timer: 1000
            });
        });
    };
    // --Education form data submit--
    SpProfileComponent.prototype.onEducation = function (edu) {
        var _this = this;
        this.loginerror = "";
        if ((this.from_year && this.to_year) || (this.from_year && edu['present'])) {
            edu['from_year'] = this.from_year;
            edu['to_year'] = this.to_year;
            // for updating
            if (this.actionType) {
                this.sharedService.updateEduction(this.updateId, edu).subscribe(function (data) {
                    $('#modal-eduction').modal('hide');
                    _this.actionType = false;
                    _this.educationList[_this.currentIndex] = data.updated_data;
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                        text: "Education has been successfully updated!",
                        icon: "success",
                        timer: 1000
                    });
                    _this.calculate_score();
                    $('#eduForm')[0].reset();
                });
            }
            else {
                var self = this;
                self.sharedService.eduction(edu).subscribe(function (data) {
                    self.educationList.push(data.data);
                    $('#modal-eduction').modal('hide');
                    if (data.status) {
                        _this.eduShowborder = true;
                        _this.disableFields = true;
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
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
        else {
            this.loginerror = "Please select dates";
        }
        switch (edu.education_level) {
            case ('High School/GED'):
                this.education_field = 1;
                break;
            case ("Bachelor's Degree"):
                this.education_field = 2;
                break;
            case ("Master's Degree"):
                this.education_field = 3;
                break;
            case ('Advanced Graduate'):
                this.education_field = 4;
            default:
                this.education_field = 0;
        }
    };
    //--Education Update
    SpProfileComponent.prototype.updateEducation = function (updateedu, i) {
        this.currentIndex = i;
        this.actionType = true;
        this.updateId = updateedu._id;
        this.disableFields = false;
        this.educationData = updateedu;
        this.from_year = { date: { year: updateedu.begin_year, month: updateedu.begin_month, day: 1 } };
        if (updateedu.begin_year && updateedu.begin_month) {
            this.to_year = { date: { year: updateedu.end_year, month: updateedu.end_month, day: 1 } };
        }
        else {
            this.to_year = { date: { year: 2017, month: 1, day: 1 } };
        }
    };
    //--Education Delete
    SpProfileComponent.prototype.removeEducation = function (i, id) {
        var self = this;
        this.sharedService.removeEduction(id).subscribe(function (data) {
            self.educationList.splice(i, 1);
            self.calculate_score();
            __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                text: "Education has been successfully deleted!",
                icon: "success",
                timer: 1000
            });
        });
    };
    // --Certifications form data submit--
    SpProfileComponent.prototype.oncertifications = function (cer) {
        var _this = this;
        this.loginerror = "";
        if (this.actionType) {
            this.sharedService.updatecertifications(this.updateId, cer).subscribe(function (data) {
                $('#modal-certifications').modal('hide');
                _this.actionType = false;
                _this.certificateList[_this.currentIndex] = data.updated_data;
                __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                    text: "certificateList has been successfully updated!",
                    icon: "success",
                    timer: 1000
                });
                _this.calculate_score();
                $('#crtForm')[0].reset();
            });
        }
        else {
            var self = this;
            this.sharedService.Certifications(cer).subscribe(function (data) {
                self.certificateList.push(data.data);
                $('#modal-certifications').modal('hide');
                if (data.status) {
                    _this.CertShowborder = true;
                    _this.disableFields = true;
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                        text: "Ceritificate has been successfully added!",
                        icon: "success",
                        timer: 1000
                    });
                    self.calculate_score();
                    $('#crtForm')[0].reset();
                }
            });
        }
    };
    // --Certifications Update--
    SpProfileComponent.prototype.updatecertifications = function (updatecertificateList, i) {
        this.currentIndex = i;
        this.actionType = true;
        this.disableFields = false;
        this.updateId = updatecertificateList._id;
        this.certificateListData = updatecertificateList;
    };
    //--Certifications delete
    SpProfileComponent.prototype.removecertifications = function (i, id) {
        var _this = this;
        var self = this;
        this.sharedService.removecertifications(id).subscribe(function (data) {
            self.certificateList.splice(i, 1);
            __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                text: "certificateList has been successfully deleted!",
                icon: "success",
                timer: 1000
            });
            _this.calculate_score();
        });
    };
    // --Setting popup show when user first time login data submit--
    SpProfileComponent.prototype.onSetting = function (set) {
        var self = this;
        $.ajax({
            url: "http://ziptasticapi.com/" + set.zipcode,
            dataType: "json",
            type: "GET",
            success: function (result, success) {
                if (result.error) {
                    self.zipcodeerror = result.error;
                }
                else {
                    set.state = result.state;
                    set.city = result.city;
                    self.zipcodeerror = result.error;
                    self.sharedService.onsetting(set).subscribe(function (data) {
                        self.settings_data = data.setting;
                        self.settingInfo = data.setting;
                        $('#modal-settings').modal('hide');
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                            text: "Settings has been successfully updated!",
                            icon: "success",
                            timer: 1000
                        });
                        self.calculate_score();
                    });
                    this.settingJob_count = set.job_count;
                    console.log(this.settingJob_count, "");
                }
            },
            error: function (result, success) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
                    text: "Please check with zip code!",
                    icon: "error",
                    timer: 1000
                });
            }
        });
    };
    // --User Logout--
    SpProfileComponent.prototype.logoutUser = function () {
        this.cookie.delete('user');
        this.router.navigate(['/']);
    };
    SpProfileComponent.prototype.calculate_score = function () {
        this.profile_progress = 10;
        if (this.profileresponse) {
            this.profile_progress += 10;
        }
        if (this.settingInfo) {
            this.profile_progress += 20;
        }
        if (this.experienceList.length > 0) {
            var experience_count = this.experienceList.length;
            if (this.settingInfo) {
                var job_count = this.settingInfo.job_count;
            }
            var percent_filled = (experience_count / job_count) * 30;
            this.profile_progress += percent_filled;
        }
        if (this.educationList.length > 0) {
            this.profile_progress += 30;
        }
    };
    // --Nav highlight Area--
    SpProfileComponent.prototype.highlightArea = function (value, area) {
        this.highlightSection = value;
        $('html, body').animate({
            scrollTop: $("#" + area).offset().top - 30
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SpProfileComponent.prototype, "fileInput", void 0);
    SpProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sp-profile',
            template: __webpack_require__("../../../../../src/app/component/sp-profile/sp-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/sp-profile/sp-profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], SpProfileComponent);
    return SpProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map