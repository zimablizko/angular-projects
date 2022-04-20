import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from "@angular/router";
import { DiceComponent } from './game/dice/dice.component';
import {MaterialModule} from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradesComponent } from './game/upgrades/upgrades.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AboutComponent,
    DiceComponent,
    UpgradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
