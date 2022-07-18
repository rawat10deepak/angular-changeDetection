import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCDExampleComponent } from './default-cdexample.component';

describe('DefaultCDExampleComponent', () => {
  let component: DefaultCDExampleComponent;
  let fixture: ComponentFixture<DefaultCDExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultCDExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCDExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
