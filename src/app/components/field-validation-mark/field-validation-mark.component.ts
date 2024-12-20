import { Component, Input } from '@angular/core';

@Component({
  selector: 'field-validation-mark',
  imports: [],
  templateUrl: './field-validation-mark.component.html',
  styleUrl: './field-validation-mark.component.css'
})
export class FieldValidationMarkComponent {
  // Vars
  @Input() public isValid: boolean;

  constructor() {
    this.isValid = false;
  }
}
