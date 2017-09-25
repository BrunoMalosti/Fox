import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    firebase.initializeApp({
      apiKey: "AIzaSyAYHzoXVe2dzjVAlBAiQ-aXnQSqXaCgXGE",
      authDomain: "foxstop2017.firebaseapp.com",
      databaseURL: "https://foxstop2017.firebaseio.com",
      projectId: "foxstop2017",
      storageBucket: "foxstop2017.appspot.com",
      messagingSenderId: "258431677620"
      });

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if(!user){
      this.rootPage = 'LoginPage';
      unsubscribe();
      } else {
      this.rootPage = HomePage;
      unsubscribe();
      }
      });
    
      
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

