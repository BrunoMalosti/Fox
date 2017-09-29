import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { ProfileProvider } from '../../providers/profile/profile';


@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {
  public eventList: Array<any>;
  constructor(public navCtrl: NavController, public eventProvider:
    EventProvider, public profileProvider: ProfileProvider) { }

    


  ionViewDidLoad() {
      this.eventProvider.getEventList().on('value', eventListSnapshot => {
      this.eventList = [];
      eventListSnapshot.forEach(snap => {
        console.log(eventListSnapshot.toJSON);
        this.eventList.push({
          id: snap.key,
          name: snap.val().name,
          price: snap.val().price,
          datei: snap.val().datei,
          datef: snap.val().datef,
          Uid: snap.val().UID_DONO
          
        });
        return false;
      });
    });
  }

  goToEventDetail(eventId):void {
    this.navCtrl.push('EventDetailPage', { 'eventId': eventId });
    }

}