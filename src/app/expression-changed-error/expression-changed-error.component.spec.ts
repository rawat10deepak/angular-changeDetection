import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionChangedErrorComponent } from './expression-changed-error.component';

describe('ExpressionChangedErrorComponent', () => {
  let component: ExpressionChangedErrorComponent;
  let fixture: ComponentFixture<ExpressionChangedErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionChangedErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionChangedErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
