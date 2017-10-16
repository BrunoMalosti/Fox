webpackJsonp([0],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            .test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HomePage } from '../home/home';
var SignupPage = (function () {
    function SignupPage(navCtrl, authProvider, loadingCtrl, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            rpassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!(this.signupForm.value.password == this.signupForm.value.rpassword))
            return;
        if (!this.signupForm.valid) {
            console.log("Need to complete the form: " + this.signupForm.value);
        }
        else {
            var email = this.signupForm.value.email;
            var password = this.signupForm.value.password;
            // const rpassword: string = this.signupForm.value.rpassword;
            this.authProvider.signupUser(email, password).then(function (user) {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot('PerfilCadastroPage');
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [{ text: "Ok", role: "cancel" }]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Criar conta\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <p style = "text-align: center"><img src="assets/Logo/logotipo.png" class = "logo" /></p>\n\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n    <ion-item>\n\n      <ion-label stacked>Email</ion-label>\n\n      <ion-input formControlName="email" type="email" placeholder="exemplo@exemplo.com" [class.invalid]="!signupForm.controls.email.valid &&\n\n  signupForm.controls.email.dirty">\n\n      </ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid &&\n\n  signupForm.controls.email.dirty">\n\n      <p>Porfavor, entre com um formato válido de email.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Senha</ion-label>\n\n      <ion-input formControlName="password" type="password" placeholder="******" [class.invalid]="!signupForm.controls.password.valid &&\n\n  signupForm.controls.password.dirty">\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid &&\n\n    signupForm.controls.password.dirty">\n\n      <p>Sua senha deve conter ao menos 6 caracteres.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Confirma Senha</ion-label>\n\n      <ion-input formControlName="rpassword" type="password" placeholder="******" [class.invalid]="!signupForm.controls.password.valid &&\n\n  signupForm.controls.password.dirty">\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="error-message" *ngIf="!(signupForm.value.password == signupForm.value.rpassword)">\n\n      <p>Suas senhas devem conferir.</p>\n\n    </ion-item>\n\n\n\n    <button ion-button block type="submit" [disabled]="!signupForm.valid">\n\n  Cadastre-se\n\n  </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map