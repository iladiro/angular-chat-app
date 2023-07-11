import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat.component';
import { WindowComponent } from './components/window/window.component';
import { WindowRowComponent } from './components/window/window-row/window-row.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ChatComponent,
    WindowComponent,
    WindowRowComponent,
    SpinnerComponent
  ],
  exports: [
    ChatComponent,
    WindowComponent,
    WindowRowComponent,
    SpinnerComponent
  ]
})
export class ChatModule { }