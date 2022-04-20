import {Component, OnInit} from '@angular/core';
import {DiceService} from "./dice/dice.service";
import {Dice} from "./dice/dice.model";
import {GameStateService} from "./game-state.service";
import {GameState} from "./game.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  diceArray: Dice[];
  state: GameState;

  get notEmptyDices() {
    return this.diceArray.filter((dice) => dice.value !== 0)
  }

  constructor(private diceService: DiceService, private gameStateService: GameStateService) {
  }

  ngOnInit(): void {
    this.gameStateService.state$.subscribe({
      next: gameState => this.state = JSON.parse(JSON.stringify(gameState))
    });
    this.resetGame();
  }

  rollDices() {
    while (this.diceArray.length < this.state.diceAmount) {
      this.diceArray.push({value: 0});
    }
    let result = this.diceService.getRollResult(this.diceArray);
    this.gameStateService.addPoints(result);
  }

  resetGame() {
    this.gameStateService.resetState()
    this.diceArray = [];
  }
}
