import { NgModule, Injector }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }   from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports:      [ 
  	BrowserModule,
    FormsModule,
    HttpModule, 
    PagesModule,
    SharedModule
  ],
  declarations: [
  	AppComponent
  ],
  bootstrap: [ 
    AppComponent 
  ]
})

export class AppModule { }