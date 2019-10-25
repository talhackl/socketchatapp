import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from 'src/app/chat/chat.component';
import { AppComponent } from 'src/app/app.component';


const routes: Routes = [
  {path:'',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
