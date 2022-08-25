import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  isChild = false;

  constructor() {
    console.log('Parent Constructor');
  }

  ngOnInit(): void {
    console.log('Parent ngOnInit');
  }
  toggleChild() {
    this.isChild = !this.isChild;
  }
}
