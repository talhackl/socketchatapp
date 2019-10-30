import { Injectable } from '@angular/core';
import {Observable, ObservedValueOf} from 'rxjs';
import { HttpClient,HttpHeaders }    from '@angular/common/http';

const httpoptions={
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login():Observable<any>{
    return this.http.post('http://localhost:3000/login','');
  }
}
