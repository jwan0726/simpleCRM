import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss'],
})
export class AttributeDirectivesComponent implements OnInit {
  styleProp: string = 'purple';
  txtColor: string = 'blue';
  StyleClsProp: string = 'c4';
  ConditionClsProp: string = 'c3';
  constructor() {}

  ngOnInit(): void {}
}
