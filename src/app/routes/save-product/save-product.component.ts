import { Component } from '@angular/core';
import { productService } from '../../services/productService';
import { saveProductModel } from '../../DTOS/models/product/saveProductModel';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { typeCurrencyService } from '../../services/typeCurrencyService';
import { typePaymentService } from '../../services/typePaymentService';


@Component({
  selector: 'app-save-product',
  imports: [
    FormsModule
  ],
  templateUrl: './save-product.component.html',
  styleUrl: './save-product.component.css'
})
export class SaveProductComponent {

  public model: saveProductModel;

  constructor(
    private productService: productService,
    private typeCurrencyService: typeCurrencyService,
    private typePaymentService: typePaymentService,
    private router: Router
  ) 
  {
    // create and fill lists
    this.model = new saveProductModel();
    this.model.listTypeCurrencies = this.typeCurrencyService.getAll();
    this.model.listTypePayments = typePaymentService.getAll();
  }

  // Create the product and go to the lists
  public create(): void {
    this.productService.add(this.model).subscribe(() => {
      this.router.navigate(['/list-products']);
    });
  }
  
}
