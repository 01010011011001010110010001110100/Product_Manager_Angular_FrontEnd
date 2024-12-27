import { Component, OnInit } from '@angular/core';
import { productService } from '../../../services/productService';
import { productModel } from '../../../DTOS/models/product/productModel';
import { RouterLink } from '@angular/router';
import { routerDecorated } from '../../../helpers/extensionClasses/routerDecorated';
import { DeleteModalComponent } from '../../../components/delete-modal/delete-modal.component';
import { JsonPipe } from '@angular/common';
import { simulateDeleteProductRequest } from '../../../DTOS/request/product/simulateDeleteProductRequest';

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
  private productService: productService


  constructor(
    productService: productService,
    router: routerDecorated
  ) {
    // Initialize variables
    this.products = [];
    this.productService = productService;
    this.router = router;
  }


  ngOnInit(): void {
    this.loadProducts();
  }

  // load Products
  private loadProducts() {
    this.productService.getAllModelFiltered([{property: "isDeleted", value: false}]).subscribe((products) => {
      this.products = products;
    });
  }
   
  // Delete Product
  public deleteProduct(documentId: string) {
    this.productService.simulateDelete(new simulateDeleteProductRequest(), documentId).subscribe(() => {
      // this.router.navigate([this.router.routes.LIST_PRODUCTS]);
    });
  }
}
