import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GameState, Upgrade} from "./game.model";

const DEFAULT_STATE: GameState = {
  points: 0,
  diceAmount: 1,
  upgrades: [
    {
      id: 1,
      name: 'Dice Amount',
      level: 1,
      cost: 10
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private readonly _stateSource = new BehaviorSubject<GameState>(JSON.parse(JSON.stringify(DEFAULT_STATE)))

  readonly state$ = this._stateSource.asObservable();

  constructor() {
  }

  getState(): GameState {
    return this._stateSource.getValue();
  }

  resetState() {
    this._stateSource.next(JSON.parse(JSON.stringify(DEFAULT_STATE)));
  }

  private _setState(state: GameState) {
    this._stateSource.next(state);
  }

  addPoints(points: number) {
    const state = this.getState();
    state.points += points;
    this._setState(state);
  }

  addDiceAmount(amount: number) {
    const state = this.getState();
    state.diceAmount += amount;
    this._setState(state);
  }

  addUpgradeLevel(upgrade: Upgrade) {
    const state = this.getState();
    state.upgrades.find((upg) => upg.id === upgrade.id)!.level++;
    this._setState(state);
  }
}
