import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GameComponent} from "./game/game.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [{
    path: '', redirectTo: '/game', pathMatch: 'full'
  }, {
    path: 'game', component: GameComponent
  }, {
    path: 'about', component: AboutComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
