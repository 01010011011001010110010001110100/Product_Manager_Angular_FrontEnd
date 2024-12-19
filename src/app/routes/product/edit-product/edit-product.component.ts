import { Component, OnInit } from '@angular/core';
import { editProductModel } from '../../../DTOS/models/product/editProductModel';
import { productService } from '../../../services/productService';
import { typeCurrencyService } from '../../../services/typeCurrencyService';
import { typePaymentService } from '../../../services/typePaymentService';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { typeCurrencyEntity } from '../../../entities/typeCurrencyEntity';
import { typePaymentEntity } from '../../../entities/typePaymentEntity';
import { objectHelper } from '../../../helpers/objectHelper';
import { editProductRequest } from '../../../DTOS/request/product/editProductRequest';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  imports: [
    FormsModule,
    RouterLink
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
    this.model = new editProductModel();
    this.productService = productService;
    this.typeCurrencyService = typeCurrencyService;
    this.typePaymentService = typePaymentService;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    // Get the product to edit then fill with the list of currencies and payments
    this.getProductToEdit().subscribe(() => this.fillModelWithCurrenciesAndPayments());
  }

  // Get the product to edit
  private getProductToEdit(): Observable<any> {
    return this.route.queryParams.pipe(
      map((params: any) => {
        const productDocumentId: string = params['documentId']

        this.productService.getEditModel(productDocumentId).subscribe(
          (editModel: editProductModel | undefined) => {
            if (editModel) {
              this.model = editModel
            }
          }
        );
      }) 
    );
  }

  // Fill the list of the model with the currencies and payments
  private fillModelWithCurrenciesAndPayments(): void {
    // Currencies
    this.typeCurrencyService.getAll().subscribe((currencies: typeCurrencyEntity[]) => this.model.listTypeCurrencies = currencies);

    // Payments
    this.typePaymentService.getAll().subscribe((payments: typePaymentEntity[]) => this.model.listTypePayments = payments);
  }


  // Edit the product
  public update(): void {
    this.productService.update(
      objectHelper.mapMatchingProperties(new editProductRequest(), this.model), this.model.documentId
    )
    .subscribe(() => this.router.navigate(['/list-products']));
  }
  
}
