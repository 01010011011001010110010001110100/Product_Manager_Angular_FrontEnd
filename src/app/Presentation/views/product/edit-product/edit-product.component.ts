import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routerDecorated } from '../../../../Core/helpers/extensionClasses/routerDecorated';
import { EditProductFormComponent } from '../../../components/product/form/edit-product-form/edit-product-form.component';

@Component({
  selector: 'app-edit-product',
  imports: [
    RouterLink,
    EditProductFormComponent
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  // Vars
  public router: routerDecorated;

  constructor(router: routerDecorated) {
    // Initialize vars
    this.router = router;
  }
}
