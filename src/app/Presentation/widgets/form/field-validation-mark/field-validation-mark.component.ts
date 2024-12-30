import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'field-validation-mark',
  imports: [NgClass],
  template: `<span [ngClass]="currentClases">{{ isValid ? '*' : '(*)' }}</span>`,
  styleUrl: './field-validation-mark.component.css'
})
export class FieldValidationMarkComponent implements OnInit{

  // Vars
  public isValid: boolean;
  public currentClases: Record<string, boolean>;

  // Vars
  @Input() public myControl?: AbstractControl;


  constructor() {
    // Initialize vars
    this.isValid = true;
    this.currentClases = {};
    this.updateStyles();
  }


  ngOnInit(): void {
    // Always evaluate validation when ocurss an event
    this.myControl?.events.subscribe(() => {
      this.isValid = this.myControl?.valid!;
      this.updateStyles();
    });
  }
  

  private updateStyles(): void {
    this.currentClases = {
      'text-danger': !this.isValid,
      'text-secondary': this.isValid,
      'fw-bold': !this.isValid
    }
  }
}
