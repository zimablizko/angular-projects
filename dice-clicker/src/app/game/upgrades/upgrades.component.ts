import { Component, OnInit } from '@angular/core';
import {GameStateService} from "../game-state.service";
import {GameState, Upgrade} from "../game.model";

enum Upgrades {
  AddDiceAmount = 1,
  AddCritChance = 2
}

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {
  state: GameState;
  constructor(private gameStateService: GameStateService) { }

  ngOnInit(): void {
    this.gameStateService.state$.subscribe({
      next: gameState => this.state = JSON.parse(JSON.stringify(gameState))
    });
  }

  getCost(upg: Upgrade) {
    return upg.cost * upg.level;
  }

  getDisabled(upg: Upgrade) {
    return this.state.points < this.getCost(upg);
  }

  handleUpgrade(upg: Upgrade) {
    if (!this.getDisabled(upg)) {
      switch (upg.id) {
        case Upgrades.AddDiceAmount:
          this.gameStateService.addDiceAmount(1);
          break;
      }
      this.gameStateService.addUpgradeLevel(upg);
      this.gameStateService.addPoints(-this.getCost(upg));
    }
  }
}
