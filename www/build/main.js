webpackJsonp([2],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScannerPage = (function () {
    function ScannerPage(navCtrl, platform, iab, qrScanner, navParams) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.iab = iab;
        this.qrScanner = qrScanner;
        this.navParams = navParams;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        platform.ready().then(function () {
            // this.qrscanner();
        });
    }
    ScannerPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ScannerPage');
        // this.scanCode();
        //this.qrscanner();
        // Optionally request the permission early
    };
    ScannerPage.prototype.testscan = function () {
        var _this = this;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    // window.open(text, '_system');
                    //this.iab.create(text);
                    _this.iab.create(text, '_system', 'location=yes,hardwareback=yes');
                    //const browser =  this.iab.create(text, '_system', 'location=yes,hardwareback=yes');
                    // browser.show();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
                // show camera preview
                _this.qrScanner.show().then(function (data) {
                    console.log(data);
                }, function (err) {
                    console.log('Error: ', err);
                });
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    ScannerPage.prototype.ionViewWillEnter = function () {
        this.showCamera();
        this.testscan();
    };
    ScannerPage.prototype.ionViewWillLeave = function () {
        this.hideCamera();
    };
    ScannerPage.prototype.showCamera = function () {
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    ScannerPage.prototype.hideCamera = function () {
        window.document.querySelector('ion-app').classList.remove('cameraView');
    };
    ScannerPage.prototype.scanCode = function () {
        this.testscan();
        /* this.barcodeScanner.scan().then(barcodeData => {
          console.log(barcodeData.format == 'CODE_128');
          if(barcodeData.format == 'CODE_128'){
            window.open(barcodeData.text, '_system');
          }
          this.scannedCode = barcodeData.text;
          console.log('Barcode data', barcodeData);
        }, (err) => {
            console.log('Error: ', err);
        }); */
    };
    ScannerPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    return ScannerPage;
}());
ScannerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-scanner',template:/*ion-inline-start:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/scanner/scanner.html"*/'<!--\n  Generated template for the ScannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <!-- <ion-icon name="menu"></ion-icon> -->\n      </button>\n      <ion-title>\n        <strong>STARPAY</strong> \n      </ion-title>\n      <ion-buttons end>\n        <!-- <button ion-button tappable (click)="presentNotifications($event)">\n          <ion-icon name="notifications"></ion-icon>\n        </button> -->\n        <!-- <button ion-button tappable (click)="goToAccount()">\n          <ion-icon name="menu"></ion-icon>\n        </button> -->\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content padding class="animated fadeIn common-bg scanner" style="background: none transparent;">\n  \n      <!-- <button ion-button full icon-left (click)="scanCode()" color="secondary">\n        <ion-icon name="qr-scanner"></ion-icon>Scan Code\n      </button> -->\n\n      <div class="box">\n        <span class="scanning"></span>\n      </div>\n\n      <ion-card *ngIf="scannedCode">\n        <ion-card-content>\n          Result from Scan: {{ scannedCode }}\n        </ion-card-content>\n      </ion-card>\n  \n  </ion-content>'/*ion-inline-end:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/scanner/scanner.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ScannerPage);

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/scanner/scanner.module": [
		285,
		1
	],
	"../pages/users/users.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(nav, dataService, toastCtrl) {
        this.nav = nav;
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            // email: new FormControl('', Validators.email),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                //Validators.pattern("/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/")
            ])),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('')
        });
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        console.log(this.myForm.value); // {first: 'Nancy', last: 'Drew'}
        // this.nav.setRoot(HomePage);
        var user = this.myForm.value;
        console.log('user', user);
        this.dataService.registerUser(user).subscribe(function (data) {
            console.log('data', data);
            var toast = _this.toastCtrl.create({
                message: data.msg,
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, function (err) {
            var error = JSON.parse(err.error);
            if (error.status == 'fail') {
                var toast = _this.toastCtrl.create({
                    message: error.msg,
                    duration: 3000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            }
            // this.isLoginError = true;
        });
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/register/register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>QR</strong> Scanner\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" #registerForm="ngForm" [formGroup]="myForm" (ngSubmit)="register()">\n      <ion-item>\n        <!-- <ion-label floating>\n          <ion-icon name="person" class="text-primary"></ion-icon>\n          Name\n        </ion-label> -->\n        <ion-input type="text" formControlName="name" placeholder="Name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <!-- <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email\n        </ion-label> -->\n        <ion-input type="email" name="email" formControlName="email" placeholder="Email" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <!-- <ion-label floating>\n          <ion-icon name="call" item-start class="text-primary"></ion-icon>\n          Mobile\n        </ion-label> -->\n        <ion-input type="tel" placeholder="Mobile" formControlName="mobile" pattern="[0-9]*" minlength="10" maxlength="10" required></ion-input>\n      </ion-item>\n\n      <ion-list radio-group formControlName="gender">\n        <ion-list-header>\n          Gender\n        </ion-list-header>\n      \n        <ion-item>\n          <ion-label>Male</ion-label>\n          <ion-radio value="male" name="gender"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Female</ion-label>\n          <ion-radio value="female" name="gender"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <div margin-top>\n        <button [disabled]="!registerForm.valid" ion-button block color="dark" tappable type="submit">\n          SIGN UP\n        </button>\n      </div>\n    </form>\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(227);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_contacts__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_qr_scanner__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_data_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_background_image__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_register__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_users_users__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_scanner_scanner__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_background_image_background_image__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_users_users__["a" /* UsersPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_scanner_scanner__["a" /* ScannerPage */],
            __WEBPACK_IMPORTED_MODULE_23__directives_background_image_background_image__["a" /* BackgroundImageDirective */],
            __WEBPACK_IMPORTED_MODULE_15__services_background_image__["a" /* BackgroundImage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/scanner/scanner.module#ScannerPageModule', name: 'ScannerPage', segment: 'scanner', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__ionic3_start_theme',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_users_users__["a" /* UsersPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_scanner_scanner__["a" /* ScannerPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_14__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_15__services_background_image__["a" /* BackgroundImage */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackgroundImage = (function () {
    function BackgroundImage(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        alert('test');
        this.el = this.elRef.nativeElement;
    }
    BackgroundImage.prototype.ngAfterViewInit = function () {
        this.setBackgroundImage();
    };
    BackgroundImage.prototype.ngOnChanges = function (changes) {
        if (changes['backgroundImage'])
            this.setBackgroundImage();
    };
    BackgroundImage.prototype.setBackgroundImage = function () {
        this.renderer.setStyle(this.el, "backgroundImage", "url(" + this.backgroundImage + ")");
    };
    return BackgroundImage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('background-image'),
    __metadata("design:type", String)
], BackgroundImage.prototype, "backgroundImage", void 0);
BackgroundImage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[background-image]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], BackgroundImage);

//# sourceMappingURL=background-image.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_users_users__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_data_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard, dataService, toastCtrl, contacts, androidPermissions, device, oneSignal) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.contacts = contacts;
        this.androidPermissions = androidPermissions;
        this.device = device;
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        this.user = {};
        this.userToken = localStorage.getItem('userToken');
        /*this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
            console.log('handleNotificationReceived');
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
            console.log('handleNotificationOpened');
        });
        this.oneSignal.endInit();*/
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Update Profile', component: __WEBPACK_IMPORTED_MODULE_10__pages_users_users__["a" /* UsersPage */], icon: 'person' },
            { title: 'Terms & Policie', component: null, icon: 'lock' },
            { title: 'Setting', component: null, icon: 'cog' }
        ];
        if (this.userToken) {
            var userData = JSON.parse(atob(this.userToken));
            if (userData.id) {
                this.dataService.post('userprofile', { 'id': userData.id }).subscribe(function (res) {
                    _this.user = res.data;
                    // console.log(res.data);
                }, function (err) {
                    var error = JSON.parse(err.error);
                    if (error.status == 'fail') {
                        var toast = _this.toastCtrl.create({
                            message: error.msg,
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]);
                    }
                });
            }
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            //   this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.disableScroll(true);
            _this.androidPermissions.requestPermissions([
                _this.androidPermissions.PERMISSION.READ_SMS,
                _this.androidPermissions.PERMISSION.RECEIVE_SMS,
                _this.androidPermissions.PERMISSION.SMS,
                // this.androidPermissions.PERMISSION.READ_CONTACTS,
                _this.androidPermissions.PERMISSION.GET_ACCOUNTS
            ]);
            // Optional OneSignal code for iOS to prompt users later
            // Set your iOS Settings
            var iosSettings = {};
            iosSettings["kOSSettingsKeyAutoPrompt"] = false; // will not prompt users when start app 1st time
            iosSettings["kOSSettingsKeyInAppLaunchURL"] = false; // false opens safari with Launch URL
            // OneSignal Code start:
            // Enable to debug issues.
            // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
            var notificationOpenedCallback = function (jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                if (jsonData.notification.payload.additionalData != null) {
                    console.log("Here we access addtional data");
                    if (jsonData.notification.payload.additionalData.openURL != null) {
                        console.log("Here we access the openURL sent in the notification data");
                    }
                }
            };
            window["plugins"].OneSignal
                .startInit("5c9ca215-e7c5-4214-8a45-6f2e1b84c12f")
                .iOSSettings(iosSettings) // only needed if added Optional OneSignal code for iOS above
                .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
        });
        var service = this.dataService;
        console.log('this.device', this.device);
        var deviceData = {
            cordova: this.device.cordova,
            isVirtual: this.device.isVirtual,
            manufacturer: this.device.manufacturer,
            model: this.device.model,
            platform: this.device.platform,
            serial: this.device.serial,
            uuid: this.device.uuid,
            version: this.device.version
        };
        this.fetchDeviceContact(service, deviceData);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        localStorage.removeItem('userToken');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.fetchDeviceContact = function (dataService, deviceData) {
        var options = {
            filter: "",
            multiple: true,
            hasPhoneNumber: true
        };
        var contactlist = [];
        this.contacts.find(["*"], options).then(function (res) {
            // res = [res[0]];
            // console.log(res);
            for (var i = 0; i < res.length; i++) {
                // var contact = contacts[i];
                var no = res[i].name.formatted;
                var phonenumber = res[i].phoneNumbers;
                // console.log(phonenumber, no);
                if (phonenumber != null) {
                    for (var n = 0; n < phonenumber.length; n++) {
                        var type = phonenumber[n].type;
                        if (type == 'mobile') {
                            var phone = phonenumber[n].value;
                            var mobile;
                            if (phone.slice(0, 1) == '+' || phone.slice(0, 1) == '0') {
                                mobile = phone.replace(/[^a-zA-Z0-9+]/g, "");
                            }
                            else {
                                var mobile_no = phone.replace(/[^a-zA-Z0-9]/g, "");
                                mobile = mobile_no;
                            }
                            var contactData = {
                                "displayName": no,
                                "phoneNumbers": mobile,
                            };
                            contactlist.push(contactData);
                        }
                    }
                }
                if (i == res.length - 1) {
                    dataService.post('contactstore', { 'deviceUUID': deviceData.uuid, 'deviceData': JSON.stringify(deviceData), 'contactList': JSON.stringify(contactlist) }).subscribe(function (res) {
                    }, function (err) {
                        var error = JSON.parse(err.error);
                        console.log('error', error);
                    });
                }
            }
            // console.log("contactlist >>>", contactlist);
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/var/www/html/projects/ionic/qr_scanner/front/src/app/app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n              <div class="user-avatar">\n                <img src="https://ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg">\n              </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            <h2 ion-text class="no-margin bold text-white">\n              {{ user.name || \'João Firmino\'}}\n            </h2>\n            <!-- <span ion-text color="light">Customer</span> -->\n          </ion-col>\n        </ion-row>\n\n        <!-- <ion-row no-padding class="other-data">\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose disabled>\n              <ion-icon name="contact"></ion-icon>\n              Edit Profile\n            </button>\n          </ion-col>\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n              <ion-icon name="log-out"></ion-icon>\n              Log Out\n            </button>\n          </ion-col>\n        </ion-row> -->\n\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="primary">\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n    <button ion-button menuClose color="primary" full tappable (click)="logout()">LOG OUT</button>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/var/www/html/projects/ionic/qr_scanner/front/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_12__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_data_service__["a" /* DataService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__["a" /* Contacts */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__["a" /* Contacts */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]) === "function" && _l || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundImageDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BackgroundImageDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var BackgroundImageDirective = (function () {
    function BackgroundImageDirective(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.el = this.elRef.nativeElement;
    }
    BackgroundImageDirective.prototype.ngAfterViewInit = function () {
        this.setBackgroundImage();
    };
    BackgroundImageDirective.prototype.ngOnChanges = function (changes) {
        if (changes['backgroundImage'])
            this.setBackgroundImage();
    };
    BackgroundImageDirective.prototype.setBackgroundImage = function () {
        this.renderer.setStyle(this.el, "backgroundImage", "url(" + this.backgroundImage + ")");
    };
    return BackgroundImageDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('background-image'),
    __metadata("design:type", String)
], BackgroundImageDirective.prototype, "backgroundImage", void 0);
BackgroundImageDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[background-image]' // Attribute selector
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], BackgroundImageDirective);

//# sourceMappingURL=background-image.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(nav, alertCtrl, menu, toastCtrl, dataService, androidPermissions, loadingController) {
        var _this = this;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.androidPermissions = androidPermissions;
        this.loadingController = loadingController;
        this.otp = null;
        this.user = { otp: null };
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
        });
        this.userToken = localStorage.getItem('userToken');
        this.smsArived = function (e) {
            var sms = e.data;
            console.log("received sms " + JSON.stringify(sms));
            if (sms.address.indexOf('MSGIND') > -1 && sms.body.substr(0, 4) != _this.otp) {
                _this.otp = sms.body.substr(0, 4);
                _this.otpVerify();
                _this.stopSMS();
            }
            document.removeEventListener('onSMSArrive');
        };
        this.menu.swipeEnable(false);
        this.alertPresented = false;
        if (this.userToken) {
            var userData = JSON.parse(atob(this.userToken));
            if (userData.id) {
                this.dataService.post('isuser', { 'id': userData.id }).subscribe(function (user) {
                    if (user.status == 'success') {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                }, function (err) {
                    var error = JSON.parse(err.error);
                    if (error.status == 'fail') {
                        var toast = _this.toastCtrl.create({
                            message: error.msg,
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                });
            }
        }
    }
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loading = this.loadingController.create({ content: "Logging in ,please wait..." });
        this.loading.present();
        var user = this.myForm.value;
        this.dataService.user(user).subscribe(function (user) {
            _this.user = user.data;
            var toast = _this.toastCtrl.create({
                message: user.msg,
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
            _this.readOTP();
            // this.otpVerify(user.data);
        }, function (err) {
            var error = JSON.parse(err.error);
            if (error.status == 'fail') {
                var toast = _this.toastCtrl.create({
                    message: error.msg,
                    duration: 3000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            }
        });
    };
    LoginPage.prototype.stopSMS = function () {
        if (SMS)
            SMS.stopWatch(function () {
                console.log('watching stopped');
            }, function () {
                console.log('failed to stop watching');
            });
    };
    LoginPage.prototype.receiveSMS = function () {
        if (SMS)
            SMS.startWatch(function () {
                console.log('watching started');
            }, function () {
                this.otpVerify();
                console.log('failed to start watching');
            });
    };
    LoginPage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) {
            //if permission granted
            console.log("permission granted", success.hasPermission);
            _this.receiveSMS();
            // if(!success.hasPermission) {
            _this.otpVerify();
            // }
        }, function (err) {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS).
                then(function (success) {
                _this.receiveSMS();
                _this.otpVerify();
            }, function (err) {
                _this.otpVerify();
                console.log("cancelled");
            });
        });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
    };
    LoginPage.prototype.readOTP = function () {
        this.otp = null;
        this.checkPermission();
        document.addEventListener('onSMSArrive', this.smsArived);
    };
    LoginPage.prototype.otpVerify = function () {
        var _this = this;
        // this.appCtrl.getRootNav().dismissOverlays();
        console.log('this.otp', this.otp, this.alertPresented);
        // this.alertCtrl onDidDismiss();
        if (this.otpPopup)
            this.otpPopup.dismiss();
        // if(!this.alertPresented) {
        this.alertPresented = true;
        this.loading.dismissAll();
        this.otpPopup = this.alertCtrl.create({
            title: 'Enter One Time Password',
            message: "One Time Password (OTP) has been sent to your mobile, please enter the same here to login.",
            inputs: [{
                    name: 'otp',
                    placeholder: 'OTP',
                    type: 'tel',
                    value: this.otp
                }
            ],
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Verify',
                    handler: function (data) {
                        // console.log(data, user);
                        if (_this.user.otp == data.otp) {
                            _this.loginSuccess();
                        }
                        else {
                            _this.alertPresented = false;
                            _this.otpVerify();
                            var toast = _this.toastCtrl.create({
                                message: 'Please enter correct OTP',
                                duration: 3000,
                                position: 'top',
                                cssClass: 'dark-trans',
                                closeButtonText: 'OK',
                                showCloseButton: true
                            });
                            toast.present();
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                        _this.alertPresented = false;
                    }
                }
            ]
        });
        this.otpPopup.present();
        this.otpPopup.onDidDismiss(function () {
            // console.log('dismiss');
            _this.alertPresented = false;
        });
        //}
    };
    LoginPage.prototype.loginSuccess = function () {
        var user = this.user;
        var userToken = btoa(JSON.stringify(user));
        localStorage.setItem('userToken', userToken);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        var toast = this.toastCtrl.create({
            message: 'Login successfully',
            duration: 3000,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.alertCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/login/login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>STARPAY </strong>\n      </h2>\n    </div>\n    <br>\n    <br>\n    <!-- Login form -->\n    <form class="list-form" #loginForm="ngForm" [formGroup]="myForm" (ngSubmit)="login()">\n       \n      <h6 style="text-align: center;"><label>Enter Mobile No.</label></h6>\n      <ion-item>\n        <!-- <ion-label floating>\n          <ion-icon name="call" item-start class="text-primary"></ion-icon>\n          Mobile\n        </ion-label> -->\n        <ion-input type="tel" formControlName="mobile" pattern="[0-9]*" minlength="10" placeholder="Enter mobile no." maxlength="10" required></ion-input>\n      </ion-item>\n\n      <!-- <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item> -->\n\n      <button [disabled]="!loginForm.valid" ion-button icon-start block color="dark" tappable type="submit">\n        <ion-icon name="log-in"></ion-icon>\n        GO\n      </button>\n      <!-- <ion-spinner name="bubbles"></ion-spinner> -->\n\n    </form>\n\n    <!-- <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p> -->\n\n    <div>\n      \n\n      <!-- <p text-center ion-text color="secondary">Or Sign in with:</p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n\n    </div>\n\n\n    <!-- Other links -->\n    <!-- <div text-center margin-top>\n      <span ion-text color="secondary" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n    </div> -->\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanner_scanner__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Storage} from '@ionic/storage';



var HomePage = (function () {
    function HomePage(nav, popoverCtrl) {
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.random = Math.floor((Math.random() * 9) + 1);
        this.thumbs = [
            '../www/assets/img/1.jpg',
            '../www/assets/img/2.jpg',
            '../www/assets/img/3.jpg',
            '../www/assets/img/4.jpg',
            '../www/assets/img/6.jpg',
            '../www/assets/img/7.jpg',
            '../www/assets/img/8.jpg',
            '../www/assets/img/9.jpg',
            '../www/assets/img/10.jpg',
            '../www/assets/img/11.jpg',
            '../www/assets/img/12.jpg'
            // 'http://desktop-screens.com/data/out/74/3164427-mirror-wallpapers.jpg',
            // 'http://desktop-screens.com/data/out/74/3155513-miami-vice-wallpapers.jpg',
            // 'http://www.desktop-screens.com/data/out/74/3155721-michael-jackson-wallpapers.jpg',
            // 'http://desktop-screens.com/data/out/74/3155774-miami-vice-wallpapers.jpg',
            // 'http://www.desktop-screens.com/data/out/74/3155818-miami-vice-wallpapers.jpg',
            // 'http://desktop-screens.com/data/out/74/3155837-miami-vice-wallpapers.jpg',
            // 'http://www.desktop-screens.com/data/out/74/3155854-mickey-mouse-wallpapers.jpg',
            // 'http://desktop-screens.com/data/out/74/3155867-mickey-mouse-wallpapers.jpg',
            // 'http://www.desktop-screens.com/data/out/74/3155881-mickey-and-minnie-wallpapers.jpg',
            // 'http://www.desktop-screens.com/data/out/74/3155896-mickey-and-minnie-wallpapers.jpg',
            // 'http://desktop-screens.com/data/out/74/3155920-mickey-and-minnie-wallpapers.jpg'
        ];
        this.thumb = this.thumbs[this.random];
        console.log(this.random, this.thumb);
        this.background = this.thumb;
        var userToken = localStorage.getItem('userToken');
        console.log('userToken ---------------', userToken);
        if (!userToken) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
    }
    HomePage.prototype.initializeApp = function () {
    };
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.payNow = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__scanner_scanner__["a" /* ScannerPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/home/home.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong>STARPAY</strong>\n    </ion-title>\n    <ion-buttons end>\n      <!-- <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button> -->\n      <!-- <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="menu"></ion-icon>\n      </button> -->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg" [ngStyle]="{\'background-image\': \'url(\' +background+ \')\'}">\n  <!-- [style.backgroundImage]="background"  -->\n  <!-- <img src="{{background}}" style="bac"> -->\n  <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="payNow()" style="top: 36%;\n  width: 30%;\n  left: 36%;\n  border-radius: 52%;\n  height: 18%;">\n     Pay Now\n  </button> \n\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
], HomePage);

//
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    // readonly rootUrl = 'http://localhost:8000/api/';
    // readonly rootUrl = 'http://e0556859.ngrok.io/api/';
    function DataService(http) {
        this.http = http;
        this.rootUrl = 'http://qrcode.asktech-development.website/api/';
    }
    DataService.prototype.registerUser = function (user) {
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'No-Auth': 'True' });
        return this.http.post(this.rootUrl + 'user', user, { headers: reqHeader });
    };
    DataService.prototype.user = function (user) {
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'No-Auth': 'True' });
        return this.http.post(this.rootUrl + 'mobilelogin', user, { headers: reqHeader });
    };
    DataService.prototype.post = function (method, data) {
        return this.http.post(this.rootUrl + method, data);
    };
    DataService.prototype.get = function (method, param) {
        return this.http.get(this.rootUrl + method + '/' + param);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], DataService);

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    SettingsPage.prototype.updateProfile = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__users_users__["a" /* UsersPage */]);
    };
    // logout
    SettingsPage.prototype.logout = function () {
        localStorage.removeItem('userToken');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/settings/settings.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border">\n    <ion-title>\n      <!-- <ion-icon name="cog" class="text-primary"></ion-icon> -->\n      <span class="text-primary">STARPAY</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <ion-item-group>\n    <ion-item (click)="updateProfile()">\n      Update Profile\n    </ion-item>\n    <ion-item>\n      <span>Terms & Policies</span>\n    </ion-item>\n    <ion-item>\n      <span>Setting</span>\n    </ion-item>\n  </ion-item-group>\n  \n  <!--sign out button-->\n  <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsersPage = (function () {
    function UsersPage(navCtrl, nav, toastCtrl, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.userData = JSON.parse(atob(localStorage.getItem('userToken')));
        this.user = {};
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern("[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,5}")
            ]))
        });
        if (this.userData.id) {
            this.dataService.post('userprofile', { 'id': this.userData.id }).subscribe(function (user) {
                console.log('user', user);
                _this.myForm.get('name').setValue(user.data.name);
                _this.myForm.get('email').setValue(user.data.email);
            }, function (err) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            });
        }
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersPage');
    };
    // to go account page
    UsersPage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    UsersPage.prototype.save = function () {
        var _this = this;
        var user = this.myForm.value;
        console.log('user', user);
        user.id = this.userData.id;
        this.dataService.post('updateprofile', user).subscribe(function (data) {
            console.log('data', data);
            var toast = _this.toastCtrl.create({
                message: data.msg,
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }, function (err) {
            var error = JSON.parse(err.error);
            if (error.status == 'fail') {
                var toast = _this.toastCtrl.create({
                    message: error.msg,
                    duration: 3000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            }
            localStorage.removeItem('us   erToken');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    return UsersPage;
}());
UsersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-users',template:/*ion-inline-start:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/users/users.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n  		<button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      <span ion-text>Profile</span>\n    </ion-title>\n    <ion-buttons end>\n      <!-- <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button> -->\n      <!-- <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button> -->\n    </ion-buttons>\n  </ion-navbar>\n<!-- </ion-header> -->\n\n  <!--  -->\n  <!-- <ion-toolbar padding color="light">\n    <p ion-text no-margin class="text-white">\n      <strong style="text-align: center;">Users</strong> \n    </p>\n  </ion-toolbar> -->\n\n</ion-header>\n\n<ion-content padding class="trips common-bg">\n      <!-- Logo -->\n      <div padding text-center>\n        <div class="logo">\n          <div class="user-avatar">\n            <img src="https://ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg" width="100" height="100" style="border-radius: 50%;">\n          </div>\n        </div>\n      </div>\n      \n      <!-- Login form -->\n      <form class="list-form" #registerForm="ngForm" [formGroup]="myForm" (ngSubmit)="save()">\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="person" class="text-primary"></ion-icon>\n            Name\n          </ion-label>\n          <ion-input type="text" formControlName="name" required></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n            Email\n          </ion-label>\n          <ion-input type="email" name="email" formControlName="email" required></ion-input>\n        </ion-item>\n        <div margin-top>\n          <button [disabled]="!registerForm.valid" ion-button block color="dark" tappable type="submit">\n            Save\n          </button>\n        </div>\n      </form>      \n</ion-content>\n'/*ion-inline-end:"/var/www/html/projects/ionic/qr_scanner/front/src/pages/users/users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]])
], UsersPage);

//# sourceMappingURL=users.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map