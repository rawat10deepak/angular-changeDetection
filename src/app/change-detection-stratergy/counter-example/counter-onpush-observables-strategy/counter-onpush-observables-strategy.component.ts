import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-onpush-observables-strategy',
  templateUrl: './counter-onpush-observables-strategy.component.html',
  styleUrls: ['./counter-onpush-observables-strategy.component.scss'],
})
export class CounterOnpushObservablesStrategyComponent implements OnInit {
  @Input() inputObject: any;
  _data: any;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.inputObject.subcribe((data) => {
      this._data = data;
      this.cd.markForCheck(); // register for cd cycle
      this.cd.detectChanges(); // run cd cycle manually one more time
    });
  }
}
