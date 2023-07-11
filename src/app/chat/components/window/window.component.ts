import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chat, LoggedAccount, Message } from '../../core/interfaces/chat.interface';

@Component({
  selector: 'iladiro-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {

  @Input() loggedAccount!: LoggedAccount;
  @Input() chat!: Chat;
  @Input() openByMySelf = false;

  loading = false;
  allMessagesLoaded = false;  

  form = new FormGroup({
    text: new FormControl(null, Validators.required),
  });

  collapseWindow(): void {
    this.chat.collapsed = this.chat.collapsed ? false : true;
  }

  closeWindow(): void {
    this.chat.open = false;
  }

  getChatMessages(): Message[] {
    return [
      {
        id: 0,
        text: 'Ciao',
        sender: {
          id: 0,
          firstname: 'Ilaria',
          lastname: 'Di Rosa'
        },
        receiver: {
          id: 1,
          firstname: 'Mario',
          lastname: 'Rossi'
        },
        send_at: new Date()
      },
      {
        id: 1,
        text: 'ciao ila',
        sender: {
          id: 1,
          firstname: 'Mario',
          lastname: 'Rossi'            
        },
        receiver: {
          id: 0,
          firstname: 'Ilaria',
          lastname: 'Di Rosa'
        },
        send_at: new Date()
      }
    ]
  }

  scrolled(event: any) {}

  triggerFunction(event: any) {
    console.log("inviato");
    console.log(event);
  }

  ngOnInit() {
    this.chat.messages = this.getChatMessages();
  }

}

