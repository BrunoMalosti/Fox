import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  Alert,
  AlertController
} from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile: any;
  public birthDate: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public profileProvider: ProfileProvider) { }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }
  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Your first name & last name",
      inputs: [
        {
          name: 'firstName',
          placeholder: 'Your first name',
          value: this.userProfile.firstName
        },
        {
          name: 'lastName',
          placeholder: 'Your last name',
          value: this.userProfile.lastName
        },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }

  
  updateDOB(birthDate: string): void {
    this.profileProvider.updateDOB(birthDate);
  }


  updateSL(sl: string): void {
    this.profileProvider.updateSL(sl);
  }


  updateCPF(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Your first name & last name",
      inputs: [
        {
          name: 'cpf',
          placeholder: 'seucpf',
          value: this.userProfile.cpf
        }],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updateCPF(data.cpf);
          }
        }
      ]
    });
    alert.present();
  }


  updateRG(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Your first name & last name",
      inputs: [
        {
          name: 'rg',
          placeholder: 'seurg',
          value: this.userProfile.rg
        }],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updateRG(data.rg);
          }
        }
      ]
    });
    alert.present();
  }


  updateTEL1(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Your first name & last name",
      inputs: [
        {
          name: 'tel1',
          placeholder: 'tel1',
          value: this.userProfile.tel1
        }],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updateTEL1(data.tel1);
          }
        }
      ]
    });
    alert.present();
  }


  updateEmail(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newEmail',
          placeholder: 'Your new email',
        },
        {
          name: 'password',
          placeholder: 'Your password',
          type: 'password'
        },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log("Email Changed Successfully");
              }).catch(error => {
                console.log('ERROR: ' + error.message);
              });
          }
        }
      ]
    });
    alert.present();
  }

  updatePassword(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'Your new password',
          type: 'password'
        },
        {
          name: 'oldPassword',
      placeholder: 'Your old password',
          type: 'password'
        },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updatePassword(data.newPassword,
              data.oldPassword);
          }
        }
      ]
    });
    alert.present();
  }

}