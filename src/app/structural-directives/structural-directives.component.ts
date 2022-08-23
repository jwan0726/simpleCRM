import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent implements OnInit {
  success_msg = false;
  success_flag = false;
  contacts = [
    { firstName: 'John', lastName: 'Yan', contactId: 727 },
    { firstName: 'Man', lastName: 'Chan', contactId: 156 },
    { firstName: 'Argens', lastName: 'Ng', contactId: 2025 },
    { firstName: 'Chee', lastName: 'Lai', contactId: 5412 },
    { firstName: 'Adrian', lastName: 'Lai', contactId: 6493 },
  ];

  superPower = 'wonderWoman';
  price = 50;
  constructor() {}

  ngOnInit(): void {}
}
