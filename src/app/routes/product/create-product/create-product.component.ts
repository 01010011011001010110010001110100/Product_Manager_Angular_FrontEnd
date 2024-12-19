import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

}
