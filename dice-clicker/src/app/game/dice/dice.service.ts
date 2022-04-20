import {Injectable} from '@angular/core';
import {Dice} from "./dice.model";

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  constructor() {
  }

  rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  getRollResult(diceArray: Dice[]): number {
    let result = 0;
    diceArray.forEach((dice) => {
      dice.value = this.rollDice();
      result += dice.value;
    });
    return result;
  }


}
