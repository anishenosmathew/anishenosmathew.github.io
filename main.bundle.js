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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__song_filterPipe__ = __webpack_require__("../../../../../src/app/song/filterPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__song_highlightPipe__ = __webpack_require__("../../../../../src/app/song/highlightPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_auto_complete__ = __webpack_require__("../../../../ng2-auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__ = __webpack_require__("../../../../cuppa-ng2-slidemenu/cuppa-ng2-slidemenu.js");
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
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__song_filterPipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_9__song_highlightPipe__["a" /* HighlightPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_11_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_12_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__["a" /* SlideMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] }
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

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n\n    <!-- Header -->\n      <div id=\"header\">\n\n        <!-- Nav -->\n          <nav id=\"nav\">\n            <ul>\n              <li class=\"opener\" style=\"user-select: none; cursor: pointer; white-space: nowrap;\">\n                <a href=\"http://www.kristheeyakeerthanangal.org\"><h1>Kristheeya Keerthanangal</h1></a>    \n              </li>\n            </ul>\n          </nav>\n\n      </div>\n\n    <!-- Banner -->\n      <section id=\"banner\">\n          <app-song #songComponent (clearText)=\"clearText($event)\" (showSongFlag)=\"showSongFlag($event)\" (songUrl)=\"songUrl($event)\"></app-song>\n      </section>\n\n    <!-- Highlights -->\n      <section class=\"wrapper style1\">\n          <section *ngIf=\"showSong\" class=\"container songContainer\">\n            <div class=\"song-box\">\n                <img class=\"song-image\" src=\"{{song}}\">\n              <!-- <iframe width=\"100%\" height=\"200\" src=\"https://www.youtube.com/embed/bhYWA7LOqP4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> -->\n            </div>\n          </section>\n          <div class=\"container aboutSection\">\n            <div class=\"row gtr-200\">\n              <section class=\"col-4 col-12-narrower\">\n                <div class=\"box highlight songListContainer\">\n                  <i class=\"icon major fa-list\"></i>\n                  \n                  <h3>Song List</h3>\n                  <ul *ngIf=\"songs\">\n                    <li *ngFor=\"let item of songs.songArr | paginate: { itemsPerPage: 10, currentPage: page }\">\n                      <a (click)=\"selectedSong(item)\"> {{ item.title }}</a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"pagination\">\n                  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n                </div>\n              </section>\n\n              <section class=\"col-4 col-12-narrower\">\n                <div class=\"box highlight\">\n                  <i class=\"icon major fa-signal\"></i>\n                  <h3>Song of the week</h3>\n                  <p><a (click)=\"selectedSong(songs.songArr[0])\"> 1 - Athi ravile thiru sannidhi</a></p> \n                </div>\n              </section>\n\n              <section class=\"col-4 col-12-narrower\">\n                  <div class=\"box highlight\">\n                    <i class=\"icon major fa-music\"></i>\n                    <h3>About</h3>\n                    <p>This website provides a complete collection of songs from \n                      Malankara Mar Thoma Syrian church's Kristheeya Keerthanangal song book. \n                      Search for your favorite song or choose from the list above.\n                      <br>\n                      Note: Currently the website provides first 150 songs. More songs\n                      coming soon. Stay tuned !\n                      </p>\n                  </div>\n                </section>\n\n            </div>\n          </div>\n      </section>\n\n\n    <!-- Footer -->\n      <div id=\"footer\">\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <section class=\"col-12\">\n              <h3>Get In Touch</h3>\n              <form *ngIf=\"!submitted\" #newUserForm=\"ngForm\" (ngSubmit)=\"onSubmit(newUserForm)\">\n                <div class=\"row gtr-50\">\n                  <div class=\"col-6 col-12-mobilep\">\n                    <input type=\"text\" name=\"name\" id=\"userName\" [(ngModel)]=\"userName\"  placeholder=\"Name\">\n                  </div>\n                  <div class=\"col-6 col-12-mobilep\">\n                    <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\">\n                  </div>\n                  <div class=\"col-12\">\n                    <textarea [(ngModel)]=\"comment\" name=\"comment\"  id=\"message\" placeholder=\"Message\" rows=\"5\"></textarea>\n                  </div>\n                  <div class=\"col-12\">\n                    <ul class=\"actions\">\n                      <li><input type=\"submit\" class=\"button primary\" value=\"Send Message\"></li>\n                    </ul>\n                  </div>\n                </div>\n              </form>\n               <div *ngIf=\"thanks\">Thank you for your feedback.</div>\n            </section>\n          </div>\n        </div>\n\n\n        <!-- Icons -->\n          <ul class=\"icons\">\n            <li><a href=\"https://twitter.com/intent/tweet?url=http://www.kristheeyakeerthanangal.org&text=Kristheeya Keerthanangal\" target=\"_blank\" class=\"icon fa-twitter\"><span class=\"label\">Twitter</span></a></li>\n            <li><a href=\"https://www.facebook.com/sharer/sharer.php?u=http://www.kristheeyakeerthanangal.org\" target=\"_blank\" class=\"icon fa-facebook\"><span class=\"label\">Facebook</span></a></li>\n            <li><a href=\"https://wa.me/?text=http://www.kristheeyakeerthanangal.org\" class=\"icon fa fa-whatsapp fa-2x fa-fw\" target=\"_blank\"><span class=\"label\">Whatsapp</span></a></li>\n          </ul>\n\n        <!-- Copyright -->\n          <div class=\"copyright\">\n            <ul class=\"menu\">\n              <li>© http://www.kristheeyakeerthanangal.org</li><li>All rights reserved</li><li>Design: <a href=\"http://html5up.net\">HTML5 UP</a></li><li>Demo /assets/images: <a href=\"http://unsplash.com\">Unsplash</a></li>\n            </ul>\n          </div>\n\n      </div>\n\n  </div>\n\n<div id=\"titleBar\">\n  <span class=\"title\">\n    <em><a href=\"http://www.kristheeyakeerthanangal.org\"><h1>Kristheeya Keerthanangal</h1></a></em>\n  </span>\n</div>\n"

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
    HomeComponent.prototype.selectedSingleSong = function (song) {
        this.songComponent.selectedSingleSong(song);
        window.scrollTo(0, 20);
    };
    HomeComponent.prototype.onSubmit = function (form) {
        if (form.valid) {
            var googleDocsUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfGvQgTCidA9DYLf84VkpOHcKMyzJCwRPraN90ZVtoD7F9rYg/formResponse?";
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

module.exports = "<!-- Masthead -->\n<header #masthead class=\"masthead text-white text-center\">\n\n\n          <div class=\"searchInputBox\">\n            <i class=\"searchButton fa fa-search\" aria-hidden=\"true\"></i>\n            <input #searchFocus type=\"text\"\n              name=\"term\"\n              [(ngModel)]=\"term\"\n              (keyup)=\"searchText()\"\n              class=\"searchInput form-control form-control-lg\"\n              placeholder=\"Search song...\"/>\n            <div class=\"cancelOuter\">\n              <i (click)=\"clear()\" class=\"closeButton fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n            </div>\n            <div #searchResult class=\"searchResult\" *ngIf=\"showList && this.term.length > 0\">\n                <ul>\n                  <!-- <li (click)=\"selectedSong(song)\" *ngFor=\"let song of (songs | filter: term)\" [class.active]=\"i == arrowkeyLocation\">\n                   {{ song.title }}\n                  </li> -->\n                  <li #listCount (click)=\"selectedSong(song)\" *ngFor=\"let song of (songs.songArr | filter: term)\" [class.active]=\"i == arrowkeyLocation\">\n                    <!-- <span [innerHtml]=\"getTitle(song.title,term)\"></span> -->\n                    <span [innerHtml]=\"song.title | highlight : term\"></span>\n                  </li>\n                </ul>\n              </div>\n          </div>\n          \n\n          <!-- <header class=\"searchInput\">\n              <i class=\"searchButton fa fa-search\" aria-hidden=\"true\"></i>\n              <input type=\"text\" class=\"search\" placeholder=\"Search song...\">\n              <i aria-hidden=\"true\" class=\"closeButton fa fa-times-circle\"></i>\n            </header> -->\n\n      <!-- <div class=\"col-md-10 col-lg-8 col-xl-7 m-auto\">\n                <div class=\"btn-group col-12 mb-2 mb-md-0 m-auto\">\n                  <input #searchFocus type=\"text\" [(ngModel)]=\"search\" (keyup)=\"startSearch()\" class=\"searchInput form-control form-control-lg\" placeholder=\"Search song...\">\n                </div>\n                <div class=\"col-12 col-md-3\">\n                  <button class=\"btn btn-block btn-lg btn-primary\">Search!</button>\n                </div>\n            </div> -->\n\n</header>\n\n\n"

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