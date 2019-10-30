import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';
import{outgoing} from '../models';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

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

  btn_verify(){
    alert("C");
    this.callservice.verify().subscribe(data =>{
        console.log(data);
    });
  }
  sendmsgfunc(){
    this.outgoing.From="Talha";
    this.outgoing.To="Myself";
    this.outgoing.message=this.outgoingmessage;
   this.callservice.sendMessage(this.outgoing);
  }


}
