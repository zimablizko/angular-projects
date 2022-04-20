export interface GameState {
  points: number;
  diceAmount: number;
  upgrades: Upgrade[];
}

export interface Upgrade {
  id: number;
  name: string;
  level: number;
  cost: number;
}
