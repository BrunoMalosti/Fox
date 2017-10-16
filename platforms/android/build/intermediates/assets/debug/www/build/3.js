webpackJsonp([3],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPublicoPageModule", function() { return PerfilPublicoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_publico__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ion_rating_ion_rating__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PerfilPublicoPageModule = (function () {
    function PerfilPublicoPageModule() {
    }
    return PerfilPublicoPageModule;
}());
PerfilPublicoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__perfil_publico__["a" /* PerfilPublicoPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_ion_rating_ion_rating__["a" /* IonRating */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil_publico__["a" /* PerfilPublicoPage */]),
        ],
    })
], PerfilPublicoPageModule);

//# sourceMappingURL=perfil-publico.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPublicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilPublicoPage = (function () {
    function PerfilPublicoPage(navCtrl, authProvider, alertCtrl, profileProvider) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.profileProvider = profileProvider;
    }
    PerfilPublicoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.profileProvider.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            _this.dataNascimento = userProfileSnapshot.val().Nascimento;
        });
    };
    PerfilPublicoPage.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    PerfilPublicoPage.prototype.pushComent = function (valor) {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Digite seu comentário",
            inputs: [
                {
                    name: 'coment',
                    placeholder: 'Comentário',
                    value: this.userProfile.coment
                },
                {
                    name: 'nota',
                    placeholder: 'Avaliação',
                    value: valor
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileProvider.pushComent(data.coment, data.nota);
                    }
                }
            ]
        });
        alert.present();
    };
    return PerfilPublicoPage;
}());
PerfilPublicoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil-publico',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\perfil-publico\perfil-publico.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Perfil Público</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logOut()">\n            Logout \n    <ion-icon name="log-out"></ion-icon>\n    </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <!-- <ion-list>\n        <ion-list-header>\n          Dados pessoais\n        </ion-list-header>\n    \n    \n        CAMPO DO NAME\n    \n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>\n                Nome: \n              </ion-col>\n              <ion-col col-6 *ngIf="userProfile?.Nome || userProfile?.Sobrenome">\n                {{userProfile?.Nome}} {{userProfile?.Sobrenome}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n    \n        CAMPO DO ANIVERSÁRIO\n    \n        <ion-item>\n          <ion-label class="dob-label">Aniversário:</ion-label>\n          <ion-datetime displayFormat="MMM D, YYYY" pickerFormat="D MMM YYYY" [(ngModel)]="dataNascimento">\n          </ion-datetime>\n        </ion-item>\n    \n        CAMPO DE TELEFONE 1\n        <ion-item (click)="updateTEL1()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>\n                Telefone 1:\n              </ion-col>\n              <ion-col col-6 *ngIf="userProfile?.Tel1">\n                {{userProfile?.Tel1}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n    \n    \n        CAMPO DE TELEFONE 2\n        <ion-item (click)="updateTEL2()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>\n                  <ion-icon name="ios-call"></ion-icon>\n              </ion-col>\n              <ion-col col-6 *ngIf="userProfile?.Tel2">\n                {{userProfile?.Tel2}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item> -->\n\n\n\n  <ion-card text-center>\n    <p style="text-align: center"><img src="assets/Logo/logotipo.png" class="logo" /></p>\n\n    <ion-card-header>\n      {{userProfile?.Nome}} {{userProfile?.Sobrenome}}\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card-header>\n    <ion-icon name="md-calendar">{{userProfile?.Nascimento}}</ion-icon>\n  </ion-card-header>\n\n  <ion-card-header>\n    <ion-icon name="ios-call"></ion-icon> {{userProfile?.Tel1}}\n  </ion-card-header>\n\n  <ion-card-header>\n    <ion-icon name="ios-call"></ion-icon> {{userProfile?.Tel2}}\n  </ion-card-header>\n\n\n  <form>\n    <ion-rating [leitura]="false" [numStars]="5" [value]="0" (ionClick)="pushComent($event)">\n      <!--só irá poder votar se [leitura] = "false" -->\n\n    </ion-rating>\n\n    <ion-grid>\n      <ion-row>\n        <!-- <ion-col col-6>\n          Comentário\n        </ion-col> -->\n        <ion-col col-6 *ngIf="userProfile?.coment">\n          {{userProfile?.coment}}\n        </ion-col>\n        <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.coment">\n          <span>\n                      Comentário...\n                      </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n\n\n  <!-- </ion-list> -->\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\perfil-publico\perfil-publico.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
], PerfilPublicoPage);

//# sourceMappingURL=perfil-publico.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonRating; });
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
 * Generated class for the IonRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonRating = (function () {
    function IonRating() {
        this.numStars = 5;
        this.value = 4;
        this.leitura = false;
        this.stars = [];
        this.ionClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    IonRating.prototype.ngAfterViewInit = function () {
        this.calc();
    };
    IonRating.prototype.calc = function () {
        this.stars = [];
        var tmp = this.value;
        for (var i = 0; i < this.numStars; i++, tmp--) {
            if (tmp >= 1)
                this.stars.push("star");
            else if (tmp > 0 && tmp < 1)
                this.stars.push("star-half");
            else
                this.stars.push("star-outline");
        }
    };
    IonRating.prototype.starClicked = function (index) {
        if (!this.leitura) {
            this.value = index + 1;
            this.ionClick.emit(this.value);
            this.calc();
        }
    };
    return IonRating;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], IonRating.prototype, "numStars", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], IonRating.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], IonRating.prototype, "leitura", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], IonRating.prototype, "ionClick", void 0);
IonRating = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ion-rating',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\components\ion-rating\ion-rating.html"*/'<ion-grid class="ion-rating-container">\n  <ion-row>\n    <ion-col *ngFor="let star of stars; let i = index" tappable (click)="starClicked(i)">\n      <ion-icon [name]="star" color="primary"></ion-icon>\n\n\n    </ion-col>\n  </ion-row>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\components\ion-rating\ion-rating.html"*/
    }),
    __metadata("design:paramtypes", [])
], IonRating);

//# sourceMappingURL=ion-rating.js.map

/***/ })

});
//# sourceMappingURL=3.js.map