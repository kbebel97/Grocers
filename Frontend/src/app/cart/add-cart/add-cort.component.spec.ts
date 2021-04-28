import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCortComponent } from './add-cort.component';

describe('AddCortComponent', () => {
  let component: AddCortComponent;
  let fixture: ComponentFixture<AddCortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
