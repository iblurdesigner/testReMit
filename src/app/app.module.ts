import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspecModule } from './inspections/inspec.module';
import { Req0401Module } from './req0401/req0401.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InspecModule,
    Req0401Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
