webpackJsonp([17],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilCadastroPageModule", function() { return PerfilCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_cadastro__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilCadastroPageModule = (function () {
    function PerfilCadastroPageModule() {
    }
    return PerfilCadastroPageModule;
}());
PerfilCadastroPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__perfil_cadastro__["a" /* PerfilCadastroPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil_cadastro__["a" /* PerfilCadastroPage */]),
        ],
    })
], PerfilCadastroPageModule);

//# sourceMappingURL=perfil-cadastro.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilCadastroPage; });
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




var PerfilCadastroPage = (function () {
    function PerfilCadastroPage(navCtrl, authProvider, profileProvider) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
    }
    PerfilCadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilCadastroPage');
    };
    PerfilCadastroPage.prototype.criarPerfil = function (nome, sobrenome, dataNascimento, rg, cpf, tel1, tel2) {
        var _this = this;
        this.profileProvider.criarPerfil(nome, sobrenome, dataNascimento, rg, cpf, tel1, tel2)
            .then(function (newProfile) {
            _this.authProvider.logoutUser().then(function () {
                _this.navCtrl.setRoot('LoginPage');
            });
        });
    };
    return PerfilCadastroPage;
}());
PerfilCadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil-cadastro',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\perfil-cadastro\perfil-cadastro.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Dados Pessoais\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label stacked>Nome</ion-label>\n    <ion-input [(ngModel)]="nome" type="text" placeholder="Nome">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Sobrenome</ion-label>\n    <ion-input [(ngModel)]="sobrenome" type="text" placeholder="Sobrenome">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Nascimento</ion-label>\n    <ion-datetime displayFormat="D MMM, YY" pickerFormat="DD MMM YYYY" [(ngModel)]="dataNascimento">\n    </ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>RG</ion-label>\n    <ion-input [(ngModel)]="rg" type="text" placeholder="RG">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>CPF</ion-label>\n    <ion-input [(ngModel)]="cpf" type="text" placeholder="CPF">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Telefone1</ion-label>\n    <ion-input [(ngModel)]="tel1" type="tel" placeholder="Telefone">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Telefone2</ion-label>\n    <ion-input [(ngModel)]="tel2" type="tel" placeholder="Telefone">\n    </ion-input>\n  </ion-item>\n\n  <button ion-button block (click)="criarPerfil(nome, sobrenome, dataNascimento, rg, cpf, tel1, tel2)">\n    Salvar\n  </button>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\perfil-cadastro\perfil-cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
], PerfilCadastroPage);

//# sourceMappingURL=perfil-cadastro.js.map

/***/ })

});
//# sourceMappingURL=17.js.map