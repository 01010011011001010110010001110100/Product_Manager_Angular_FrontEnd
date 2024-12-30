import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-submit-button',
  imports: [],
  template: `
    <button 
      type="submit" 
      [class]="extraClasses + (myForm.valid ? ' btn-primary' : ' btn-secondary')" 
      [disabled]="myForm.invalid"
    >
      {{text}}
    </button>
  `,
  styleUrl: './form-submit-button.component.css'
})
export class FormSubmitButtonComponent {
  // Vars
  @Input() myForm: FormGroup;
  @Input() text: string;
  @Input() extraClasses: string;
  
  constructor() {
    // Initialize vars
    this.myForm = new FormGroup({});
    this.text = '';
    this.extraClasses = '';
  }
}
