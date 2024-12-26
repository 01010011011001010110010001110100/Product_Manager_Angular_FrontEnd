import { Component, OnInit } from '@angular/core';
import { productService } from '../../../services/productService';
import { productModel } from '../../../DTOS/models/product/productModel';
import { RouterLink } from '@angular/router';
import { routerDecorated } from '../../../helpers/extensionClasses/routerDecorated';
import { DeleteModalComponent } from '../../../components/delete-modal/delete-modal.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'list-products',
  imports: [
    RouterLink,
    DeleteModalComponent,
    JsonPipe
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {

  // Variables
  public products: productModel[];

  // Routers
  public router: routerDecorated;

  // Services
  private service: productService


  constructor(
    service: productService,
    router: routerDecorated
  ) {
    // Initialize variables
    this.products = [];
    this.service = service;
    this.router = router;
  }


  ngOnInit(): void {
    this.loadProducts();
  }

  // load Products
  private loadProducts() {
    this.service.getAllModelFiltered([{property: "isDeleted", value: false}]).subscribe((products) => {
      this.products = products;
    });
  }
   
}
