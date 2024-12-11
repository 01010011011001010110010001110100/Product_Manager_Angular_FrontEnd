import { Component, inject } from '@angular/core';
import { productEntity } from '../../entities/productEntity';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { productService } from '../../services/productService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    this.products = service.getAll();
   }
   
}
