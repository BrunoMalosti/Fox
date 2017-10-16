webpackJsonp([21],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarAnuncioPageModule", function() { return EditarAnuncioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar_anuncio__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditarAnuncioPageModule = (function () {
    function EditarAnuncioPageModule() {
    }
    return EditarAnuncioPageModule;
}());
EditarAnuncioPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__editar_anuncio__["a" /* EditarAnuncioPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editar_anuncio__["a" /* EditarAnuncioPage */]),
        ],
    })
], EditarAnuncioPageModule);

//# sourceMappingURL=editar-anuncio.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarAnuncioPage; });
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



var EditarAnuncioPage = (function () {
    function EditarAnuncioPage(navCtrl, alertCtrl, navParams, eventProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.currentEvent = {};
        this.currentEvent = this.eventProvider.getEventDetail;
    }
    EditarAnuncioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.eventProvider.getEventDetail(this.navParams.get('eventId')).on('value', function (eventSnapshot) {
            _this.currentEvent = eventSnapshot.val();
            _this.currentEvent.id = eventSnapshot.key;
        });
    };
    /*   goToEditarAnuncio(): void {
        this.navCtrl.push('EditarAnuncioPage')
      } */
    EditarAnuncioPage.prototype.updateVagaName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Título do anúncio",
            inputs: [
                {
                    name: 'Nome',
                    placeholder: 'Título do anúncio',
                    value: this.currentEvent.Nome //
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.eventProvider.updateVagaName(data.Nome, _this.currentEvent.id); //eventProvider
                    }
                }
            ]
        });
        alert.present();
    };
    EditarAnuncioPage.prototype.updateVagaEspecifica = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Especificações do anúncio",
            inputs: [
                {
                    name: 'Especificacoes',
                    placeholder: 'Especificações do anúncio',
                    value: this.currentEvent.Especificacoes
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.eventProvider.updateVagaEspecifica(data.Especificacoes, _this.currentEvent.id);
                    }
                }
            ]
        });
        alert.present();
    };
    EditarAnuncioPage.prototype.updateVagaPreco = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Preço do anúncio",
            inputs: [
                {
                    name: 'Preco',
                    placeholder: 'Preço do anúncio',
                    value: this.currentEvent.Preco
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.eventProvider.updateVagaPreco(data.Preco, _this.currentEvent.id);
                    }
                }
            ]
        });
        alert.present();
    };
    EditarAnuncioPage.prototype.updateVagaEndereco = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Endereço da vaga",
            inputs: [
                {
                    name: 'Endereco',
                    placeholder: 'Endereço do anúncio',
                    value: this.currentEvent.Endereco
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.eventProvider.updateVagaEndereco(data.Endereco, _this.currentEvent.id);
                    }
                }
            ]
        });
        alert.present();
    };
    EditarAnuncioPage.prototype.updateVagaLargura = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Largura da vaga",
            inputs: [
                {
                    name: 'Largura',
                    placeholder: 'Largura da vaga',
                    value: this.currentEvent.Largura
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.eventProvider.updateVagaLargura(data.Largura, _this.currentEvent.id);
                    }
                }
            ]
        });
        alert.present();
    };
    EditarAnuncioPage.prototype.updateVagaComprimento = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Comprimento da vaga",
            inputs: [
                {
                    name: 'Comprimento',
                    placeholder: 'Comprimento da vaga',
                    value: this.currentEvent.Comprimento
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.eventProvider.updateVagaComprimento(data.Comprimento, _this.currentEvent.id);
                    }
                }
            ]
        });
        alert.present();
    };
    EditarAnuncioPage.prototype.updateVagaDataInicial = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Data Inicial",
            inputs: [
                {
                    name: 'Data_inicial',
                    placeholder: 'Data Inicial',
                    value: this.currentEvent.Data_inicial // FALTOU COLOCAR CALENDARIO
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.eventProvider.updateVagaDataInicial(data.Data_inicial, _this.currentEvent.id);
                    }
                }
            ]
        });
        alert.present();
    };
    EditarAnuncioPage.prototype.updateVagaDataFinal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Data Final",
            inputs: [
                {
                    name: 'Data_final',
                    placeholder: 'Data Inicial',
                    value: this.currentEvent.Data_final // FALTOU COLOCAR CALENDARIO
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.eventProvider.updateVagaDataFinal(data.Data_final, _this.currentEvent.id);
                    }
                }
            ]
        });
        alert.present();
    };
    EditarAnuncioPage.prototype.updateVagaNumeroVagas = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Número de Vagas",
            inputs: [
                {
                    name: 'Numero_de_vagas',
                    placeholder: 'Número de Vagas',
                    value: this.currentEvent.Numero_de_vagas
                },
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.eventProvider.updateVagaNumeroVagas(data.Numero_de_vagas, _this.currentEvent.id);
                    }
                }
            ]
        });
        alert.present();
    };
    return EditarAnuncioPage;
}());
EditarAnuncioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        segment: 'event-detail/:eventId'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editar-anuncio',template:/*ion-inline-start:"C:\Users\bruno\GrupoFoxStop\src\pages\editar-anuncio\editar-anuncio.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{currentEvent?.Nome}} - Toque no item para editar</ion-title>\n  \n    </ion-navbar>\n  </ion-header>\n  \n  \n  \n  <ion-content>\n  \n  \n    <!-- CAMPO DO TITULO DO ANUNCIO -->\n  \n    <ion-item (click)="updateVagaName()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            Nome\n          </ion-col>\n          <ion-col col-6 *ngIf="currentEvent?.Nome">\n            {{currentEvent?.Nome}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-event" *ngIf="!currentEvent?.Nome">\n            <span>\n                  Editar Título do Anúncio.\n                </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n  \n  \n    <!-- CAMPO ESPECIFICAÇÕES -->\n  \n    <ion-item (click)="updateVagaEspecifica()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            Especificações\n          </ion-col>\n          <ion-col col-6 *ngIf="currentEvent?.Especificacoes">\n            {{currentEvent?.Especificacoes}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-event" *ngIf="!currentEvent?.Especificacoes">\n            <span>\n                  Editar especificações do Anúncio.\n                </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n  \n  \n    <!-- CAMPO PREÇO -->\n  \n    <ion-item (click)="updateVagaPreco()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            Preço\n          </ion-col>\n          <ion-col col-6 *ngIf="currentEvent?.Preco">\n            {{currentEvent?.Preco}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-event" *ngIf="!currentEvent?.Preco">\n            <span>\n                Editar Preço do Anúncio.\n              </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n  \n    <!-- CAMPO ENDERECO -->\n  \n    <ion-item (click)="updateVagaEndereco()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            Endereço\n          </ion-col>\n          <ion-col col-6 *ngIf="currentEvent?.Endereco">\n            {{currentEvent?.Endereco}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-event" *ngIf="!currentEvent?.Endereco">\n            <span>\n                  Editar Endereço da vaga.\n                </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n  \n    <!-- CAMPO LARGURA -->\n    <ion-item (click)="updateVagaLargura()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            Largura\n          </ion-col>\n          <ion-col col-6 *ngIf="currentEvent?.Largura">\n            {{currentEvent?.Largura}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-event" *ngIf="!currentEvent?.Largura">\n            <span>\n                  Editar Largura da vaga.\n                </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n  \n    <!-- CAMPO COMPRIMENTO -->\n    <ion-item (click)="updateVagaComprimento()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            Comprimento\n          </ion-col>\n          <ion-col col-6 *ngIf="currentEvent?.Comprimento">\n            {{currentEvent?.Comprimento}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-event" *ngIf="!currentEvent?.Comprimento">\n            <span>\n                  Editar Comprimento da vaga.\n                </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n    <!-- CAMPO DATA INICIAL -->\n  \n    <ion-item (click)="updateVagaDataInicial()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            Data Inicial\n          </ion-col>\n          <ion-col col-6 *ngIf="currentEvent?.Data_inicial">\n            {{currentEvent?.Data_inicial}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-event" *ngIf="!currentEvent?.Data_inicial">\n            <span>\n                  Editar Data Inicial.\n                </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n  \n    <!-- CAMPO DATA FINAL -->\n  \n    <ion-item (click)="updateVagaDataFinal()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            Data Final\n          </ion-col>\n          <ion-col col-6 *ngIf="currentEvent?.Data_final">\n            {{currentEvent?.Data_final}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-event" *ngIf="!currentEvent?.Data_final">\n            <span>\n                  Editar Data Final.\n                </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n    <!-- CAMPO NÚMERO DE VAGAS -->\n  \n    <ion-item (click)="updateVagaNumeroVagas()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            Número de Vagas\n          </ion-col>\n          <ion-col col-6 *ngIf="currentEvent?.Numero_de_vagas">\n            {{currentEvent?.Numero_de_vagas}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-event" *ngIf="!currentEvent?.Numero_de_vagas">\n            <span>\n                  Editar Número de Vagas.\n                </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\bruno\GrupoFoxStop\src\pages\editar-anuncio\editar-anuncio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], EditarAnuncioPage);

//# sourceMappingURL=editar-anuncio.js.map

/***/ })

});
//# sourceMappingURL=21.js.map