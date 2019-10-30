import { NgModule } from '@angular/core';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    ChatRoutingModule,FormsModule
  ]
})
export class ChatModule { }
