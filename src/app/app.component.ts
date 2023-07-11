import { Component } from '@angular/core';
import { ChatService } from './chat/core/services/chat.service';
import { User } from './chat/core/interfaces/user.interface';
import { Subject, takeUntil } from 'rxjs';
import { Chat } from './chat/core/interfaces/chat.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  destroy = new Subject();

  loggedAccount = {
    id: 0,
    firstname: 'Ilaria',
    lastname: 'Di Rosa'
  }

  users!: User[];

  chats: Chat[] = [];

  constructor(private chatService: ChatService) {
    this.chatService.connect(this.loggedAccount);
    
    this.users = this.getUsers();
  }

  giveMeBackChatIndex(chat_uuid: any) {
    return this.chats.findIndex(chat => chat.chat_uuid == chat_uuid );
  }

  ngOnInit() {
    this.chatService.chat$.pipe(
      takeUntil(this.destroy)
    ).subscribe({
      next: (data: Chat) => {
        console.log(data);        
        if(data !== null) {
          const index = this.giveMeBackChatIndex(data.chat_uuid);
          if(index === -1) {
            //console.log("non esiste");
            /* this.addChat(data, null);
            this.getChatMessages(this.giveMeBackChatIndex(data.chat_uuid), data.chat_uuid, 0); */
            this.chats.push(data)
          } else {
            //console.log("already esiste");
            this.chats[index].open = true;
            this.chats[index].collapsed = false;
          };
          //this.openByMySelf = true;
        }
      },
      error: (err) => console.log(err)
    })
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.chatService.disconnect();
  }

  openChat(user: User) {
    console.log(user);
    this.chatService.open(this.loggedAccount, user);
  }

  getUsers(): User[] {
    return [
      {
        id: 10,
        firstname: 'Mario',
        lastname: 'Rossi'
      }
    ]
  }
}
