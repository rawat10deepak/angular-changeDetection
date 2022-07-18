import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.scss'],
})
export class CounterParentComponent implements OnInit {
  data: any;
  counter = { count: 1 };

  exampleObject = {
    name: '',
    age: 0,
  };

  constructor() {
    this.exampleObject = {
      name: 'Deepak',
      age: 27,
    };
  }

  ngOnInit(): void {
    this.exampleObject = {
      name: 'observable init',
      age: 12,
    };
    this.data = new BehaviorSubject(this.exampleObject);
    console.log(this.data);
  }

  incrementCounter() {
    this.counter.count++;
  }

  changeObjectAndPassAsRefrence() {
    // on push rule - it will consider the changes only when you pass by refrence
    this.exampleObject = { name: 'Pass By Refrence', age: 99 };
    console.log(this.exampleObject);
  }

  changeNameAsProperty() {
    this.exampleObject.name = 'name as property';
    this.exampleObject.age += 1;
    console.log(this.exampleObject);
  }

  changeNameAsObservable() {
    this.exampleObject = {
      name: 'observable',
      age: 44,
    };
    this.data.next(this.exampleObject);
  }
  // we will go with on push to minimize the cd cycle but ui is not updated
  // best practices OnPush + RXJS  --- rxjs will emit the value without mutating state or value
}
