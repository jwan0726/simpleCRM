import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-interpol',
  templateUrl: './binding-interpol.component.html',
  styleUrls: ['./binding-interpol.component.css'],
})
export class BindingInterpolComponent implements OnInit {
  userObject = { firstName: 'HAHA', lastName: 'John' };
  imgUrl: string = 'something.jpg';
  altUrl: string = 'Missing image Text';
  colVal = 2;
  username = 'Arc Tutorial';
  sayHello() {
    console.log('Say Hello');
  }
  constructor() {}
  public turn() {
    document.documentElement.style.transitionDuration = '600s';
    document.documentElement.style.transitionTimingFunction = 'ease-in';
    document.documentElement.style.transform = 'rotate(10turn)';
    console.log('Happy Aprils Fools');
  }
  highlightBGcolor() {
    console.log('Hi Iam being highlighted');
  }
  inputBox() {
    console.log('HAH');
  }
  ngOnInit(): void {}
}
