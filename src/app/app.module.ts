import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component01Component } from './components/component01/component01.component';
import { Component02Component } from './components/component02/component02.component';

@NgModule({
  declarations: [
    AppComponent,
    Component01Component,
    Component02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
