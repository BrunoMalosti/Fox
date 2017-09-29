import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {
  public userProfile: firebase.database.Reference;public teste: firebase.database.Reference;
  public currentUser: firebase.User;
  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
        this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
        this.teste = firebase.database().ref(`/userProfile`);
      }
    });
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  updateName(firstName: string, lastName: string): firebase.Promise<any> {
    return this.userProfile.update({ firstName, lastName });
  }

  updateDOB(birthDate: string): firebase.Promise<any> {
    return this.userProfile.update({ birthDate });
  }

  updateSL(sl: string): firebase.Promise<any> {
    return this.userProfile.update({ sl });
  }

  updateCPF(cpf: string): firebase.Promise<any> {
    return this.userProfile.update({ cpf });
  }

  updateRG(rg: string): firebase.Promise<any> {
    return this.userProfile.update({ rg });
  }

  updateTEL1(tel1: string): firebase.Promise<any> {
    return this.userProfile.update({ tel1 });
  }


  updateEmail(newEmail: string, password: string): firebase.Promise<any> {
    const credential = firebase.auth.EmailAuthProvider
      .credential(this.currentUser.email, password);
    return this.currentUser.reauthenticateWithCredential(credential)
      .then(user => {
        this.currentUser.updateEmail(newEmail).then(user => {
          this.userProfile.update({ email: newEmail });
        });
      }).catch(error => {
        console.error(error);
      });
  }


  updatePassword(newPassword: string, oldPassword: string): firebase.Promise<any> {
    const credential = firebase.auth.EmailAuthProvider
      .credential(this.currentUser.email, oldPassword);
    return this.currentUser.reauthenticateWithCredential(credential)
      .then(user => {
        this.currentUser.updatePassword(newPassword).then(user => {
          console.log("Password Changed");
        });
      }).catch(error => {
        console.error(error);
      });
  }

  getNome(uid: string): firebase.database.Reference {
    return this.teste.child(uid);
  }

}
