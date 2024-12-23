import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'field-validation-message',
  imports: [],
  templateUrl: './field-validation-message.component.html',
  styleUrl: './field-validation-message.component.css'
})
export class FieldValidationMessageComponent implements OnInit {

  // Vars
  public isValid: boolean;

  // Vars Exported
  @Input() public validationMessages: Record<string, string>
  @Input() public myControl?: AbstractControl;


  constructor() {
    this.isValid = true;
    this.validationMessages = {};
  }


  ngOnInit(): void {
    // Always evaluate validation when ocurss an event
    this.myControl?.events.subscribe(() => {
      this.isValid = this.myControl?.valid!;
    });
  }

  
  // Get message to show
  public getMessage(): string {
    for (const key in this.validationMessages) {
      if (this.myControl?.hasError(key)) {
        return this.validationMessages[key]; 
      }
    }
    return '';
  }
}
