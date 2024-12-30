import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldValidationMarkComponent } from './field-validation-mark.component';

describe('FieldValidationMarkComponent', () => {
  let component: FieldValidationMarkComponent;
  let fixture: ComponentFixture<FieldValidationMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldValidationMarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldValidationMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
