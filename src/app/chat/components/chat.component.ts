import { Component, Input } from '@angular/core';
import { Chat } from '../core/interfaces/chat.interface';

@Component({
  selector: 'iladiro-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @Input() loggedAccount: any;
  @Input() chats!: Chat[];
  
  openByMySelf!: boolean;

}
