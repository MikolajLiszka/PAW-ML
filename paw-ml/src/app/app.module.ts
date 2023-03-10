import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SmallCardsComponent } from './small-cards/small-cards.component';
import { MediumCardsComponent } from './medium-cards/medium-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    SmallCardsComponent,
    MediumCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
