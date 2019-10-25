import { Component } from '@angular/core';
// import { ChatService } from './chat-service';
import { ChatServiceService } from 'src/app/chat-service.service';
import{outgoing} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  outgoingmessage:string="";
  outgoing:outgoing;
  message:string;
  messages:any=[];
  constructor(private callservice:ChatServiceService) { }

  ngOnInit() {
    this.outgoing=new outgoing;
    this.callservice
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
        console.log(this.messages);
      });
  }

  sendmsgfunc(){
    this.outgoing.From="Talha";
    this.outgoing.To="Myself";
    this.outgoing.message=this.outgoingmessage;
   this.callservice.sendMessage(this.outgoing);
  }

}
