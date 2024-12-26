import { Component, inject, OnInit } from '@angular/core';
import { editProductModel } from '../../../DTOS/models/product/editProductModel';
import { productService } from '../../../services/productService';
import { typeCurrencyService } from '../../../services/typeCurrencyService';
import { typePaymentService } from '../../../services/typePaymentService';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin, map, Observable } from 'rxjs';
import { typeCurrencyEntity } from '../../../entities/typeCurrencyEntity';
import { typePaymentEntity } from '../../../entities/typePaymentEntity';
import { objectHelper } from '../../../helpers/others/objectHelper';
import { editProductRequest } from '../../../DTOS/request/product/editProductRequest';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FieldValidationMarkComponent } from '../../../components/field-validation-mark/field-validation-mark.component';
import { FieldValidationMessageComponent } from '../../../components/field-validation-message/field-validation-message.component';
import { formFieldsValidatorHelper } from '../../../helpers/others/formFieldsValidatorsHelper';
import { routerDecorated } from '../../../helpers/extensionClasses/routerDecorated';

@Component({
  selector: 'app-edit-product',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    FieldValidationMarkComponent,
    FieldValidationMessageComponent
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit{
  // Vars
  public model: editProductModel;

  // Services
  private productService: productService;
  private typeCurrencyService: typeCurrencyService;
  private typePaymentService: typePaymentService;

  // Router Modules
  public router: routerDecorated;
  private route: ActivatedRoute;

  // Controls form
  private formBuilder: FormBuilder
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
    this.model = new editProductModel();
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
      this.loadProductToEdit(params['documentId']).subscribe(() => {
        // Thitd load the lists
        this.fillModelWithCurrenciesAndPayments().subscribe(() => {
          // Load the data in the form control
          this.mainForm.patchValue(this.model);
        });
      });
    });
  }

  // Get the product to edit
  private loadProductToEdit(documentId: string): Observable<any> {
    return this.productService.getEditModel(documentId).pipe(
      map((editModel: editProductModel | undefined) => {
        if (editModel) {
          this.model = editModel
        }
      })
    );
  }

  private loadParameters(): Observable<any> {
    return this.route.queryParams.pipe(
      map((params: any) => params)
    );
  }

  // Fill the list of the model with the currencies and payments
  private fillModelWithCurrenciesAndPayments(): Observable<void> {
    return forkJoin({
      currencies: this.typeCurrencyService.getAll(),
      payments: this.typePaymentService.getAll()
    }).pipe(
      map(({ currencies, payments }: { currencies: typeCurrencyEntity[], payments: typePaymentEntity[] }) => {
        this.model.listTypeCurrencies = currencies;
        this.model.listTypePayments = payments;
      })
    );
  }


  // Edit the product
  public update(): void {

    // Check if the form is valid
    if (this.mainForm.invalid) return;

    this.productService.update(
      objectHelper.mapMatchingProperties(new editProductRequest(), this.model), 
      this.model.documentId
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
      advancePrice: [0, [Validators.required]],
      isActive: [false]
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
  get isActive() { return this.mainForm.get('isActive')!; }

}
