import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class formFieldsValidatorHelper {
    // Check if the control value does not contain a specific text
    public static forbiddenText(forbiddenText: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const forbidden = control.value.includes(forbiddenText);
            return forbidden ? { forbiddenText: { value: control.value } } : null;
        };
    }

    // Check if the valueS of the control is equal to one of those prohibited values
    public static forbiddenValues(forbiddenValues: any[]): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const forbidden = forbiddenValues.includes(control.value);
            return forbidden ? { forbiddenValue: { value: control.value } } : null;
        };
    }

    // Check if the value of the control is equal to the prohibited value
    public static forbiddenValue(forbiddenValue: any): ValidatorFn {
        return this.forbiddenValues([forbiddenValue]);
    }
}