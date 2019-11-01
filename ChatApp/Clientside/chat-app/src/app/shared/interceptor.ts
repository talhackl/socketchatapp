import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()


export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: LoginService,private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    if(sessionStorage.getItem("token")===""){
        this.router.navigateByUrl("/login");
    }
    else{
        var token=sessionStorage.getItem("token");
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer `+token
            }
          });
          return next.handle(request);
    }
   
  }
}
