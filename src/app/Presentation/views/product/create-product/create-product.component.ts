import { Component } from '@angular/core';
import { CreateProductFormComponent } from '../../../components/product/form/create-product-form/create-product-form.component';
import { RouterLink } from '@angular/router';
import { routerDecorated } from '../../../../Core/helpers/extensionClasses/routerDecorated';

@Component({
  selector: 'create-product',
  imports: [
    CreateProductFormComponent,
    RouterLink
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent { 
  // Vars
  public router: routerDecorated;

  constructor(router: routerDecorated) {
    // Initialize variables
    this.router = router;
  }
}
