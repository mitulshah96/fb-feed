import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { FacebookService, FacebookModule } from 'ngx-facebook';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FacebookModule.forRoot(),
  ],
  providers: [FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
