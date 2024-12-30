import { Component, inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FieldValidationMarkComponent } from '../../../../widgets/form/field-validation-mark/field-validation-mark.component';
import { FieldValidationMessageComponent } from '../../../../widgets/form/field-validation-message/field-validation-message.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, forkJoin } from 'rxjs';
import { editProductModel } from '../../../../../Core/DTOS/models/product/editProductModel';
import { editProductRequest } from '../../../../../Core/DTOS/request/product/editProductRequest';
import { typeCurrencyEntity } from '../../../../../Core/entities/typeCurrencyEntity';
import { typePaymentEntity } from '../../../../../Core/entities/typePaymentEntity';
import { routerDecorated } from '../../../../../Core/helpers/extensionClasses/routerDecorated';
import { formFieldsValidatorHelper } from '../../../../../Core/helpers/others/formFieldsValidatorsHelper';
import { objectHelper } from '../../../../../Core/helpers/others/objectHelper';
import { productService } from '../../../../../Core/services/productService';
import { typeCurrencyService } from '../../../../../Core/services/typeCurrencyService';
import { typePaymentService } from '../../../../../Core/services/typePaymentService';
import { FormSubmitButtonComponent } from '../../../../widgets/form/form-submit-button/form-submit-button.component';

@Component({
  selector: 'edit-product-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FieldValidationMarkComponent,
    FieldValidationMessageComponent,
    FormSubmitButtonComponent
  ],
  templateUrl: './edit-product-form.component.html',
  styleUrl: './edit-product-form.component.css',
})
export class EditProductFormComponent implements OnInit {
  // Lists
  public listTypeCurrencies: typeCurrencyEntity[];
  public listTypePayments: typePaymentEntity[];

  // Services
  private productService: productService;
  private typeCurrencyService: typeCurrencyService;
  private typePaymentService: typePaymentService;

  // Router Modules
  public router: routerDecorated;
  private route: ActivatedRoute;

  // Controls form
  private formBuilder: FormBuilder;
  public mainForm: FormGroup;

  constructor(
    productService: productService,
    typeCurrencyService: typeCurrencyService,
    typePaymentService: typePaymentService,
    router: routerDecorated,
    route: ActivatedRoute
  ) {
    // Injections
    this.formBuilder = inject(FormBuilder);

    // Initialize vars
    this.listTypeCurrencies = [];
    this.listTypePayments = [];
    this.mainForm = this.getFormControls();
    this.productService = productService;
    this.typeCurrencyService = typeCurrencyService;
    this.typePaymentService = typePaymentService;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    // First load the parameters
    this.loadParameters().subscribe((params: any) => {
      // Second Load the product Model
      this.loadProductToEdit(params['documentId']).subscribe((editModel: editProductModel) => {
        // Thitd load the lists
        this.fillModelWithCurrenciesAndPayments().subscribe(() => {
          // Load the data in the form control
          this.mainForm.patchValue(editModel);
        });
      });
    });
  }

  // Get the product to edit
  private loadProductToEdit(documentId: string): Observable<editProductModel> {
    return this.productService.getEditModel(documentId).pipe(
      map((editModel: editProductModel | undefined) => editModel ?? {} as editProductModel)
    );
  }

  private loadParameters(): Observable<any> {
    return this.route.queryParams.pipe(map((params: any) => params));
  }

  // Fill the list of the model with the currencies and payments
  private fillModelWithCurrenciesAndPayments(): Observable<void> {
    return forkJoin({
      currencies: this.typeCurrencyService.getAll(),
      payments: this.typePaymentService.getAll(),
    }).pipe(
      map(
        ({
          currencies,
          payments,
        }: {
          currencies: typeCurrencyEntity[];
          payments: typePaymentEntity[];
        }) => {
          this.listTypeCurrencies = currencies;
          this.listTypePayments = payments;
        }
      )
    );
  }

  // Edit the product
  public update(): void {
    // Check if the form is valid
    if (this.mainForm.invalid) return;

    this.productService
      .update(
        objectHelper.mapMatchingProperties(
          new editProductRequest(),
          this.mainForm.value
        ),
        this.documentId.value
      )
      .subscribe(() =>
        this.router.navigate([this.router.routes.LIST_PRODUCTS])
      );
  }

  // get the forom controls and validations
  private getFormControls(): FormGroup {
    return this.formBuilder.group({
      documentId: '',
      name: ['', [Validators.required]],
      detail: ['', [Validators.required]],
      typeCurrencyId: [
        '',
        formFieldsValidatorHelper.forbiddenValues(['0', '']),
      ],
      typePaymentId: ['', formFieldsValidatorHelper.forbiddenValues(['0', ''])],
      implementationCost: [0, [Validators.required]],
      instalationCost: [0, [Validators.required]],
      regularPrice: [0, [Validators.required]],
      advancePrice: [0, [Validators.required]],
      isActive: false,
    });
  }

  // Getters of controls form
  get documentId() {
    return this.mainForm.get('documentId')!;
  }
  get name() {
    return this.mainForm.get('name')!;
  }
  get detail() {
    return this.mainForm.get('detail')!;
  }
  get typeCurrencyId() {
    return this.mainForm.get('typeCurrencyId')!;
  }
  get typePaymentId() {
    return this.mainForm.get('typePaymentId')!;
  }
  get implementationCost() {
    return this.mainForm.get('implementationCost')!;
  }
  get instalationCost() {
    return this.mainForm.get('instalationCost')!;
  }
  get regularPrice() {
    return this.mainForm.get('regularPrice')!;
  }
  get advancePrice() {
    return this.mainForm.get('advancePrice')!;
  }
  get isActive() {
    return this.mainForm.get('isActive')!;
  }
}
