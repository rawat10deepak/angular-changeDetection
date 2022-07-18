import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-counter-onpush-strategy',
  templateUrl: './counter-onpush-strategy.component.html',
  styleUrls: ['./counter-onpush-strategy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterOnpushStrategyComponent implements OnInit, OnChanges {
  @Input() counter: any;
  @Input() inputObject: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        switch (propName) {
          case 'inputObject':
            console.log('Input Object changes to :' + change.currentValue);
            break;

          default:
            break;
        }
      }
    }
  }

  ngOnInit(): void {}
}
