import { Component, OnInit } from '@angular/core';
import { deleteProductModel } from '../../DTOS/models/product/deleteProductModel';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { productService } from '../../services/productService';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: productService
  ) 
  {
    this.model = new deleteProductModel();
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
        // Load parameters in the model
        this.model.documentId = params['Id'];
        this.model.name = params['Name'];
    });
  }


  // Delete the product
  public delete(): void {
    this.productService.delete(this.model).subscribe(() => {
      this.router.navigate(['/list-products']);
    });
  }
  
}
