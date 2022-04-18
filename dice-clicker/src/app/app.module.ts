import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from "@angular/router";
import { DiceComponent } from './game/dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AboutComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
