import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { createProductModel } from '../../../DTOS/models/product/createProductModel';
import { productService } from '../../../services/productService';
import { typeCurrencyService } from '../../../services/typeCurrencyService';
import { typePaymentService } from '../../../services/typePaymentService';
import { typeCurrencyEntity } from '../../../entities/typeCurrencyEntity';
import { typePaymentEntity } from '../../../entities/typePaymentEntity';
import { objectHelper } from '../../../helpers/objectHelper';
import { createProductRequest } from '../../../DTOS/request/product/createProductRequest';

@Component({
  selector: 'app-create-product',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink
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
    private router: Router;
    private route: ActivatedRoute;

    // Controls of the form
    public mainForm: FormGroup;


    constructor(
      productService: productService,
      typeCurrencyService: typeCurrencyService,
      typePaymentService: typePaymentService,
      router: Router,
      route: ActivatedRoute
    ) {
      // Initialize vars
      this.model = new createProductModel();
      this.productService = productService;
      this.typeCurrencyService = typeCurrencyService;
      this.typePaymentService = typePaymentService;
      this.router = router;
      this.route = route;
      this.mainForm = this.getFormControls();
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
      this.productService.add(
        objectHelper.mapMatchingProperties(new createProductRequest(), this.model)
      )
      .subscribe(() => this.router.navigate(['/list-products']));
    }


    // get the forom controls and validations
    private getFormControls(): FormGroup {

      // Validators
      const validatorNoLetters: ValidatorFn = Validators.pattern('^\d+$');
      const validatorNoCero: ValidatorFn = Validators.max(0);
      
      return new FormGroup({
        name: new FormControl(this.model.name, [Validators.required]),
        detail: new FormControl(this.model.detail, [Validators.required]),
        typeCurrencyId: new FormControl(this.model.typeCurrencyId, [validatorNoCero]),
        typePaymentId: new FormControl(this.model.typePaymentId, [validatorNoCero]),
        implementationCost: new FormControl(this.model.implementationCost, [Validators.required, validatorNoLetters]),
        instalationCost: new FormControl(this.model.instalationCost, [Validators.required, validatorNoLetters]),
        regularPrice: new FormControl(this.model.regularPrice, [Validators.required, validatorNoLetters]),
        advancePrice: new FormControl(this.model.advancePrice, [Validators.required, validatorNoLetters])
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
