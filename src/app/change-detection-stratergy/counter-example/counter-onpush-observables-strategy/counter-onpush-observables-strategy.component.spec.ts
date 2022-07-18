import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOnpushObservablesStrategyComponent } from './counter-onpush-observables-strategy.component';

describe('CounterOnpushObservablesStrategyComponent', () => {
  let component: CounterOnpushObservablesStrategyComponent;
  let fixture: ComponentFixture<CounterOnpushObservablesStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOnpushObservablesStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOnpushObservablesStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
