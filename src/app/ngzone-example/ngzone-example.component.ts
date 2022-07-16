import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngzone-example',
  templateUrl: './ngzone-example.component.html',
  styleUrls: ['./ngzone-example.component.scss'],
})
export class NgzoneExampleComponent implements OnInit {
  public text: string;
  public runInZone: boolean;

  constructor(zone: NgZone) {
    const mql: MediaQueryList = window.matchMedia('(min-width:800px');
    // match media is not part of angular so will not be listened by the angular
    this.text = this.getText(mql);

    mql.addListener((mql: any) => {
      // listen to screen size changes
      document.body.querySelector('#element').innerHTML = this.getText(mql);
      if (!this.runInZone) {
        this.text = this.getText(mql);
      } else {
        this.text = this.getText(mql);
        // cdr.detectChanges()

        // one way to trigger change detection is to use ngZone.run()
        zone.run(() => {
          // wrrapping the program under zone.run to listen to the changes
          this.text = this.getText(mql);
        });
      }
    });
  }
  getText(mql: MediaQueryList): string {
    return mql.matches
      ? 'Screen width: GREATER than 800px'
      : 'Screen width: LOWER than 800px';
  }

  ngOnInit(): void {}

  get color(): string {
    return this.text.indexOf('GREATER') > -1 ? 'lightblue' : 'lightgreen';
  }

  toggle() {
    this.runInZone = !this.runInZone;
  }

  ngAfterViewInit() {
    document.body.querySelector('#element').innerHTML = this.text;
  }
}
