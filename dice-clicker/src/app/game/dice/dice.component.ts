import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  diceValue: number;
  getDiceRoll = () => Math.floor(Math.random() * 6) + 1;

  constructor() {
    console.log(this.diceValue)
    this.diceValue =  this.getDiceRoll();
    console.log(this.diceValue)
  }

  ngOnInit(): void {

  }



}
