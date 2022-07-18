import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-performance',
  templateUrl: './cd-performance.component.html',
  styleUrls: ['./cd-performance.component.scss'],
})
export class CdPerformanceComponent implements OnInit {
  numbers: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.generateNumbers();
  }

  generateNumbers(): void {
    for (let index = 0; index < 5000; index++) {
      let number = Math.random();
      this.numbers.push(number);
    }
  }

  parent() {
    console.log('parent');
  }

  child() {
    console.log('parent');
  }
}
