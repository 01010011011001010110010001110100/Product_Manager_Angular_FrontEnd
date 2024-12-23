import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldValidationMessageComponent } from './field-validation-message.component';

describe('FieldValidationMessageComponent', () => {
  let component: FieldValidationMessageComponent;
  let fixture: ComponentFixture<FieldValidationMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldValidationMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldValidationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
