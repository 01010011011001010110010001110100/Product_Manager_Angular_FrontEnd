import { Component, inject } from '@angular/core';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { productService } from '../../services/productService';
import { productModel } from '../../DTOS/models/product/productModel';

@Component({
  selector: 'list-products',
  imports: [
    CardProductComponent
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

   public products: productModel[];

   constructor(public service: productService) {
    // Initialize variables
    this.products = [];

    // Fill with productz
    service.getAll().subscribe((products) => {
      this.products = products;
    });
   }
   
}
