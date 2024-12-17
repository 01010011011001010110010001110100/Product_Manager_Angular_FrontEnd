import { Component } from '@angular/core';
import { productService } from '../../../services/productService';
import { productModel } from '../../../DTOS/models/product/productModel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'list-products',
  imports: [
    RouterLink
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  public products: productModel[];

  constructor(private service: productService) {
  // Initialize variables
  this.products = [];

  // Fill with productz
  service.getAllModelFiltered([{property: "isDeleted", value: false}]).subscribe((products) => {
    this.products = products;
  });
  }
   
}
