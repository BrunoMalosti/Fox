import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import firebase from 'firebase';


@Injectable()

export class EventProvider {
  public eventListRef: firebase.database.Reference;
  
  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.eventListRef = firebase.database()
          .ref(`/eventList`);
          //.ref(`/eventList/${user.uid}`);
        }
    });
  }

  createEvent(eventName: string, eventDate: string, eventDate1: string, eventPrice: number): firebase.Promise<any> {
    return this.eventListRef.push({
      name: eventName,
      datei: eventDate,
      datef: eventDate1,
      price: eventPrice * 1,
      UID_DONO: firebase.auth().currentUser.uid
    });
  }


  getEventList(): firebase.database.Reference {
    return this.eventListRef;
  }


  getEventDetail(eventId: string): firebase.database.Reference {
    return this.eventListRef.child(eventId);
  }

  addGuest(guestName: string, eventId: string, eventPrice: number):
    firebase.Promise<any> {
    return this.eventListRef.child(`${eventId}/guestList`).push({ guestName })
  }
}
