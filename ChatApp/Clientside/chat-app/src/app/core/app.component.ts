import { Component } from '@angular/core';
// import { ChatService } from './chat-service';
import { ChatServiceService } from '../services/chat-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private callservice:ChatServiceService,private router:Router){}


}