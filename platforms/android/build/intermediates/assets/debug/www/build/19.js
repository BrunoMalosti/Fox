webpackJsonp([19],{

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListPageModule", function() { return EventListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_list__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventListPageModule = (function () {
    function EventListPageModule() {
    }
    return EventListPageModule;
}());
EventListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__event_list__["a" /* EventListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_list__["a" /* EventListPage */]),
        ],
    })
], EventListPageModule);

//# sourceMappingURL=event-list.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventListPage = (function () {
    function EventListPage(navCtrl, eventProvider, profileProvider) {
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
        this.profileProvider = profileProvider;
    }
    EventListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.eventProvider.getEventList().on('value', function (eventListSnapshot) {
            _this.eventList = [];
            eventListSnapshot.forEach(function (snap) {
                _this.eventList.push({
                    id: snap.key,
                    Nome: snap.val().Nome,
                    Preco: snap.val().Preco,
                    Data_inicial: snap.val().Data_inicial,
                    Data_final: snap.val().Data_final,
                    ID_Dono: snap.val().ID_Dono,
                });
                return false;
            });
        });
    };
    EventListPage.prototype.goToEventDetail = function (eventId) {
        this.navCtrl.push('AnuncioDetalhesPage', { 'eventId': eventId });
    };
    return EventListPage;
}());
EventListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event-list',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\event-list\event-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Anúncios</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let event of eventList" (click)="goToEventDetail(event.id)">\n\n      <h2>{{event?.Nome}}</h2>\n\n      <p>Preço: <strong>${{event?.Preco}}</strong></p>\n\n      <p>Data inicial: <strong>{{event?.Data_inicial}}</strong></p>\n\n      <p>Date final: <strong>{{event?.Data_final}}</strong></p>\n\n      <p>ID do dono: <strong>{{event?.ID_Dono}}</strong></p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\event-list\event-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */]])
], EventListPage);

//# sourceMappingURL=event-list.js.map

/***/ })

});
//# sourceMappingURL=19.js.map