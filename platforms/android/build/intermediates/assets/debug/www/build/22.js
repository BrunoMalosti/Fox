webpackJsonp([22],{

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioDetalhesPageModule", function() { return AnuncioDetalhesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anuncio_detalhes__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AnuncioDetalhesPageModule = (function () {
    function AnuncioDetalhesPageModule() {
    }
    return AnuncioDetalhesPageModule;
}());
AnuncioDetalhesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__anuncio_detalhes__["a" /* AnuncioDetalhesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__anuncio_detalhes__["a" /* AnuncioDetalhesPage */]),
        ],
    })
], AnuncioDetalhesPageModule);

//# sourceMappingURL=anuncio-detalhes.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnuncioDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnuncioDetalhesPage = (function () {
    function AnuncioDetalhesPage(navCtrl, navParams, eventProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.currentEvent = {};
        this.currentEvent = this.eventProvider.getEventDetail;
    }
    AnuncioDetalhesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.eventProvider.getEventDetail(this.navParams.get('eventId')).on('value', function (eventSnapshot) {
            _this.currentEvent = eventSnapshot.val();
            _this.currentEvent.id = eventSnapshot.key;
        });
    };
    return AnuncioDetalhesPage;
}());
AnuncioDetalhesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        segment: 'anuncio-detalhes/:eventId'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-anuncio-detalhes',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\anuncio-detalhes\anuncio-detalhes.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{currentEvent?.Nome}}</ion-title>\n\n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content>\n\n    \n      <ion-card>\n        <ion-card-content>\n          <p>Especificações: <strong>{{currentEvent?.Especificacoes}}</strong></p>\n          <p>Preço: <strong>${{currentEvent?.Preco}}</strong></p>\n          <p>Endereço: <strong>{{currentEvent?.Endereco}}</strong></p>\n          <p>Largura: <strong>{{currentEvent?.Largura}}</strong></p>\n          <p>Comprimento: <strong>{{currentEvent?.Comprimento}}</strong></p>\n          <p>Date inicial: <strong>{{currentEvent?.Data_inicial}}</strong></p>\n          <p>Date final: <strong>{{currentEvent?.Data_final}}</strong></p>\n          <p>Número de vagas: <strong>{{currentEvent?.Numero_de_vagas}}</strong></p>\n        </ion-card-content>\n      </ion-card>\n    </ion-content>\n\n  \n '/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\anuncio-detalhes\anuncio-detalhes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], AnuncioDetalhesPage);

//# sourceMappingURL=anuncio-detalhes.js.map

/***/ })

});
//# sourceMappingURL=22.js.map