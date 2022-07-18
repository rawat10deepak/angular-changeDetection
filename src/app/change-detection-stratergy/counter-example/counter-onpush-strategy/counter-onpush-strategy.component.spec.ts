import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOnpushStrategyComponent } from './counter-onpush-strategy.component';

describe('CounterOnpushStrategyComponent', () => {
  let component: CounterOnpushStrategyComponent;
  let fixture: ComponentFixture<CounterOnpushStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOnpushStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOnpushStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
