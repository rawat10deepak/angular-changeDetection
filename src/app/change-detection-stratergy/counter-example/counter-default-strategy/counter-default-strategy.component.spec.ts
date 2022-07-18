import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDefaultStrategyComponent } from './counter-default-strategy.component';

describe('CounterDefaultStrategyComponent', () => {
  let component: CounterDefaultStrategyComponent;
  let fixture: ComponentFixture<CounterDefaultStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDefaultStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDefaultStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
