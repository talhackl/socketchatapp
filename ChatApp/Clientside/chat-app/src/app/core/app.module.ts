import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ LoginModule} from '../login/login.module';
import {ChatModule} from '../chat/chat.module';
import { TokenInterceptor } from '../shared/interceptor';

@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,FormsModule,LoginModule,ChatModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
