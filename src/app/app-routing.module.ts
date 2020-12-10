import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YoutuberslistComponent } from './youtuberslist/youtuberslist.component';

const routes: Routes = [{path:"",redirectTo:"home",pathMatch:"full"},{path:'home',component:HomeComponent},{path:'youtuberslist',component:YoutuberslistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
