import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
@IonicPage()
@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})
export class EventCreatePage {
  constructor(public navCtrl: NavController, public eventProvider:
    EventProvider) { }

  createEvent(eventName: string, eventDate: string, eventDate1: string, eventPrice: number): void {
    this.eventProvider.createEvent(eventName, eventDate, eventDate1, eventPrice)
      .then(newEvent => {
        this.navCtrl.pop();
      })
  }
}