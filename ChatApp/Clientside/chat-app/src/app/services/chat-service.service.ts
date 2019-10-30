import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import { outgoing } from 'src/app/models';
import { HttpClient,HttpHeaders }    from '@angular/common/http';

const httpoptions={
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
     'Authorization': 'bareer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMSIsInVzZXJuYW1lIjoiVGFsaGEgSGFmZWV6IiwiZW1haWwiOiJ0YWxoYTk2OTlAZ21haWwuY29tIn0sImlhdCI6MTU3MjE1OTI3OX0.Y8qvc-xbkA3VHs9K3_66Xb2fzebkjJJo0CF2jf64dUI'
  })}

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private url = 'http://localhost:3000';
  private socket;    

  constructor(private http: HttpClient) {
      this.socket = io(this.url);
  }
  ngOnInit(){
    alert("SERVICE");
    console.log(this.socket);
  }

  login():Observable<any>{
    return this.http.post('http://localhost:3000/login','');
  }

  verify():Observable<any>{
    return this.http.post('http://localhost:3000/messages','');
  }

  public sendMessage(outgoing:outgoing) {
    this.socket.username="Talha";
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
