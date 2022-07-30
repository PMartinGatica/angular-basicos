import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroeModule } from './heores/heroes.module';
import { ContadorModule } from './contador/contador.module';



@NgModule({
  declarations: [
    AppComponent,


   
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroeModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
