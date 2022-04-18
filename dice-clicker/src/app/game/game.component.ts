import { Component, OnInit } from '@angular/core';
import {DiceComponent} from "./dice/dice.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  points: number;
  diceArray: DiceComponent[] = [];

  constructor() { }

  ngOnInit(): void {
    this.resetGame();
  }

  addPoints(points: number) {
    this.points += points;
  }

  rollDice() {
    const dice = new DiceComponent();
    let result = 0;
    this.diceArray = [];
    this.diceArray.push(dice);
    result = this.diceArray.reduce((prev, curr) => prev + curr.diceValue, 0)
    this.addPoints(result);
    console.log(dice)
  }

  resetGame() {
    this.points = 0;
    this.diceArray = [];
  }
}
