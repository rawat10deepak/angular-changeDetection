import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression-changed-error',
  templateUrl: './expression-changed-error.component.html',
  styleUrls: ['./expression-changed-error.component.scss'],
})
export class ExpressionChangedErrorComponent implements OnInit {
  _time;

  constructor(private zone: NgZone) {
    this._time = Date.now();
    zone.runOutsideAngular(() => {
      // this code will not be the part of angular
      setInterval(() => {
        this._time = Date.now();
      }, 1);
    });
  }

  ngOnInit(): void {}

  get timeWithError() {
    // this will throw error which indicate the data is modified after cd has run
    // subcribe to proper life cycle hook
    return Date.now();
  }
}
