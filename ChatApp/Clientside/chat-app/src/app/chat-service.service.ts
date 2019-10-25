import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import { outgoing } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private url = 'http://localhost:3000';
  private socket;    

  constructor() {
      this.socket = io(this.url);
  }
  ngOnInit(){
    alert("SERVICE");
    console.log(this.socket);
  }
  public sendMessage(outgoing:outgoing) {
    this.socket.emit('new-message',outgoing);
  }

  // public getMessages():Observable<any>{
  //   return this.socket.on('new-message',(message) =>{

  //   });
  // }
  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
        });
    });
}
}
