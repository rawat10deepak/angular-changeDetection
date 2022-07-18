import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-default-strategy',
  templateUrl: './counter-default-strategy.component.html',
  styleUrls: ['./counter-default-strategy.component.scss'],
})
export class CounterDefaultStrategyComponent implements OnInit {
  @Input() counter: any;
  @Input() inputObject: any;
  constructor() {}

  ngOnInit(): void {}
}
