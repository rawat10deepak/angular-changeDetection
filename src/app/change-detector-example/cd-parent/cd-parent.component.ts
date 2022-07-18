import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-parent',
  templateUrl: './cd-parent.component.html',
  styleUrls: ['./cd-parent.component.scss'],
})
export class CdParentComponent implements OnInit, OnChanges {
  counter = 0;
  constructor() {
    console.log(' parent component constructor called');
  }

  ngOnInit(): void {
    console.log(' parent component ngOnInit called');
  }

  ngOnChanges(): void {
    console.log(' parent component ngOnChanges called');
  }

  updateCounter() {
    this.counter++;
  }
}
