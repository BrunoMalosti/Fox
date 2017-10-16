webpackJsonp([13],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Termoservico1PageModule", function() { return Termoservico1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__termoservico1__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Termoservico1PageModule = (function () {
    function Termoservico1PageModule() {
    }
    return Termoservico1PageModule;
}());
Termoservico1PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__termoservico1__["a" /* Termoservico1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__termoservico1__["a" /* Termoservico1Page */]),
        ],
    })
], Termoservico1PageModule);

//# sourceMappingURL=termoservico1.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Termoservico1Page; });
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
 * Generated class for the Termoservico1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Termoservico1Page = (function () {
    function Termoservico1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Termoservico1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Termoservico1Page');
    };
    return Termoservico1Page;
}());
Termoservico1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-termoservico1',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\termoservico1\termoservico1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Principais Definições</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-content>\n\n          <div align="justify">\n\n            “Taxa de Câmbio Ajustada” significa a Taxa de Câmbio Base acrescida da taxa de 3% cobrada pela FoxStop por determinadas transações internacionais.<br /><br />\n\n            </div>\n\n            <div align="justify">\n\n            “Taxa de Câmbio Base” significa uma taxa geral do sistema utilizada pela FoxStop Payments se a Moeda Corrente da Reserva for diferente da Moeda Corrente do País da Acomodação. <br /><br />\n\n            Não está inclusa aí qualquer taxa por margem de lucro por parte da FoxStop Payments. A FoxStop Payments estabelece a Taxa de Câmbio Base utilizando dados de um ou mais terceiros como a OANDA (www.oanda.com).<br /><br />\n\n            “Moeda Corrente da Reserva” Significa a moeda com a qual um Locatario paga por sua reserva. \n\n            </div>\n\n            <br />\n\n            <br />\n\n            <div align="justify">\n\n            O Locatario poderá ver (e, em alguns casos, selecionar) sua Moeda Corrente da Reserva ao fazer o check-out. \n\n           </div>\n\n            <br />\n\n            <br />\n\n            <div align="justify">\n\n            A Moeda Corrente da Reserva utilizada para uma reserva pode ser diferente da Moeda Corrente relevante do País da Acomodação.<br /><br />\n\n            “Moeda Corrente do País da Acomodação” significa a moeda padrão associada ao país onde a acomodação está localizada. Por exemplo, a Moeda Corrente do País da Acomodação para uma Acomodação localizada em Nova York seria o dólar norte-americano, e a Moeda Corrente do País da Acomodação para uma Acomodação localizada no Japão seria o iene japonês.\n\n            </div>\n\n            <br />\n\n            <br />\n\n            <div align="justify">\n\n            “Pagamento” significa um pagamento feito pela FoxStop Payments para um Membro pelos serviços (como Taxas de Acomodação e Taxas de Serviços do CoLocador) prestados junto à Plataforma FoxStop.<br />\n\n            </div>\n\n            <br />\n\n            <div align="justify">\n\n            “Forma de Pagamento” significa o instrumento financeiro que você adicionou à sua Conta FoxStop, como cartão de crédito, cartão de débito, ou conta do PayPal.<br />\n\n            <br />\n\n            </div>\n\n          <div align="justify">\n\n            “Forma de Pagamento” significa o instrumento financeiro que você adicionou à sua Conta FoxStop, como uma conta do PayPal, depósito direto, um cartão pré-pago, ou um cartão de débito (se disponível).<br /><br />\n\n          </div>\n\n            \n\n        </ion-card-content>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\termoservico1\termoservico1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Termoservico1Page);

//# sourceMappingURL=termoservico1.js.map

/***/ })

});
//# sourceMappingURL=13.js.map