import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocatedComponent } from './located/located.component';
import { CurentTimeComponent } from './curent-time/curent-time.component';
import { PeopleInISSComponent } from './people-in-iss/people-in-iss.component';
import {HttpClientModule} from "@angular/common/http";
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LocatedComponent,
    CurentTimeComponent,
    PeopleInISSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBOSayzpCdEshpjKxPPsk0Z3Torz1h8pZw',
    libraries: ['places']
  }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
