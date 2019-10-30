import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from 'src/app/chat/chat.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadChildren:'../login/login.module#LoginModule'},
  {path:'chat',loadChildren:'../chat/chat.module#ChatModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
