import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Profile } from '../models/session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }
  token:string="";

  ngOnInit() {
    console.log("i am in login component and my email is "+Profile.user_name);
  }
  btn_login(){
    this.loginservice.login().subscribe(res =>{
      console.log(res);
      sessionStorage.setItem("token",res.token);
      Profile.id=res.id;
      Profile.user_name=res.user_name;
      Profile.email=res.email;
      Profile.token=res.token;
      Profile.isLogin=true;
      this.token=res.token;
      this.router.navigateByUrl('/chat');
    });

  }
}
