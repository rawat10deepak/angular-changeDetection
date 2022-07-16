import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzoneExampleComponent } from './ngzone-example.component';

describe('NgzoneExampleComponent', () => {
  let component: NgzoneExampleComponent;
  let fixture: ComponentFixture<NgzoneExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgzoneExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzoneExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
