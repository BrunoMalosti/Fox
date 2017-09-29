import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TermosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-termos',
  templateUrl: 'termos.html',
})
export class TermosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermosPage');
  }
  goToTermosServico1(): void {
    this.navCtrl.push('Termoservico1Page');
  }
  goToTermosServico2(): void {
    this.navCtrl.push('Termoservico2Page');
  }
  goToTermosServico3(): void {
    this.navCtrl.push('Termoservico3Page');
  }
  goToTermosServico4(): void {
    this.navCtrl.push('Termoservico4Page');
  }
  goToTermosServico5(): void {
    this.navCtrl.push('Termoservico5Page');
  }
  goToTermosServico6(): void {
    this.navCtrl.push('Termoservico6Page');
  }
  goToTermosServico7(): void {
    this.navCtrl.push('Termoservico7Page');
  }


  goToTermosLocador1(): void {
    this.navCtrl.push('Termoslocador1Page');
  }
  goToTermosLocador2(): void {
    this.navCtrl.push('Termoslocador2Page');
  }
  goToTermosLocador3(): void {
    this.navCtrl.push('Termoslocador3Page');
  }


  goToPoliticas1(): void {
    this.navCtrl.push('Politicas1Page');
  }



}
