webpackJsonp([23],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventProvider = (function () {
    function EventProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.eventListRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database()
                    .ref("/ListaDeVagas");
            }
        });
    }
    EventProvider.prototype.createEvent = function (eventName, eventEspecificacoes, eventPrice, eventEndereco, eventLargura, eventComprimento, eventDate, eventDate1, eventDate2) {
        return this.eventListRef.push({
            Nome: eventName,
            Especificacoes: eventEspecificacoes,
            Preco: eventPrice,
            Endereco: eventEndereco,
            Largura: eventLargura,
            Comprimento: eventComprimento,
            Data_inicial: eventDate,
            Data_final: eventDate1,
            Numero_de_vagas: eventDate2,
            ID_Dono: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid
        });
    };
    EventProvider.prototype.updateVagaName = function (Name, eventId) {
        return this.eventListRef.child(eventId).update({ Nome: Name });
    };
    EventProvider.prototype.updateVagaEspecifica = function (Especifica, eventId) {
        return this.eventListRef.child(eventId).update({ Especificacoes: Especifica });
    };
    EventProvider.prototype.updateVagaPreco = function (Preco, eventId) {
        return this.eventListRef.child(eventId).update({ Preco: Preco });
    };
    EventProvider.prototype.updateVagaEndereco = function (Endereco, eventId) {
        return this.eventListRef.child(eventId).update({ Endereco: Endereco });
    };
    EventProvider.prototype.updateVagaLargura = function (Largura, eventId) {
        return this.eventListRef.child(eventId).update({ Largura: Largura });
    };
    EventProvider.prototype.updateVagaComprimento = function (Comprimento, eventId) {
        return this.eventListRef.child(eventId).update({ Comprimento: Comprimento });
    };
    EventProvider.prototype.updateVagaDataInicial = function (DataInicial, eventId) {
        return this.eventListRef.child(eventId).update({ Data_inicial: DataInicial });
    };
    EventProvider.prototype.updateVagaDataFinal = function (DataFinal, eventId) {
        return this.eventListRef.child(eventId).update({ Data_final: DataFinal });
    };
    EventProvider.prototype.updateVagaNumeroVagas = function (Numero_de_vagas, eventId) {
        return this.eventListRef.child(eventId).update({ Numero_de_vagas: Numero_de_vagas });
    };
    EventProvider.prototype.getMeusAnuncios = function () {
        var query = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/ListaDeVagas").orderByChild('ID_Dono').equalTo(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
        return query;
    };
    EventProvider.prototype.getEventList = function () {
        var query = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/ListaDeVagas"); //.orderByChild('ID_Dono').equalTo(firebase.auth().currentUser.uid);
        return query;
    };
    // USANDO PARAMETRO, uso futuro!
    /*
    getEventList2(eventPrice: number): firebase.database.Query {
      
      var query = firebase.database().ref('eventList').orderByChild('price').equalTo(eventPrice);
  
          return query;
    }
     */
    EventProvider.prototype.getEventDetail = function (eventId) {
        return this.eventListRef.child(eventId);
    };
    EventProvider.prototype.addGuest = function (guestName, eventId, eventPrice) {
        return this.eventListRef.child(eventId + "/guestList").push({ guestName: guestName });
    };
    return EventProvider;
}());
EventProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EventProvider);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http } from '@angular/http';


var ProfileProvider = (function () {
    function ProfileProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + user.uid);
            }
        });
    }
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider.prototype.getNome = function () {
        return this.userProfile.key.valueOf.arguments.Nome;
    };
    ProfileProvider.prototype.updateName = function (Nome, Sobrenome) {
        return this.userProfile.update({ Nome: Nome, Sobrenome: Sobrenome });
    };
    ProfileProvider.prototype.updateNiver = function (Nascimento) {
        return this.userProfile.update({ Nascimento: Nascimento });
    };
    ProfileProvider.prototype.updateCPF = function (CPF) {
        return this.userProfile.update({ CPF: CPF });
    };
    ProfileProvider.prototype.updateRG = function (RG) {
        return this.userProfile.update({ RG: RG });
    };
    ProfileProvider.prototype.updateTEL1 = function (Tel1) {
        return this.userProfile.update({ Tel1: Tel1 });
    };
    ProfileProvider.prototype.updateTEL2 = function (Tel2) {
        return this.userProfile.update({ Tel2: Tel2 });
    };
    ProfileProvider.prototype.pushComent = function (coment, nota) {
        return this.userProfile.update({ coment: coment, nota: nota });
    };
    ProfileProvider.prototype.updateEmail = function (newEmail, password) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.EmailAuthProvider
            .credential(this.currentUser.email, password);
        return this.currentUser.reauthenticateWithCredential(credential)
            .then(function (user) {
            _this.currentUser.updateEmail(newEmail).then(function (user) {
                _this.userProfile.update({ email: newEmail });
            });
        }).catch(function (error) {
            console.error(error);
        });
    };
    ProfileProvider.prototype.updatePassword = function (newPassword, oldPassword) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.EmailAuthProvider
            .credential(this.currentUser.email, oldPassword);
        return this.currentUser.reauthenticateWithCredential(credential)
            .then(function (user) {
            _this.currentUser.updatePassword(newPassword).then(function (user) {
                console.log("Password Changed");
            });
        }).catch(function (error) {
            console.error(error);
        });
    };
    ProfileProvider.prototype.criarPerfil = function (nome, sobrenome, dataNascimento, rg, cpf, tel1, tel2) {
        return this.userProfile.update({
            Nome: nome,
            Sobrenome: sobrenome,
            Nascimento: dataNascimento,
            RG: rg,
            CPF: cpf,
            Tel1: tel1,
            Tel2: tel2
        });
    };
    return ProfileProvider;
}());
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProfileProvider);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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




