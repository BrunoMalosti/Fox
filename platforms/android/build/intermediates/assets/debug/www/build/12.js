webpackJsonp([12],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Termoservico2PageModule", function() { return Termoservico2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__termoservico2__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Termoservico2PageModule = (function () {
    function Termoservico2PageModule() {
    }
    return Termoservico2PageModule;
}());
Termoservico2PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__termoservico2__["a" /* Termoservico2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__termoservico2__["a" /* Termoservico2Page */]),
        ],
    })
], Termoservico2PageModule);

//# sourceMappingURL=termoservico2.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Termoservico2Page; });
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
 * Generated class for the Termoservico2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Termoservico2Page = (function () {
    function Termoservico2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Termoservico2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Termoservico2Page');
    };
    return Termoservico2Page;
}());
Termoservico2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-termoservico2',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\termoservico2\termoservico2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Formas de pagamento</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-content>\n\n           <div align="justify">\n\n            Ao adicionar uma Forma de Pagamento à sua Conta FoxStop, pediremos que você forneça informações comuns de cobrança como nome, endereço de cobrança e informações do instrumento financeiro ou à FoxStop Payments ou a terceiro(s) processador(es) de pagamento. Você deve fornecer informações atuais, precisas e completas ao adicionar uma Forma de Pagamento, e é sua obrigação manter sua Forma de Pagamento sempre atualizada. As informações solicitadas para as Formas de Pagamento incluirão:\n\n            para depósito direto, seu endereço, nome do titular da conta, tipo de conta, número de identificação do banco, e número da conta;\n\n            para PayPal, seu endereço, endereço de e-mail e sua moeda corrente; e\n\n            para cartões de débito pré-pago Payoneer, seu endereço, e suas informações de conta Payoneer. <br /><br />\n\n           </div>\n\n             <div align="justify">\n\n             Quando você adiciona ou utiliza uma nova Forma de Pagamento, a FoxStop Payments pode verificar a Forma de Pagamento através da autorização de um valor nominal inferior a US$ 1 (um dólar), ou um valor equivalente na moeda local da Forma de Pagamento (por exemplo, um euro ou uma libra esterlina). Para as demais verificações, podemos também (i) autorizar sua Forma de Pagamento para um ou dois valores nominais, sendo que cada um deve ser de, no máximo dois dólares (US$ 2) ou uma soma semelhante na moeda local da Forma de Pagamento (por exemplo, dois euros ou duas libras esterlinas), e pedir que você confirme esses valores, ou (ii) pedir que você envie um demonstrativo de faturamento. Se você adicionar uma Forma de Pagamento durante o check-out, nós automaticamente salvaremos a Forma de Pagamento na sua Conta FoxStop para que possa ser utilizada para transações futuras.<br /><br />\n\n            </div>\n\n            <div align="justify">\n\n            Para confirmar sua Forma de Pagamento, a FoxStop Payments pode enviar a você um ou mais pagamentos de valores nominais para sua Forma de Pagamento. Nós podemos, e detemos o direito de, iniciar reembolsos desses valores da sua Forma de Pagamento.<br /><br />\n\n             Observe que as Formas de Pagamento podem envolver o uso de serviços de pagamento de terceiros prestadores de serviços. Esses prestadores de serviços podem cobrar taxas adicionais ao processar os pagamentos relacionados aos Serviços de Pagamento (incluindo deduzir taxas do valor de Pagamento), e a FoxStop Payments não é responsável por quaisquer taxas e renuncia a qualquer responsabilidade desta natureza. Sua Forma de Pagamento também pode estar sujeita a termos e condições adicionais impostas pelo terceiro prestador de serviços de pagamento; pedimos que você revise estes termos e condições antes de utilizar sua Forma de Pagamento.<br /><br />\n\n           </div>\n\n            <div align="justify">\n\n             Você autoriza a FoxStop Payments a armazenar as informações de sua Forma de Pagamento e cobrar sua Forma de Pagamento conforme descrito nesses Termos de Pagamento. Se as informações de conta da sua Forma de Pagamento forem alteradas (por exemplo, número da conta, número de identificação do banco, data de expiração) devido à reemissão ou por alguma outra razão, podemos adquirir essas informações de nosso parceiro de serviços financeiros ou de seu banco e atualizar sua Forma de Pagamento no arquivo em sua Conta FoxStop.<br /><br /></div>\n\n           <div align="justify">\n\n            Você é o único responsável pela precisão e integridade das informações de sua Forma de Pagamento. A FoxStop Payments não é responsável por qualquer prejuízo sofrido por você devido a informações incorretas da Forma de Pagamento fornecida por você.<br /><br />\n\n            </div>\n\n            \n\n        </ion-card-content>\n\n      </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\termoservico2\termoservico2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Termoservico2Page);

//# sourceMappingURL=termoservico2.js.map

/***/ })

});
//# sourceMappingURL=12.js.map