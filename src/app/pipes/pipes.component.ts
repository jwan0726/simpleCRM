import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  userObject: object = { firstName: 'HAHA', lastName: 'John' };
  /* Built-In pip examples */
  lowerCaseExample = 'THIS IS WRITTEN IN ALL CAPS';
  upperCaseExample = 'this is all smallcaps';
  dateExample = Date.now();
  currencyExample = 125;
  percentExample = 0.634;

  constructor() {}

  ngOnInit(): void {}
}
