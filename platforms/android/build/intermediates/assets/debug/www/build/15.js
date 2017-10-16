webpackJsonp([15],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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




var ProfilePage = (function () {
    function ProfilePage(navCtrl, alertCtrl, authProvider, profileProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.profileProvider.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            _this.dataNascimento = userProfileSnapshot.val().Nascimento;
        });
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    ProfilePage.prototype.updateName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Seu nome e sobrenome",
            inputs: [
                {
                    name: 'Nome',
                    placeholder: 'Seu nome',
                    value: this.userProfile.Nome
                },
                {
                    name: 'Sobrenome',
                    placeholder: 'Seu sobrenome',
                    value: this.userProfile.Sobrenome
                },
            ],
            buttons: [
                { text: 'Cancelar' },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.profileProvider.updateName(data.Nome, data.Sobrenome);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateNiver = function (dataNascimento) {
        this.profileProvider.updateNiver(dataNascimento);
    };
    ProfilePage.prototype.updateCPF = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Seu CPF",
            inputs: [
                {
                    name: 'CPF',
                    placeholder: 'Seu Cpf',
                    value: this.userProfile.CPF
                }
            ],
            buttons: [
                { text: 'Cancelar' },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.profileProvider.updateCPF(data.CPF);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateRG = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Seu RG",
            inputs: [
                {
                    name: 'RG',
                    placeholder: 'Seu RG',
                    value: this.userProfile.RG
                }
            ],
            buttons: [
                { text: 'Cancelar' },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.profileProvider.updateRG(data.RG);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateTEL1 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Telefone 1",
            inputs: [
                {
                    name: 'Tel1',
                    placeholder: 'Tel1',
                    value: this.userProfile.Tel1
                }
            ],
            buttons: [
                { text: 'Cancelar' },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.profileProvider.updateTEL1(data.Tel1);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateTEL2 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Telefone 2",
            inputs: [
                {
                    name: 'Tel2',
                    placeholder: 'Tel2',
                    value: this.userProfile.Tel2
                }
            ],
            buttons: [
                { text: 'Cancelar' },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.profileProvider.updateTEL2(data.Tel2);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'newEmail',
                    placeholder: 'Your new email',
                },
                {
                    name: 'password',
                    placeholder: 'Your password',
                    type: 'password'
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileProvider.updateEmail(data.newEmail, data.password)
                            .then(function () {
                            console.log("Email Changed Successfully");
                        }).catch(function (error) {
                            console.log('ERROR: ' + error.message);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updatePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'newPassword',
                    placeholder: 'Your new password',
                    type: 'password'
                },
                {
                    name: 'oldPassword',
                    placeholder: 'Your old password',
                    type: 'password'
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
                    }
                }
            ]
        });
        alert.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Perfil</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logOut()">\n\n        Logout \n\n<ion-icon name="log-out"></ion-icon>\n\n</button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Dados pessoais\n\n    </ion-list-header>\n\n\n\n\n\n    <!-- CAMPO DO NAME -->\n\n\n\n    <ion-item (click)="updateName()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Nome\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="userProfile?.Nome || userProfile?.Sobrenome">\n\n            {{userProfile?.Nome}} {{userProfile?.Sobrenome}}\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.Nome">\n\n            <span>\n\nTap here to edit.\n\n</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <!-- CAMPO DO ANIVERSÁRIO -->\n\n\n\n    <ion-item>\n\n      <ion-label class="dob-label">Aniversário:</ion-label>\n\n      <ion-datetime displayFormat="MMM D, YYYY" pickerFormat="D MMM YYYY" [(ngModel)]="dataNascimento" (ionChange)="updateNiver(dataNascimento)">\n\n      </ion-datetime>\n\n    </ion-item>\n\n\n\n\n\n      <!-- CAMPO DE CPF -->\n\n    <ion-item (click)="updateCPF()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            CPF\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="userProfile?.CPF">\n\n            {{userProfile?.CPF}}\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.CPF">\n\n            <span>\n\nTap here to edit.\n\n</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <!-- CAMPO DE RG -->\n\n    <ion-item (click)="updateRG()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            RG\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="userProfile?.RG">\n\n            {{userProfile?.RG}}\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.RG">\n\n            <span>\n\nTap here to edit.\n\n</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n\n\n    <!-- CAMPO DE TELEFONE 1 -->\n\n    <ion-item (click)="updateTEL1()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Telefone 1\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="userProfile?.Tel1">\n\n            {{userProfile?.Tel1}}\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.Tel1">\n\n            <span>\n\nTap here to edit.\n\n</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n\n\n    <!-- CAMPO DE TELEFONE 2 -->\n\n    <ion-item (click)="updateTEL2()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Telefone 2\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="userProfile?.Tel2">\n\n            {{userProfile?.Tel2}}\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.Tel2">\n\n            <span>\n\nTap here to edit.\n\n</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n\n\n    <!-- CAMPO DO EMAIL -->\n\n\n\n    <ion-item (click)="updateEmail()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Email\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="userProfile?.email">\n\n            {{userProfile?.email}}\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.email">\n\n            <span>\n\nTap here to edit.\n\n</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n\n\n    <!-- CAMPO DA SENHA -->\n\n\n\n    <ion-item (click)="updatePassword()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Password\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile">\n\n            <span>\n\nTap here to edit.\n\n</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n\n\n\n\n\n\n\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=15.js.map