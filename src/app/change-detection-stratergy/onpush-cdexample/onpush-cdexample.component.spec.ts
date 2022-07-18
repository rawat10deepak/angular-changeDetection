import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushCDExampleComponent } from './onpush-cdexample.component';

describe('OnpushCDExampleComponent', () => {
  let component: OnpushCDExampleComponent;
  let fixture: ComponentFixture<OnpushCDExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnpushCDExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushCDExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
