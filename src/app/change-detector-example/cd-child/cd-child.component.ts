import {
  Component,
  OnChanges,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-cd-child',
  templateUrl: './cd-child.component.html',
  styleUrls: ['./cd-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // introduced 'ChangeDetectionStrategy.OnPush' to reduce the cd cycle and performance is much better
})
export class CdChildComponent implements OnInit, OnChanges {
  constructor() {
    console.log(' child component constructor called');
  }

  ngOnInit(): void {
    console.log(' child component ngOnInit called');
  }

  ngOnChanges(): void {
    console.log(' child component ngOnChanges called');
  }

  executeFunction() {
    console.log('sample child component re-rendered');
    return 'this is sample component';
  }
}
