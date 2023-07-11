import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatModule } from './chat/chat.module';
import { WarningAnimation } from './chat/core/animations/warning-animation';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    ChatModule
  ],
  providers: [
    WarningAnimation
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
