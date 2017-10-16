webpackJsonp([18],{

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusanunciosPageModule", function() { return MeusanunciosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meusanuncios__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MeusanunciosPageModule = (function () {
    function MeusanunciosPageModule() {
    }
    return MeusanunciosPageModule;
}());
MeusanunciosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__meusanuncios__["a" /* MeusanunciosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meusanuncios__["a" /* MeusanunciosPage */]),
        ],
    })
], MeusanunciosPageModule);

//# sourceMappingURL=meusanuncios.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusanunciosPage; });
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




/**
 * Generated class for the MeusanunciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeusanunciosPage = (function () {
    function MeusanunciosPage(navCtrl, eventProvider, navParams, profileProvider) {
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
        this.navParams = navParams;
        this.profileProvider = profileProvider;
    }
    /*
    var ref = firebase.database().ref("dinosaurs");
    ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
      console.log(snapshot.key);
    });
    */
    MeusanunciosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (true) {
            this.eventProvider.getMeusAnuncios().on('value', function (MeusanunciosSnapshot) {
                _this.Meusanuncios = [];
                MeusanunciosSnapshot.forEach(function (snap) {
                    _this.Meusanuncios.push({
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
        }
    };
    MeusanunciosPage.prototype.goToEventDetail = function (eventId) {
        this.navCtrl.push('EditarAnuncioPage', { 'eventId': eventId });
    };
    return MeusanunciosPage;
}());
MeusanunciosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-meusanuncios',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\meusanuncios\meusanuncios.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Meus Anúncios</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let event of Meusanuncios" (click)="goToEventDetail(event.id)">\n      <h2>{{event?.Nome}}</h2>\n      <p>Preço: <strong>${{event?.Preco}}</strong></p>\n      <p>Data inicial: <strong>{{event?.Data_inicial}}</strong></p>\n      <p>Date final: <strong>{{event?.Data_final}}</strong></p>\n      <p>ID do dono: <strong>{{event?.ID_Dono}}</strong></p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\meusanuncios\meusanuncios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */]])
], MeusanunciosPage);

//# sourceMappingURL=meusanuncios.js.map

/***/ })

});
//# sourceMappingURL=18.js.map