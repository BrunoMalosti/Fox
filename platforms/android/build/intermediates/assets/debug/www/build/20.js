webpackJsonp([20],{

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCreatePageModule", function() { return EventCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_create__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventCreatePageModule = (function () {
    function EventCreatePageModule() {
    }
    return EventCreatePageModule;
}());
EventCreatePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__event_create__["a" /* EventCreatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_create__["a" /* EventCreatePage */]),
        ],
    })
], EventCreatePageModule);

//# sourceMappingURL=event-create.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCreatePage; });
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



var EventCreatePage = (function () {
    function EventCreatePage(navCtrl, eventProvider) {
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
    }
    EventCreatePage.prototype.createEvent = function (eventName, eventEspecificacoes, eventPrice, eventEndereco, eventLargura, eventComprimento, eventDate, eventDate1, eventDate2) {
        var _this = this;
        this.eventProvider.createEvent(eventName, eventEspecificacoes, eventPrice, eventEndereco, eventLargura, eventComprimento, eventDate, eventDate1, eventDate2)
            .then(function (newEvent) {
            _this.navCtrl.pop();
        });
    };
    return EventCreatePage;
}());
EventCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event-create',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\event-create\event-create.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Cadastro de Vaga</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <h6>Titulo da vaga:</h6>\n\n  <ion-item>\n\n    <ion-input [(ngModel)]="eventName" type="text" placeholder="Nome para seu anúncio.">\n\n    </ion-input>\n\n  </ion-item>\n\n  <h6>Especificações sobre a vaga:</h6>\n\n  <ion-item>\n\n    <ion-input [(ngModel)]="eventEspecificacoes" type="text" placeholder="A vaga é coberta? Protegida?">\n\n    </ion-input>\n\n  </ion-item>\n\n  <h6>Preço:</h6>\n\n  <ion-item>\n\n    <ion-input [(ngModel)]="eventPrice" type="number" placeholder="Por quanto quer anúnciar?">\n\n    </ion-input>\n\n  </ion-item>\n\n  <h6>Endereço</h6>\n\n  <ion-item>\n\n    <ion-input [(ngModel)]="eventEndereco" type="text" placeholder="Onde a vaga se encontra.">\n\n    </ion-input>\n\n  </ion-item>\n\n  <h6>Proporções</h6>\n\n  <ion-item>\n\n    <ion-input [(ngModel)]="eventLargura" type="number" placeholder="Largura da vaga">\n\n    </ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input [(ngModel)]="eventComprimento" type="number" placeholder="Comprimento da vaga">\n\n    </ion-input>\n\n  </ion-item>\n\n  <h6>Disponibilidade da vaga:</h6>\n\n  <ion-item>\n\n    <ion-label>Disponível entre:</ion-label>\n\n    <ion-datetime displayFormat="D MMM, YY" pickerFormat="DD MMM YYYY" [(ngModel)]="eventDate">\n\n    </ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Até:</ion-label>\n\n    <ion-datetime displayFormat="D MMM, YY" pickerFormat="DD MMM YYYY" [(ngModel)]="eventDate1">\n\n    </ion-datetime>\n\n  </ion-item>\n\n  <h6>Número de vagas:</h6>\n\n  <ion-item>\n\n    <ion-input [(ngModel)]="eventDate2" type="number" placeholder="Quantas vagas?">\n\n    </ion-input>\n\n  </ion-item>\n\n  <button ion-button block (click)="createEvent(eventName, eventEspecificacoes, eventPrice, eventEndereco, eventLargura, eventComprimento, eventDate, eventDate1, eventDate2)">\n\n    Cadastrar Vaga\n\n    </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\event-create\event-create.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], EventCreatePage);

//# sourceMappingURL=event-create.js.map

/***/ })

});
//# sourceMappingURL=20.js.map