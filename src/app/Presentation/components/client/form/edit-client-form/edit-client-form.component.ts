import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { editClientModel } from '../../../../../Core/DTOS/models/clients/editClientModel';
import { editClientRequest } from '../../../../../Core/DTOS/request/client/editClientRequest';
import { routerDecorated } from '../../../../../Core/helpers/extensionClasses/routerDecorated';
import { objectHelper } from '../../../../../Core/helpers/others/objectHelper';
import { clientService } from '../../../../../Core/services/clientService';
import { FieldValidationMarkComponent } from '../../../../widgets/form/field-validation-mark/field-validation-mark.component';
import { FieldValidationMessageComponent } from '../../../../widgets/form/field-validation-message/field-validation-message.component';
import { FormSubmitButtonComponent } from '../../../../widgets/form/form-submit-button/form-submit-button.component';

@Component({
  selector: 'edit-client-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FieldValidationMarkComponent,
    FieldValidationMessageComponent,
    FormSubmitButtonComponent
  ],
  templateUrl: './edit-client-form.component.html',
  styleUrl: './edit-client-form.component.css'
})
export class EditClientFormComponent implements OnInit {
  // Services
  private clientService: clientService;

  // Router Modules
  public router: routerDecorated;
  private route: ActivatedRoute;

  // Controls of the form
  private formBuilder: FormBuilder;
  public mainForm: FormGroup;

  constructor(
    clientService: clientService,
    router: routerDecorated,
    route: ActivatedRoute
  ) 
  {
    // Injections
    this.formBuilder = inject(FormBuilder);

    // Initialize vars
    this.mainForm = this.getFormControls();
    this.clientService = clientService;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    // First load the parameters
    this.loadParameters().subscribe((params: any) => {
      // Second Load the product Model
      this.loadClientToEdit(params['documentId']).subscribe((editModel: editClientModel) => {
        // Load the data in the form control
        this.mainForm.patchValue(editModel);
      });
    });
  }


  // Get the client to edit
  private loadClientToEdit(documentId: string): Observable<editClientModel> {
    return this.clientService.getEditModel(documentId).pipe(
      map((editModel: editClientModel | undefined) => editModel ?? {} as editClientModel)
    );
  }

  private loadParameters(): Observable<any> {
    return this.route.params.pipe(map((params: any) => params));
  }

  // Edit the product
  public update(): void {
    this.clientService.update(
      objectHelper.mapMatchingProperties(new editClientRequest(), this.mainForm.value), 
      this.documentId.value
    )
    .subscribe(() => this.router.navigate([this.router.routes.LIST_CLIENTS]));
  }

  // get the forom controls and validations
  private getFormControls(): FormGroup {
    return this.formBuilder.group({
      documentId: '',
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      isActive: false
    });
  }

  // Getters of controls form
  get documentId() {
    return this.mainForm.get('documentId')!;
  }
  get name() {
    return this.mainForm.get('name')!;
  }
  get phoneNumber() {
    return this.mainForm.get('phoneNumber')!;
  }
  get isActive() {
    return this.mainForm.get('isActive')!;
  }
}
