import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPerformanceComponent } from './cd-performance.component';

describe('CdPerformanceComponent', () => {
  let component: CdPerformanceComponent;
  let fixture: ComponentFixture<CdPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
