import { Injectable } from '@angular/core';
import { WarningAnimation } from '../animations/warning-animation';
import { Subject } from 'rxjs';
import { LoggedAccount } from '../interfaces/logged-account.interface';

import { v5 as uuidv5 } from 'uuid';
import { User } from '../interfaces/user.interface';
import { Chat } from '../interfaces/chat.interface';

declare const InstallTrigger: any;

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  source: any = null;

  /* message: BehaviorSubject<Object> = new BehaviorSubject<any>(null);
  messageObservable$: Observable<any> =  this.message.asObservable(); */

  chat$ = new Subject<Chat>();
  message$ = new Subject();

  chatServiceEndPoint: string = "";
  private uuidStatic = "ddcb6f26-1fe8-11ee-be56-0242ac120002";

  constructor(
    private animation: WarningAnimation
  ) {}

  disconnect(): void {
    this.source.close();
  }

  connect(account: any): void {
    const endpoint = `http://${window.location.hostname}:4001/bracco/${account.id}/events`;
    this.source = new window['EventSource'](endpoint);

    this.source.addEventListener('message', (event: any) => {
      const parseObj = JSON.parse(event.data);

      if(parseObj.message.table == "messages") {
        this.saveMessageToObservable(parseObj.message.record);
        if(!document.hasFocus() || document.visibilityState == "hidden") {
          this.animation.stopFlashingTab(this.animation.flashingTab("C'è una messagio per te"));
        }
      }
    });
    this.source.addEventListener('open', (event: any) => {
      //console.log("eventsource chat connected.");
		});
    this.source.addEventListener('error', (event: any) => {
      //console.log("eventsource chat was closed.");
      const isFirefox = typeof InstallTrigger !== 'undefined';
      if(isFirefox) {
        this.connect(account);
      };
    });
    this.source.addEventListener('offline', (event: any) => {
      //console.log("The network connection has been lost.");
    });
  }

  open(logged_account: LoggedAccount, user: User): void {
    const obj = {
      "chat_uuid": this.generateUUID(logged_account.id, user.id),
      "created_by": {
        "id": logged_account.id,
        "firstname": logged_account.firstname,
        "lastname": logged_account.lastname
        //"avatar_color": logged_account.avatar_color
      },
      "created_at": this.getCurrentDate(),
      "recipient": {
        "id": user.id,
        "firstname": user.firstname,
        "lastname": user.lastname,
        //"avatar_color": user.settings?.avatar_color
      },
      "messages": [],
      "collapsed": false,
      "open": true
    };

    this.saveChatToObservable(obj);
  }

  getCurrentDate(): string {
    let date = new Date();
    let isoDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
    return isoDate;    
  }

  saveMessageToObservable(item: any): void {
    this.message$.next(item);
  }

  saveChatToObservable(item: any): void {
    this.chat$.next(item);
  }

  generateUUID(sender_id: number, recipient_id: number): string {
    return uuidv5((sender_id * recipient_id).toString(), this.uuidStatic);
  }
}
