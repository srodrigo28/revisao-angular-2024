import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component01Component } from './components/component01/component01.component';
import { Component02Component } from './components/component02/component02.component';
import { Component03Component } from './components/component03/component03.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component04Component } from './components/component04/component04.component';
import { Component05Component } from './components/component05/component05.component';
import { Component06Component } from './components/component06/component06.component';
import { Component07Component } from './components/component07/component07.component';
import { Component08Component } from './components/component08/component08.component';

@NgModule({
  declarations: [
    AppComponent,
    Component01Component,
    Component02Component,
    Component03Component,
    Component04Component,
    Component05Component,
    Component06Component,
    Component07Component,
    Component08Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
