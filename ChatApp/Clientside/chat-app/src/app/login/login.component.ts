import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService) { }
  token:string="";

  ngOnInit() {
  }
  btn_login(){
    this.loginservice.login().subscribe(res =>{
      console.log(res);
      this.token=res.token;
    });

  }
}
