import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { createClientRequest } from '../../../../../Core/DTOS/request/client/createClientRequest';
import { routerDecorated } from '../../../../../Core/helpers/extensionClasses/routerDecorated';
import { objectHelper } from '../../../../../Core/helpers/others/objectHelper';
import { clientService } from '../../../../../Core/services/clientService';
import { FieldValidationMarkComponent } from '../../../../widgets/form/field-validation-mark/field-validation-mark.component';
import { FieldValidationMessageComponent } from '../../../../widgets/form/field-validation-message/field-validation-message.component';
import { FormSubmitButtonComponent } from '../../../../widgets/form/form-submit-button/form-submit-button.component';

@Component({
  selector: 'create-client-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FieldValidationMarkComponent,
    FieldValidationMessageComponent,
    FormSubmitButtonComponent,
  ],
  templateUrl: './create-client-form.component.html',
  styleUrl: './create-client-form.component.css',
})
export class CreateClientFormComponent {
  // Services
  private clientService: clientService;

  // Router Modules
  public router: routerDecorated;

  // Controls of the form
  private formBuilder: FormBuilder;
  public mainForm: FormGroup;

  constructor(clientService: clientService, router: routerDecorated) {
    // Injections
    this.formBuilder = inject(FormBuilder);

    // Initialize vars
    this.mainForm = this.getFormControls();
    this.clientService = clientService;
    this.router = router;
  }

  public create(): void {
    this.clientService
      .add(
        objectHelper.mapMatchingProperties(
          new createClientRequest(),
          this.mainForm.value
        )
      )
      .subscribe(() =>
        this.router.navigate([this.router.routes.LIST_CLIENTS])
      );
  }

  // get the forom controls and validations
  private getFormControls(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  // Getters of controls form
  get name() {
    return this.mainForm.get('name')!;
  }
  get phoneNumber() {
    return this.mainForm.get('phoneNumber')!;
  }
}
