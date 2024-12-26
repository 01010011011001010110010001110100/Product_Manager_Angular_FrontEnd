import { Component, OnInit } from '@angular/core';
import { deleteProductModel } from '../../../DTOS/models/product/deleteProductModel';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { productService } from '../../../services/productService';
import { simulateDeleteProductRequest } from '../../../DTOS/request/product/simulateDeleteProductRequest';
import { routerDecorated } from '../../../helpers/extensionClasses/routerDecorated';

@Component({
  selector: 'app-delete-product',
  imports: [
    RouterLink
  ],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit{

  // Variables
  public model: deleteProductModel;

  // Routers
  public router: routerDecorated;
  private route: ActivatedRoute

  // Servies
  private productService: productService


  constructor(
    route: ActivatedRoute,
    router: routerDecorated,
    productService: productService
  ) 
  {
    // Initialize vars
    this.model = new deleteProductModel();
    this.productService = productService;
    this.route = route;
    this.router = router;
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
        // Load parameters in the model
        this.model.documentId = params['documentId'];
        this.model.name = params['Name'];
    });
  }


  // Delete the product
  public delete(): void {
    this.productService.simulateDelete(new simulateDeleteProductRequest(), this.model.documentId).subscribe(() => {
      this.router.navigate([this.router.routes.LIST_PRODUCTS]);
    });
  }
  
}
