webpackJsonp([14],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermosPageModule", function() { return TermosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__termos__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermosPageModule = (function () {
    function TermosPageModule() {
    }
    return TermosPageModule;
}());
TermosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__termos__["a" /* TermosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__termos__["a" /* TermosPage */]),
        ],
    })
], TermosPageModule);

//# sourceMappingURL=termos.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
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
 * Generated class for the TermosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermosPage = (function () {
    function TermosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermosPage');
    };
    TermosPage.prototype.goToTermosServico1 = function () {
        this.navCtrl.push('Termoservico1Page');
    };
    TermosPage.prototype.goToTermosServico2 = function () {
        this.navCtrl.push('Termoservico2Page');
    };
    TermosPage.prototype.goToTermosServico3 = function () {
        this.navCtrl.push('Termoservico3Page');
    };
    TermosPage.prototype.goToTermosServico4 = function () {
        this.navCtrl.push('Termoservico4Page');
    };
    TermosPage.prototype.goToTermosServico5 = function () {
        this.navCtrl.push('Termoservico5Page');
    };
    TermosPage.prototype.goToTermosServico6 = function () {
        this.navCtrl.push('Termoservico6Page');
    };
    TermosPage.prototype.goToTermosServico7 = function () {
        this.navCtrl.push('Termoservico7Page');
    };
    TermosPage.prototype.goToTermosLocador1 = function () {
        this.navCtrl.push('Termoslocador1Page');
    };
    TermosPage.prototype.goToTermosLocador2 = function () {
        this.navCtrl.push('Termoslocador2Page');
    };
    TermosPage.prototype.goToTermosLocador3 = function () {
        this.navCtrl.push('Termoslocador3Page');
    };
    TermosPage.prototype.goToPoliticas1 = function () {
        this.navCtrl.push('Politicas1Page');
    };
    return TermosPage;
}());
TermosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-termos',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\termos\termos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Termos e Condições</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3> Termos de serviço</h3>\n\n\n\n    <button ion-button block color="secondary" (click)="goToTermosServico1()">\n\n        Principais definições\n\n    </button>\n\n    <button ion-button block color="secondary" (click)="goToTermosServico2()">\n\n        Formas de pagamento\n\n    </button>\n\n    <button ion-button block color="secondary" (click)="goToTermosServico3()">\n\n        Feedback\n\n    </button>\n\n    <button ion-button block color="secondary" (click)="goToTermosServico4()">\n\n        Escopo dos serviços da FoxStop\n\n    </button>\n\n    <button ion-button block color="secondary" (click)="goToTermosServico5()">\n\n        Classificações e comentários\n\n    </button>\n\n    <button ion-button block color="secondary" (click)="goToTermosServico6()">\n\n        Atividades proibidas\n\n    </button>\n\n    <button ion-button block color="secondary" (click)="goToTermosServico7()">\n\n        Alterações de termos de pagamento\n\n    </button>\n\n\n\n\n\n    <h3><br/>Termos do locador</h3>\n\n    <button ion-button block color="secondary" (click)="goToTermosLocador1()">\n\n        Renúncia e responsabilidade\n\n    </button>\n\n    <button ion-button block color="secondary" (click)="goToTermosLocador2()">\n\n        Modicações dos termos de garantia\n\n    </button>\n\n    <button ion-button block color="secondary" (click)="goToTermosLocador3()">\n\n        Garantia ao anfitrião\n\n    </button>\n\n\n\n    <h3><br/>Política</h3>\n\n    <button ion-button block color="secondary" (click)="goToPoliticas1()">\n\n        Política de não discriminação\n\n    </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\termos\termos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TermosPage);

//# sourceMappingURL=termos.js.map

/***/ })

});
//# sourceMappingURL=14.js.map