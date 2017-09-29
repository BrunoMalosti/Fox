import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Politicas1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-politicas1',
  templateUrl: 'politicas1.html',
})
export class Politicas1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Politicas1Page');
  }
  
  /*
  goToBack(): void {
    this.navCtrl.push('TermosPage');
  }
*/
}