var HomePage = (function () {
    function HomePage(navCtrl, eventProvider, profileProvider) {
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
        this.profileProvider = profileProvider;
    }
    HomePage.prototype.goToProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    HomePage.prototype.goToCreate = function () {
        this.navCtrl.push('EventCreatePage');
    };
    /*   goToList(): void {
        this.navCtrl.push('EventListPage')
      } */
    HomePage.prototype.goToTermos = function () {
        this.navCtrl.push('TermosPage');
    };
    HomePage.prototype.goToMeusAnuncios = function () {
        this.navCtrl.push('MeusanunciosPage');
    };
    HomePage.prototype.goToPerfilPublico = function () {
        this.navCtrl.push('PerfilPublicoPage');
    };
    HomePage.prototype.ionViewDidLoad = function () {
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
    HomePage.prototype.goToEventDetail = function (eventId) {
        this.navCtrl.push('AnuncioDetalhesPage', { 'eventId': eventId });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons left>\n\n          <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    <!-- <ion-title center>Home Page</ion-title> -->\n\n    <ion-searchbar></ion-searchbar>\n\n    <ion-buttons end>\n\n\n\n\n\n\n\n<button ion-button icon-only (click)="goToProfile()">\n\n  <ion-icon name="person"></ion-icon>\n\n  Perfil\n\n</button>\n\n    </ion-buttons>  \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding> <ion-list>\n\n    <ion-item *ngFor="let event of eventList" (click)="goToEventDetail(event.id)">\n\n      <h2>{{event?.Nome}}</h2>\n\n      <p>Preço: <strong>${{event?.Preco}}</strong></p>\n\n      <p>Data inicial: <strong>{{event?.Data_inicial}}</strong></p>\n\n      <p>Date final: <strong>{{event?.Data_final}}</strong></p>\n\n\n\n      <p></p>\n\n      <p>ID do dono: <strong>{{event?.ID_Dono}}</strong></p>\n\n    </ion-item>\n\n  </ion-list></ion-content>\n\n\n\n\n\n\n\n\n\n<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n         </ion-header>\n\n    <ion-content padding>\n\n      <ion-list> \n\n        <button ion-button block color="primary" (click)="goToCreate()">\n\n          Cadastrar anúncio\n\n        </button>\n\n       <!-- <button ion-button block color="primary" (click)="goToList()">\n\n          Veja os anúncios\n\n        </button> -->\n\n        <button ion-button block color="primary" (click)="goToMeusAnuncios()"> \n\n          Meus Anúncios\n\n        </button>\n\n        <button ion-button block color="primary" (click)="goToList()">\n\n          Meus favoritos\n\n        </button>\n\n        <button ion-button block color="primary" (click)="goToTermos()">\n\n          Termos e condições\n\n        </button>\n\n\n\n        <button ion-button block color="primary" (click)="goToPerfilPublico()">\n\n            Perfil Publico\n\n          </button>\n\n\n\n     </ion-list>\n\n    </ion-content>\n\n    </ion-menu>\n\n <ion-nav [root]="rootPage" #content></ion-nav>\n\n\n\n  '/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/anuncio-detalhes/anuncio-detalhes.module": [
		418,
		22
	],
	"../pages/editar-anuncio/editar-anuncio.module": [
		419,
		21
	],
	"../pages/event-create/event-create.module": [
		420,
		20
	],
	"../pages/event-list/event-list.module": [
		421,
		19
	],
	"../pages/login/login.module": [
		422,
		2
	],
	"../pages/meusanuncios/meusanuncios.module": [
		423,
		18
	],
	"../pages/perfil-cadastro/perfil-cadastro.module": [
		424,
		17
	],
	"../pages/perfil-publico/perfil-publico.module": [
		425,
		3
	],
	"../pages/politicas1/politicas1.module": [
		426,
		16
	],
	"../pages/profile/profile.module": [
		427,
		15
	],
	"../pages/reset-password/reset-password.module": [
		428,
		1
	],
	"../pages/signup/signup.module": [
		429,
		0
	],
	"../pages/termos/termos.module": [
		430,
		14
	],
	"../pages/termoservico1/termoservico1.module": [
		431,
		13
	],
	"../pages/termoservico2/termoservico2.module": [
		432,
		12
	],
	"../pages/termoservico3/termoservico3.module": [
		433,
		11
	],
	"../pages/termoservico4/termoservico4.module": [
		434,
		10
	],
	"../pages/termoservico5/termoservico5.module": [
		435,
		9
	],
	"../pages/termoservico6/termoservico6.module": [
		436,
		8
	],
	"../pages/termoservico7/termoservico7.module": [
		437,
		7
	],
	"../pages/termoslocador1/termoslocador1.module": [
		438,
		6
	],
	"../pages/termoslocador2/termoslocador2.module": [
		439,
		5
	],
	"../pages/termoslocador3/termoslocador3.module": [
		440,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 198;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { Http } from '@angular/http';


var AuthProvider = (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + newUser.uid + "/email")
                .set(email);
        }).catch(function (error) { return console.error(error); });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + userId).off();
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signOut();
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(300);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_event_event__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_profile_profile__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(417);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CameraMock = (function (_super) {
    __extends(CameraMock, _super);
    function CameraMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CameraMock.prototype.getPicture = function (options) {
        return new Promise(function (resolve, reject) {
            resolve("TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIG\n      J1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3a\n      GljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ug\n      b2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmV\n      yYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2\n      YgYW55IGNhcm5hbCBwbGVhc3VyZS4=");
        });
    };
    return CameraMock;
}(__WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]));
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/anuncio-detalhes/anuncio-detalhes.module#AnuncioDetalhesPageModule', name: 'AnuncioDetalhesPage', segment: 'anuncio-detalhes/:eventId', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editar-anuncio/editar-anuncio.module#EditarAnuncioPageModule', name: 'EditarAnuncioPage', segment: 'event-detail/:eventId', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-create/event-create.module#EventCreatePageModule', name: 'EventCreatePage', segment: 'event-create', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-list/event-list.module#EventListPageModule', name: 'EventListPage', segment: 'event-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/meusanuncios/meusanuncios.module#MeusanunciosPageModule', name: 'MeusanunciosPage', segment: 'meusanuncios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil-cadastro/perfil-cadastro.module#PerfilCadastroPageModule', name: 'PerfilCadastroPage', segment: 'perfil-cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil-publico/perfil-publico.module#PerfilPublicoPageModule', name: 'PerfilPublicoPage', segment: 'perfil-publico', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/politicas1/politicas1.module#Politicas1PageModule', name: 'Politicas1Page', segment: 'politicas1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termos/termos.module#TermosPageModule', name: 'TermosPage', segment: 'termos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termoservico1/termoservico1.module#Termoservico1PageModule', name: 'Termoservico1Page', segment: 'termoservico1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termoservico2/termoservico2.module#Termoservico2PageModule', name: 'Termoservico2Page', segment: 'termoservico2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termoservico3/termoservico3.module#Termoservico3PageModule', name: 'Termoservico3Page', segment: 'termoservico3', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termoservico4/termoservico4.module#Termoservico4PageModule', name: 'Termoservico4Page', segment: 'termoservico4', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termoservico5/termoservico5.module#Termoservico5PageModule', name: 'Termoservico5Page', segment: 'termoservico5', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termoservico6/termoservico6.module#Termoservico6PageModule', name: 'Termoservico6Page', segment: 'termoservico6', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termoservico7/termoservico7.module#Termoservico7PageModule', name: 'Termoservico7Page', segment: 'termoservico7', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termoslocador1/termoslocador1.module#Termoslocador1PageModule', name: 'Termoslocador1Page', segment: 'termoslocador1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termoslocador2/termoslocador2.module#Termoslocador2PageModule', name: 'Termoslocador2Page', segment: 'termoslocador2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termoslocador3/termoslocador3.module#Termoslocador3PageModule', name: 'Termoslocador3Page', segment: 'termoslocador3', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_profile_profile__["a" /* ProfileProvider */],
            CameraMock
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.initializeApp({
            apiKey: "AIzaSyAYHzoXVe2dzjVAlBAiQ-aXnQSqXaCgXGE",
            authDomain: "foxstop2017.firebaseapp.com",
            databaseURL: "https://foxstop2017.firebaseio.com",
            projectId: "foxstop2017",
            storageBucket: "foxstop2017.appspot.com",
            messagingSenderId: "258431677620"
        });
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = 'LoginPage';
                unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                unsubscribe();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.js.map