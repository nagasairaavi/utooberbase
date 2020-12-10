import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import * as FileSaver from 'file-saver';
import { YoutuberslistComponent } from './youtuberslist/youtuberslist.component';
import { CommonPipe } from './common.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutuberslistComponent,
    CommonPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TooltipModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
