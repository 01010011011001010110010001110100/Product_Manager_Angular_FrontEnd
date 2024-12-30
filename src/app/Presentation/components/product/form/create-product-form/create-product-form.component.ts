import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FieldValidationMarkComponent } from '../../../../widgets/form/field-validation-mark/field-validation-mark.component';
import { FieldValidationMessageComponent } from '../../../../widgets/form/field-validation-message/field-validation-message.component';
import { routerDecorated } from '../../../../../Core/helpers/extensionClasses/routerDecorated';
import { productService } from '../../../../../Core/services/productService';
import { typeCurrencyService } from '../../../../../Core/services/typeCurrencyService';
import { typePaymentService } from '../../../../../Core/services/typePaymentService';
import { createProductRequest } from '../../../../../Core/DTOS/request/product/createProductRequest';
import { typeCurrencyEntity } from '../../../../../Core/entities/typeCurrencyEntity';
import { typePaymentEntity } from '../../../../../Core/entities/typePaymentEntity';
import { formFieldsValidatorHelper } from '../../../../../Core/helpers/others/formFieldsValidatorsHelper';
import { objectHelper } from '../../../../../Core/helpers/others/objectHelper';
import { FormSubmitButtonComponent } from '../../../../widgets/form/form-submit-button/form-submit-button.component';

@Component({
  selector: 'create-product-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FieldValidationMarkComponent,
    FieldValidationMessageComponent,
    FormSubmitButtonComponent
  ],
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.css',
})
export class CreateProductFormComponent implements OnInit {
  // Lists
  public listTypeCurrencies: typeCurrencyEntity[];
  public listTypePayments: typePaymentEntity[];

  // Services
  private productService: productService;
  private typeCurrencyService: typeCurrencyService;
  private typePaymentService: typePaymentService;

  // Router Modules
  public router: routerDecorated;

  // Controls of the form
  private formBuilder: FormBuilder;
  public mainForm: FormGroup;

  constructor(
    productService: productService,
    typeCurrencyService: typeCurrencyService,
    typePaymentService: typePaymentService,
    router: routerDecorated
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
  }

  ngOnInit(): void {
    this.fillModelWithCurrenciesAndPayments();
  }

  // Fill the list of the model with the currencies and payments
  private fillModelWithCurrenciesAndPayments(): void {
    // Currencies
    this.typeCurrencyService
      .getAll()
      .subscribe(
        (currencies: typeCurrencyEntity[]) =>
          (this.listTypeCurrencies = currencies)
      );

    // Payments
    this.typePaymentService
      .getAll()
      .subscribe(
        (payments: typePaymentEntity[]) =>
          (this.listTypePayments = payments)
      );
  }

  // Create the product and return to the list products
  public create(): void {
    // Check if the form is valid
    if (this.mainForm.invalid) return;

    this.productService
      .add(
        objectHelper.mapMatchingProperties(
          new createProductRequest(),
          this.mainForm.value
        )
      )
      .subscribe(() =>
        this.router.navigate([this.router.routes.LIST_PRODUCTS])
      );
  }

  // get the forom controls and validations
  private getFormControls(): FormGroup {
    return this.formBuilder.group({
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
    });
  }

  // Getters of controls form
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
}
