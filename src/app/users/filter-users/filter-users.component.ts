import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss'],
})
export class FilterUsersComponent implements OnInit {
  constructor() {
    console.log('Child constructor');
  }

  ngOnInit(): void {
    console.log('Child ngOninit Called');
  }
}
