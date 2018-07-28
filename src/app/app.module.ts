import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardOneComponent } from '../card-one/card-one.component';
import { CardTwoComponent } from '../card-two/card-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOneComponent,
    CardTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
