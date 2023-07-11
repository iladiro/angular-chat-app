import { Component, Input } from '@angular/core';
import { Message } from '../../../core/interfaces/chat.interface';

@Component({
  selector: 'iladiro-window-row',
  templateUrl: './window-row.component.html',
  styleUrls: ['./window-row.component.scss']
})
export class WindowRowComponent {

  @Input() loggedAccountId!: number;
  @Input() message!: Message;  

}
