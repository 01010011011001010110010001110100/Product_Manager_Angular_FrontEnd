import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { createProductModel } from '../../../DTOS/models/product/createProductModel';
import { productService } from '../../../services/productService';
import { typeCurrencyService } from '../../../services/typeCurrencyService';
import { typePaymentService } from '../../../services/typePaymentService';
import { typeCurrencyEntity } from '../../../entities/typeCurrencyEntity';
import { typePaymentEntity } from '../../../entities/typePaymentEntity';
import { objectHelper } from '../../../helpers/others/objectHelper';
import { createProductRequest } from '../../../DTOS/request/product/createProductRequest';
import { FieldValidationMarkComponent } from '../../../components/field-validation-mark/field-validation-mark.component';
import { FieldValidationMessageComponent } from '../../../components/field-validation-message/field-validation-message.component';
import { formFieldsValidatorHelper } from '../../../helpers/others/formFieldsValidatorsHelper';
import { routerDecorated } from '../../../helpers/extensionClasses/routerDecorated';

@Component({
  selector: 'create-product',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    FieldValidationMarkComponent,
    FieldValidationMessageComponent
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{

    // Vars
    public model: createProductModel;

    // Services
    private productService: productService;
    private typeCurrencyService: typeCurrencyService;
    private typePaymentService: typePaymentService;

    // Router Modules
    public router: routerDecorated;

    // Controls of the form
    private formBuilder: FormBuilder
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
      this.model = new createProductModel();
      this.mainForm = this.getFormControls();
      this.productService = productService;
      this.typeCurrencyService = typeCurrencyService;
      this.typePaymentService = typePaymentService;
      this.router = router;


      this.typeCurrencyId.events.subscribe((event) => {
        console.log(event);
      });
    }


    ngOnInit(): void {
      this.fillModelWithCurrenciesAndPayments();
    }


    // Fill the list of the model with the currencies and payments
    private fillModelWithCurrenciesAndPayments(): void {
      // Currencies
      this.typeCurrencyService.getAll().subscribe((currencies: typeCurrencyEntity[]) => this.model.listTypeCurrencies = currencies);

      // Payments
      this.typePaymentService.getAll().subscribe((payments: typePaymentEntity[]) => this.model.listTypePayments = payments);
    }


    // Create the product and return to the list products
    public create(): void {

      // Check if the form is valid
      if (this.mainForm.invalid) return;
      
      this.productService.add(
        objectHelper.mapMatchingProperties(new createProductRequest(), this.mainForm.value)
      )
      .subscribe(() => this.router.navigate([this.router.routes.LIST_PRODUCTS]));
    }


    // get the forom controls and validations
    private getFormControls(): FormGroup {
      return this.formBuilder.group({
        name: ['', [Validators.required]],
        detail: ['', [Validators.required]],
        typeCurrencyId: ['', formFieldsValidatorHelper.forbiddenValues(['0', ''])],
        typePaymentId: ['', formFieldsValidatorHelper.forbiddenValues(['0', ''])],
        implementationCost: [0, [Validators.required]],
        instalationCost: [0, [Validators.required]],
        regularPrice: [0, [Validators.required]],
        advancePrice: [0, [Validators.required]]
      });
    }


    // Getters of controls form
    get name() { return this.mainForm.get('name')!; }
    get detail() { return this.mainForm.get('detail')!; }
    get typeCurrencyId() { return this.mainForm.get('typeCurrencyId')!; }
    get typePaymentId() { return this.mainForm.get('typePaymentId')!; }
    get implementationCost() { return this.mainForm.get('implementationCost')!; }
    get instalationCost() { return this.mainForm.get('instalationCost')!; }
    get regularPrice() { return this.mainForm.get('regularPrice')!; }
    get advancePrice() { return this.mainForm.get('advancePrice')!; }
}
