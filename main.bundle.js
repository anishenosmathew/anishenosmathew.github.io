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

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <cuppa-slidemenu\n  [menulist]=\"menuItemsArray\"\n  (open)=\"onMenuOpen()\"\n  (close)=\"onMenuClose()\"\n  (onItemSelect)=\"onItemSelect($event)\"x></cuppa-slidemenu> -->\n\n<!-- Navigation -->\n\n<!-- <nav class=\"navbar navbar-light bg-light static-top\">\n  <div class=\"container\">\n    <a routerLink=\"/home\">\n      <img src=\"../assets/img/mtlogo.png\" width=\"45px\" height=\"47px\" />\n    </a>\n    <a routerLink=\"/home\" class=\"navbar-brand m-auto\">Kristeeya Keerthanangal</a>\n    <div class=\"language pull-right\">\n      <a class=\"btn btn-primary\" href=\"javascript:void()\">Malayalam</a>\n      <a class=\"btn btn-primary\" href=\"javascript:void()\">English</a>\n    </div>\n  </div>\n</nav> -->\n<!-- Navigation -->\n<nav class=\"navbar navbar-light bg-light static-top\">\n        <div class=\"container hamburgerMenu\">\n          <!-- <a routerLink=\"/home\">\n            <img src=\"../assets/img/mtlogo.png\" width=\"45px\" height=\"47px\" />\n          </a> -->\n          <a routerLink=\"/home\" class=\"navbar-brand m-auto\">Kristeeya Keerthanangal</a>\n          <!-- <div class=\"language pull-right\">\n            <a class=\"btn btn-primary\" href=\"javascript:void()\">Malayalam</a>\n            <a class=\"btn btn-primary\" href=\"javascript:void()\">English</a>\n          </div> -->\n        </div>\n      </nav>\n      \n      \n      \n      <!-- Footer -->\n      <footer #footer class=\"footer bg-light\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 h-100 text-center text-lg-left my-auto pages\">\n              <ul class=\"list-inline mb-2\">\n                <li class=\"list-inline-item\">\n                  <a href=\"javascript:void()\" routerLink=\"/home\">Home</a>\n                </li>\n                <!-- <li class=\"list-inline-item colorWhite\">&sdot;</li> -->\n                <!-- <li class=\"list-inline-item\">\n                  <a href=\"javascript:void()\" routerLink=\"/about\">About</a>\n                </li> -->\n                <li class=\"list-inline-item colorWhite\">&sdot;</li>\n                <li class=\"list-inline-item\">\n                  <a href=\"javascript:void()\" routerLink=\"/contact\">Contact</a>\n                </li>\n              </ul>\n              <p class=\"text-muted small mb-2 mb-lg-0\">\n                &copy; Mar Thoma Syrian Church of Malabar. All Rights Reserved.\n              </p>\n            </div>\n            <div class=\"col-lg-6 h-100 text-center text-lg-right my-auto social\">\n                <ul class=\"list-inline mb-0\">\n                    <li class=\"list-inline-item mr-3\">\n                    <a href=\"https://www.facebook.com/sharer/sharer.php?u=http://kristeeyakeerthanangal.com\" target=\"_blank\">\n                        <i class=\"fa fa-facebook fa-2x fa-fw\"></i>\n                    </a>\n                    </li>\n                    <li class=\"list-inline-item mr-3\">\n                    <a href=\"https://twitter.com/intent/tweet?url=http://kristeeyakeerthanangal.com&text=Kristeeya Keerthanangal\" target=\"_blank\"> \n                        <i class=\"fa fa-twitter fa-2x fa-fw\"></i> </a>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <a href=\"https://wa.me/?text=http://kristeeyakeerthanangal.com\" target=\"_blank\">\n                            <i class=\"fa fa-whatsapp fa-2x fa-fw\"></i>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n      </footer>\n      "

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.arr = ["anish", "enos", "mathew"];
        this.src = "https://angular.io/assets/images/logos/angular/shield-large.svg";
        this.value = true;
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Start Bootstrap - Landing Page v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/landing-page)\r\n * Copyright 2013-2017 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-landing-page/blob/master/LICENSE)\r\n */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <!-- Body -->\n  <router-outlet></router-outlet>\n\n\n "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(renderer) {
        this.renderer = renderer;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__song_song_component__ = __webpack_require__("../../../../../src/app/song/song.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__song_filterPipe__ = __webpack_require__("../../../../../src/app/song/filterPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__song_highlightPipe__ = __webpack_require__("../../../../../src/app/song/highlightPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_auto_complete__ = __webpack_require__("../../../../ng2-auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__ = __webpack_require__("../../../../cuppa-ng2-slidemenu/cuppa-ng2-slidemenu.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__song_song_component__["a" /* SongComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__song_filterPipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_11__song_highlightPipe__["a" /* HighlightPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_13_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_14_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__["a" /* SlideMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
                    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppService = (function () {
    function AppService(_http) {
        this._http = _http;
    }
    AppService.prototype.getSong = function () {
        this.songFile = this.songNumber + ".png";
        this.songUrl = "./assets/songs/" + this.songFile;
        return this._http.get(this.songUrl);
        // .do(data => console.log('All: ' + JSON.stringify(data)) );
    };
    AppService.prototype.getSongs = function () {
        return this._http.get("./assets/api/songs.json");
        // .do(data => console.log('All: ' + JSON.stringify(data)) );
    };
    AppService.prototype.contactusSubmit = function (url) {
        return this._http.get(url);
    };
    AppService.prototype.setSongNumber = function (sn) {
        this.songNumber = sn;
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <cuppa-slidemenu\n  [menulist]=\"menuItemsArray\"\n  (open)=\"onMenuOpen()\"\n  (close)=\"onMenuClose()\"\n  (onItemSelect)=\"onItemSelect($event)\"x></cuppa-slidemenu> -->\n\n<!-- Navigation -->\n\n<!-- <nav class=\"navbar navbar-light bg-light static-top\">\n  <div class=\"container\">\n    <a routerLink=\"/home\">\n      <img src=\"../assets/img/mtlogo.png\" width=\"45px\" height=\"47px\" />\n    </a>\n    <a routerLink=\"/home\" class=\"navbar-brand m-auto\">Kristeeya Keerthanangal</a>\n    <div class=\"language pull-right\">\n      <a class=\"btn btn-primary\" href=\"javascript:void()\">Malayalam</a>\n      <a class=\"btn btn-primary\" href=\"javascript:void()\">English</a>\n    </div>\n  </div>\n</nav> -->\n<!-- Navigation -->\n<nav class=\"navbar navbar-light bg-light static-top\">\n    <div class=\"container hamburgerMenu\">\n      <!-- <a routerLink=\"/home\">\n        <img src=\"../assets/img/mtlogo.png\" width=\"45px\" height=\"47px\" />\n      </a> -->\n      <a routerLink=\"/home\" class=\"navbar-brand m-auto\">Kristeeya Keerthanangal</a>\n      <!-- <div class=\"language pull-right\">\n        <a class=\"btn btn-primary\" href=\"javascript:void()\">Malayalam</a>\n        <a class=\"btn btn-primary\" href=\"javascript:void()\">English</a>\n      </div> -->\n    </div>\n  </nav>\n  \n  <!-- <iframe style=\"display:block;padding-top:40px;\" src=\"https://docs.google.com/forms/d/e/1FAIpQLSe8huDih07_owHAGLCwQ7Ql78PkaS2hT5wjnT1wg2MhVzae2w/viewform?embedded=true\" width=\"100%\" height=\"500px\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\n   -->\n\n  <!-- <form name=\"googleForm\" method=\"GET\" action=\"https://docs.google.com/forms/d/e/1FAIpQLSe8huDih07_owHAGLCwQ7Ql78PkaS2hT5wjnT1wg2MhVzae2w/formResponse?embedded=true\">\n    \n      <label>Name</label>\n      <input name=\"entry.2005620554\" type=\"text\" />\n\n      <label>Email</label>\n      <input name=\"entry.1045781291\" type=\"email\"  />\n\n      <label>Email</label>\n      <input name=\"entry.839337160\" type=\"text\"  />\n      \n\n      <input type=\"submit\" value=\"Send\" />\n\n</form> -->\n\n<!-- <form *ngIf=\"!submitted\" #newUserForm=\"ngForm\" (ngSubmit)=\"onSubmit(newUserForm)\" style=\"position:relative;top:200px;\">\n\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\"\n           required maxlength=\"25\"\n           [(ngModel)]=\"userName\" name=\"userName\"\n           #pickedName=\"ngModel\">\n    <div *ngIf=\"!pickedName.valid && pickedName.touched\">\n      Name is required!\n    </div>\n  \n    <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\"\n           required [(ngModel)]=\"email\"\n           name=\"email\" #userEmail=\"ngModel\">\n    <div *ngIf=\"!userEmail.valid && userEmail.touched\">\n      Email is required!\n    </div>\n\n  \n    <input type=\"comment\" placeholder=\"Enter comment\" required\n           [(ngModel)]=\"comment\" name=\"comment\"\n           #userComment=\"ngModel\">\n    <div *ngIf=\"!userComment.valid && userComment.touched\">\n      Comment is required!\n    </div>\n  \n  \n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newUserForm.form.valid\">\n      Submit\n    </button>\n\n  \n  </form> -->\n\n  <div class=\"container contact-us\">\n      <h3>Contact us</h3>\n      <form *ngIf=\"!submitted\" #newUserForm=\"ngForm\" (ngSubmit)=\"onSubmit(newUserForm)\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <label class=\"error\">*</label>\n          <label class=\"error\" *ngIf=\"!pickedName.valid && pickedName.touched\">\n              Name is required!\n          </label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" required maxlength=\"25\" [(ngModel)]=\"userName\" name=\"userName\" #pickedName=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pwd\">Email</label>\n          <label class=\"error\">*</label>\n          <label class=\"error\" *ngIf=\"!userEmail.valid && userEmail.touched\">\n              Email is required!\n          </label>\n          <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" required [(ngModel)]=\"email\" name=\"email\" #userEmail=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pwd\">Comment</label>\n          <label class=\"error\">*</label>\n          <label class=\"error\" *ngIf=\"!userComment.valid && userComment.touched\">\n              Comment is required!\n          </label>\n          <textarea rows=\"5\" class=\"form-control\" placeholder=\"Enter comment\" required [(ngModel)]=\"comment\" name=\"comment\" #userComment=\"ngModel\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newUserForm.form.valid\">\n            Submit\n          </button>\n      </form>\n      <div *ngIf=\"thanks\">Thank you for your feedback.</div>\n  </div>\n  \n  \n\n\n<style>\n  .freebirdFormviewerViewCenteredContent {\n    width: 100% !important;\n  }\n</style>\n\n  <!-- Footer -->\n  <footer #footer class=\"footer bg-light\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 h-100 text-center text-lg-left my-auto pages\">\n          <ul class=\"list-inline mb-2\">\n            <li class=\"list-inline-item\">\n              <a href=\"javascript:void()\" routerLink=\"/home\">Home</a>\n            </li>\n            <!-- <li class=\"list-inline-item colorWhite\">&sdot;</li> -->\n            <!-- <li class=\"list-inline-item\">\n              <a href=\"javascript:void()\" routerLink=\"/about\">About</a>\n            </li> -->\n            <li class=\"list-inline-item colorWhite\">&sdot;</li>\n            <li class=\"list-inline-item\">\n              <a href=\"javascript:void()\" routerLink=\"/contact\">Contact</a>\n            </li>\n          </ul>\n          <!-- <p class=\"text-muted small mb-2 mb-lg-0\">\n            &copy; Mar Thoma Syrian Church of Malabar. All Rights Reserved.\n          </p> -->\n        </div>\n        <div class=\"col-lg-6 h-100 text-center text-lg-right my-auto social\">\n            <ul class=\"list-inline mb-0\">\n              <li class=\"list-inline-item mr-3\">\n                <a href=\"https://www.facebook.com/sharer/sharer.php?u=http://kristeeyakeerthanangal.com\" target=\"_blank\">\n                  <i class=\"fa fa-facebook fa-2x fa-fw\"></i>\n                </a>\n              </li>\n              <li class=\"list-inline-item mr-3\">\n                <a href=\"https://twitter.com/intent/tweet?url=http://kristeeyakeerthanangal.com&text=Kristeeya Keerthanangal\" target=\"_blank\"> \n                  <i class=\"fa fa-twitter fa-2x fa-fw\"></i> </a>\n              </li>\n              <li class=\"list-inline-item\">\n                  <a href=\"https://wa.me/?text=http://kristeeyakeerthanangal.com\" target=\"_blank\">\n                    <i class=\"fa fa-whatsapp fa-2x fa-fw\"></i>\n                  </a>\n                </li>\n            </ul>\n          </div>\n      </div>\n    </div>\n  </footer>\n  "

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(appService) {
        this.appService = appService;
        this.submitted = false;
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.onSubmit = function (form) {
        if (form.valid) {
            var googleDocsUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe8huDih07_owHAGLCwQ7Ql78PkaS2hT5wjnT1wg2MhVzae2w/formResponse?";
            var name_1 = form.value.userName;
            var email = form.value.email;
            var comment = form.value.comment;
            var URL_1 = googleDocsUrl + "entry.2005620554=" + name_1 + "&entry.1045781291=" + email + "&entry.839337160=" + comment;
            this.appService.contactusSubmit(URL_1).subscribe();
            this.submitted = true;
            this.thanks = true;
        }
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  \r\n  \r\n  /* header.masthead .overlay {\r\n    position: absolute;\r\n    background-color: #ffffff;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0.3; \r\n  } */\r\n  \r\n  /* header.masthead h1 {\r\n    font-size: 2rem; \r\n  } */\r\n  /* \r\n    @media (min-width: 768px) {\r\n        header.masthead h1 {\r\n          font-size: 3rem; } } */\r\n  /* \r\n  .showcase .showcase-text {\r\n    padding: 3rem; } */\r\n  \r\n  /* .showcase .showcase-img {\r\n    min-height: 30rem;\r\n    background-size: cover; } */\r\n  \r\n  /* @media (min-width: 768px) {\r\n    .showcase .showcase-text {\r\n      padding: 7rem; } } */\r\n  \r\n  /* .features-icons {\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem; }\r\n    .features-icons .features-icons-item {\r\n      max-width: 20rem; }\r\n      .features-icons .features-icons-item .features-icons-icon {\r\n        height: 7rem; }\r\n        .features-icons .features-icons-item .features-icons-icon i {\r\n          font-size: 4.5rem; }\r\n      .features-icons .features-icons-item:hover .features-icons-icon i {\r\n        font-size: 5rem; }\r\n  \r\n  .testimonials {\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem; }\r\n    .testimonials .testimonial-item {\r\n      max-width: 18rem; }\r\n      .testimonials .testimonial-item img {\r\n        max-width: 12rem;\r\n        box-shadow: 0px 5px 5px 0px #adb5bd; } */\r\n  \r\n  /* .call-to-action {\r\n    position: relative;\r\n    background-color: #343a40;\r\n    background: url(\"../assets/img/bg-masthead.jpg\") no-repeat center center;\r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem; }\r\n    .call-to-action .overlay {\r\n      position: absolute;\r\n      background-color: #ffffff;\r\n      height: 100%;\r\n      width: 100%;\r\n      top: 0;\r\n      left: 0;\r\n      opacity: 0.3; } */\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"page-wrapper\">\n\n    <!-- Header -->\n      <div id=\"header\">\n\n        <!-- Nav -->\n          <nav id=\"nav\">\n            <ul>\n              <li class=\"opener\" style=\"user-select: none; cursor: pointer; white-space: nowrap;\">\n                <a href=\"http://www.kristheeyakeerthanangal.org\">Kristheeya Keerthanangal</a>    \n              </li>\n            </ul>\n          </nav>\n\n      </div>\n\n    <!-- Banner -->\n      <section id=\"banner\">\n          <app-song #songComponent (clearText)=\"clearText($event)\" (showSongFlag)=\"showSongFlag($event)\" (songUrl)=\"songUrl($event)\"></app-song>\n      </section>\n\n    <!-- Highlights -->\n      <section class=\"wrapper style1\">\n          <section *ngIf=\"showSong\" class=\"container songContainer\">\n            <div class=\"song-box\">\n                <img class=\"song-image\" src=\"{{song}}\">\n              <!-- <div [innerHTML]=\"song._body\"></div> -->\n              <!-- <img [src]=\"song\" /> -->\n            </div>\n          </section>\n          <div class=\"container aboutSection\">\n            <div class=\"row gtr-200\">\n\n              <section class=\"col-4 col-12-narrower\">\n                <div class=\"box highlight songListContainer\">\n                  <i class=\"icon major fa-list\"></i>\n                  \n                  <h3>Song List</h3>\n                  <ul *ngIf=\"songs\">\n                    <li *ngFor=\"let item of songs.songArr | paginate: { itemsPerPage: 10, currentPage: page }\">\n                      <a (click)=\"selectedSong(item)\"> {{ item.title }}</a>\n                    </li>\n                  </ul>\n              \n                \n                </div>\n                <div class=\"pagination\">\n                  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n                </div>\n              </section>\n\n              <section class=\"col-4 col-12-narrower\">\n                <div class=\"box highlight\">\n                  <i class=\"icon major fa-signal\"></i>\n                  <h3>Most viewed song of the week</h3>\n                  <p>1 - Athi ravile thiru sannidhi - <b>230</b> views </p> \n                </div>\n              </section>\n\n              <section class=\"col-4 col-12-narrower\">\n                  <div class=\"box highlight\">\n                    <i class=\"icon major fa-music\"></i>\n                    <h3>About</h3>\n                    <p>This website provides a complete collection of songs from \n                      Malankara Mar Thoma Syrian church's Kristheeya Keerthanangal song book. \n                      Search for your favorite song or choose from the list above.\n                      <br>\n                      Note: Currently the website provides first 150 songs. More songs\n                      coming soon. Stay tuned !\n                      </p>\n                  </div>\n                </section>\n\n            </div>\n          </div>\n      </section>\n\n\n    <!-- Footer -->\n      <div id=\"footer\">\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <section class=\"col-12\">\n              <h3>Get In Touch</h3>\n              <form *ngIf=\"!submitted\" #newUserForm=\"ngForm\" (ngSubmit)=\"onSubmit(newUserForm)\">\n                <div class=\"row gtr-50\">\n                  <div class=\"col-6 col-12-mobilep\">\n                    <input type=\"text\" name=\"name\" id=\"userName\" [(ngModel)]=\"userName\"  placeholder=\"Name\">\n                  </div>\n                  <div class=\"col-6 col-12-mobilep\">\n                    <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\">\n                  </div>\n                  <div class=\"col-12\">\n                    <textarea [(ngModel)]=\"comment\" name=\"comment\"  id=\"message\" placeholder=\"Message\" rows=\"5\"></textarea>\n                  </div>\n                  <div class=\"col-12\">\n                    <ul class=\"actions\">\n                      <li><input type=\"submit\" class=\"button primary\" value=\"Send Message\"></li>\n                    </ul>\n                  </div>\n                </div>\n              </form>\n               <div *ngIf=\"thanks\">Thank you for your feedback.</div>\n            </section>\n          </div>\n        </div>\n\n\n        <!-- Icons -->\n          <ul class=\"icons\">\n            <li><a href=\"https://twitter.com/intent/tweet?url=http://www.kristheeyakeerthanangal.org&text=Kristheeya Keerthanangal\" target=\"_blank\" class=\"icon fa-twitter\"><span class=\"label\">Twitter</span></a></li>\n            <li><a href=\"https://www.facebook.com/sharer/sharer.php?u=http://www.kristheeyakeerthanangal.org\" target=\"_blank\" class=\"icon fa-facebook\"><span class=\"label\">Facebook</span></a></li>\n            <li><a href=\"https://wa.me/?text=http://www.kristheeyakeerthanangal.org\" class=\"icon fa fa-whatsapp fa-2x fa-fw\" target=\"_blank\"><span class=\"label\">Whatsapp</span></a></li>\n          </ul>\n\n        <!-- Copyright -->\n          <div class=\"copyright\">\n            <ul class=\"menu\">\n              <li>© Untitled. All rights reserved</li><li>Design: <a href=\"http://html5up.net\">HTML5 UP</a></li><li>Demo /assets/images: <a href=\"http://unsplash.com\">Unsplash</a></li>\n            </ul>\n          </div>\n\n      </div>\n\n  </div>\n\n<ul class=\"dropotron level-0\" style=\"user-select: none; display: none; position: absolute; z-index: 1000;\">\n  <li style=\"white-space: nowrap;\"><a href=\"#\" style=\"display: block;\">Lorem dolor</a></li>\n  <li style=\"white-space: nowrap;\"><a href=\"#\" style=\"display: block;\">Magna phasellus</a></li>\n  <li style=\"white-space: nowrap;\"><a href=\"#\" style=\"display: block;\">Etiam sed tempus</a></li>\n  <li class=\"opener\" style=\"user-select: none; cursor: pointer; white-space: nowrap;\">\n    <a href=\"#\" style=\"display: block;\">Submenu</a>\n    <ul class=\"dropotron level-1\" style=\"user-select: none; display: none; position: absolute; z-index: 1001;\">\n      <li style=\"white-space: nowrap;\"><a href=\"#\" style=\"display: block;\">Lorem dolor</a></li>\n      <li style=\"white-space: nowrap;\"><a href=\"#\" style=\"display: block;\">Phasellus magna</a></li>\n      <li style=\"white-space: nowrap;\"><a href=\"#\" style=\"display: block;\">Magna phasellus</a></li>\n      <li style=\"white-space: nowrap;\"><a href=\"#\" style=\"display: block;\">Etiam nisl</a></li>\n      <li style=\"white-space: nowrap;\"><a href=\"#\" style=\"display: block;\">Veroeros feugiat</a></li>\n    </ul>\n  </li>\n  <li style=\"white-space: nowrap;\"><a href=\"#\" style=\"display: block;\">Veroeros feugiat</a></li>\n</ul>\n<div id=\"titleBar\"><span class=\"title\">\n  <em>Kristheeya Keerthanangal</em>\n</span>\n</div>\n<div id=\"navPanel\">\n  <nav>\n    <a class=\"link depth-0\" href=\"#\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">\n      <span class=\"indent-0\"></span>Dropdown\n    </a>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
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
    function HomeComponent(renderer, appService) {
        this.renderer = renderer;
        this.appService = appService;
        this.submitted = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.footerHeight1 = this.footer.nativeElement.offsetHeight;
        var _this = this;
        this.appService.getSongs()
            .subscribe(function (songs) {
            //debugger;
            _this.songs = JSON.parse(songs._body);
            // console.log(this.songs);
        });
        /*
        window.addEventListener("orientationchange", function() {
        console.log(window.screen.orientation);
      } , true);
    
      window.screen.orientation.onchange = function (){
        // logs 'portrait' or 'landscape'
        console.log(screen.orientation.type.match(/\w+/)[0]);
    };
        */
        // this.search="enos";
    };
    HomeComponent.prototype.onMenuClose = function () {
        console.log("menu closed");
    };
    HomeComponent.prototype.onMenuOpen = function () {
        console.log("menu Opened");
    };
    HomeComponent.prototype.onItemSelect = function (item) {
        //this.onMenuClose();
        console.log(item);
    };
    HomeComponent.prototype.clearText = function (showFlag) {
        //debugger;
        this.showSong = showFlag;
    };
    HomeComponent.prototype.showSongFlag = function (showFlag) {
        //debugger;
        this.showSong = showFlag;
    };
    HomeComponent.prototype.songUrl = function (songUrl) {
        this.song = songUrl.url;
        //debugger;
    };
    HomeComponent.prototype.selectedSong = function (song) {
        this.songComponent.selectedSong(song);
        window.scrollTo(0, 20);
    };
    HomeComponent.prototype.onSubmit = function (form) {
        if (form.valid) {
            var googleDocsUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdTsvtsOjpJe0ZIRasF5fgfaTJRUXxf6PqDr9zjeb4UfTkGbQ/formResponse?";
            var name_1 = form.value.name;
            var email = form.value.email;
            var comment = form.value.comment;
            var URL_1 = googleDocsUrl + "entry.2005620554=" + name_1 + "&entry.1045781291=" + email + "&entry.839337160=" + comment;
            this.appService.contactusSubmit(URL_1).subscribe();
            this.submitted = true;
            this.thanks = true;
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        // this.renderer.invokeElementMethod(
        //   this.searchFocus.nativeElement,
        //   'focus'
        // );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("footer"),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("songComponent"),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "songComponent", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/song/filterPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term) {
        return items.filter(function (item) { return item.title.toLowerCase().includes(term.toLowerCase()); });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());

// @Pipe({
//     name: 'sortBy'
// })
// export class SortByPipe implements PipeTransform {
//     transform(items: any[], sortedBy: string): any {
//         console.log('sortedBy', sortedBy);
//         return items.sort((a, b) => {return b[sortedBy] - a[sortedBy]});
//     }
// } 


/***/ }),

/***/ "../../../../../src/app/song/highlightPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HighlightPipe = (function () {
    // transform(value: any, args: any): any {
    //     //debugger;
    //     if (!args) {return value;}
    //     var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
    //     return value.replace(re, "<b>" + args + "</b>");
    // }
    function HighlightPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    HighlightPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        // Match in a case insensitive maneer
        var re = new RegExp(args, 'gi');
        var match = value.match(re);
        // If there's no match, just return the original value.
        if (!match) {
            return value;
        }
        var replacedValue = value.replace(re, "<b>" + match[0] + "</b>");
        return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
    };
    HighlightPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'highlight'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HighlightPipe);
    return HighlightPipe;
}());

// @Pipe({
//     name: 'sortBy'
// })
// export class SortByPipe implements PipeTransform {
//     transform(items: any[], sortedBy: string): any {
//         console.log('sortedBy', sortedBy);
//         return items.sort((a, b) => {return b[sortedBy] - a[sortedBy]});
//     }
// } 


/***/ }),

/***/ "../../../../../src/app/song/song.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/song/song.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Masthead -->\n<header #masthead class=\"masthead text-white text-center\">\n\n\n          <div class=\"searchInputBox\">\n            <i class=\"searchButton fa fa-search\" aria-hidden=\"true\"></i>\n            <input #searchFocus type=\"text\"\n              name=\"term\"\n              [(ngModel)]=\"term\"\n              (keyup)=\"searchText()\"\n              class=\"searchInput form-control form-control-lg\"\n              placeholder=\"Search song...\"/>\n            <i (click)=\"clear()\" class=\"closeButton fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n            <div #searchResult class=\"searchResult\" *ngIf=\"showList && this.term.length > 0\">\n                <ul>\n                  <!-- <li (click)=\"selectedSong(song)\" *ngFor=\"let song of (songs | filter: term)\" [class.active]=\"i == arrowkeyLocation\">\n                   {{ song.title }}\n                  </li> -->\n                  <li #listCount (click)=\"selectedSong(song)\" *ngFor=\"let song of (songs.songArr | filter: term)\" [class.active]=\"i == arrowkeyLocation\">\n                    <!-- <span [innerHtml]=\"getTitle(song.title,term)\"></span> -->\n                    <span [innerHtml]=\"song.title | highlight : term\"></span>\n                  </li>\n                </ul>\n              </div>\n          </div>\n          \n\n          <!-- <header class=\"searchInput\">\n              <i class=\"searchButton fa fa-search\" aria-hidden=\"true\"></i>\n              <input type=\"text\" class=\"search\" placeholder=\"Search song...\">\n              <i aria-hidden=\"true\" class=\"closeButton fa fa-times-circle\"></i>\n            </header> -->\n\n      <!-- <div class=\"col-md-10 col-lg-8 col-xl-7 m-auto\">\n                <div class=\"btn-group col-12 mb-2 mb-md-0 m-auto\">\n                  <input #searchFocus type=\"text\" [(ngModel)]=\"search\" (keyup)=\"startSearch()\" class=\"searchInput form-control form-control-lg\" placeholder=\"Search song...\">\n                </div>\n                <div class=\"col-12 col-md-3\">\n                  <button class=\"btn btn-block btn-lg btn-primary\">Search!</button>\n                </div>\n            </div> -->\n\n</header>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/song/song.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongComponent = (function () {
    function SongComponent(appService, renderer) {
        this.appService = appService;
        this.renderer = renderer;
        this.term = '';
        this.clearText = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showSongFlag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.songUrl = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SongComponent.prototype.keyEvent = function (event) {
        this.showList = false;
    };
    SongComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.searchFocus.nativeElement, 'focus');
        //   window.screen.orientation.onchange = function (){
        //     // logs 'portrait' or 'landscape'
        //     console.log(screen.orientation.type);
        //     this.height = (window.screen.height - 200 - 63)/2 + "px";
        //     //SongComponent.searchText();
        // };
    };
    SongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showList = false;
        //console.log("window.screen.height: "+window.screen.height);
        //console.log("this.footerHeight: "+ this.footerHeight);
        this.height = (window.screen.height - this.footerHeight - 63) / 2 + "px";
        //console.log("this.height: "+ this.height);    
        this.searchText();
        //debugger
        this.appService.getSongs()
            .subscribe(function (songs) {
            //debugger;
            _this.songs = JSON.parse(songs._body);
            // console.log(this.songs);
        });
    };
    SongComponent.prototype.searchText = function () {
        //console.log(this.term.length);
        if (this.term.length > 0) {
            this.showList = true;
        }
        else {
            this.showList = false;
            this.showSong = false;
        }
        //debugger;
        // if(this.searchResult){
        //   this.renderer.setElementStyle(
        //     this.searchResult.nativeElement,
        //     "height",
        //     window.screen.height - this.footerHeight - 63 + "px"
        //   );
        // }
    };
    SongComponent.prototype.selectedSong = function (s) {
        this.term = s.title;
        this.showList = false;
        this.showSong = true;
        var num = this.term.split("-");
        this.getSong(num[0].trim());
        //debugger;
        this.showSongFlag.emit(this.showSong);
    };
    SongComponent.prototype.clear = function () {
        this.term = '';
        this.showList = false;
        this.showSong = false;
        this.searchText();
        this.searchFocus.nativeElement.focus();
        //debugger;
        this.clearText.emit(this.showSong);
    };
    SongComponent.prototype.getSong = function (sn) {
        var _this = this;
        this.appService.setSongNumber(sn);
        this.appService.getSong()
            .subscribe(function (song) {
            _this.song = song;
            _this.showSong = true;
            _this.songUrl.emit(_this.song);
        });
    };
    SongComponent.prototype.getTitle = function (title, term) {
        //console.log(title + "" +term);
        title.substr();
        return title;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], SongComponent.prototype, "footerHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('masthead'),
        __metadata("design:type", Object)
    ], SongComponent.prototype, "masthead", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchFocus'),
        __metadata("design:type", Object)
    ], SongComponent.prototype, "searchFocus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchResult'),
        __metadata("design:type", Object)
    ], SongComponent.prototype, "searchResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SongComponent.prototype, "clearText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SongComponent.prototype, "showSongFlag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SongComponent.prototype, "songUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SongComponent.prototype, "keyEvent", null);
    SongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-song',
            template: __webpack_require__("../../../../../src/app/song/song.component.html"),
            styles: [__webpack_require__("../../../../../src/app/song/song.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], SongComponent);
    return SongComponent;
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
    production: false
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