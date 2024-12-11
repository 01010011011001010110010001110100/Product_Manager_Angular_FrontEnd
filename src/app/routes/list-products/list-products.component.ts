import { Component } from '@angular/core';
import { IService } from '../../interface/IService';
import { productEntity } from '../../models/productEntity';
import { productService } from '../../services/productService';
import { CardProductComponent } from '../../components/card-product/card-product.component';

@Component({
  selector: 'app-list-products',
  imports: [
    CardProductComponent
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
   private service: IService<productEntity>;
   public products: productEntity[];

   constructor() {

    // Create Servies
    this.service = new productService();

    // Fill datas
    this.products = [
      new productEntity(
        1, 
        'Nombre del Producto', 
        'Detalle del Producto', 
        1, 
        2, 
        100.0, 
        50.0, 
        150.0, 
        120.0, 
        true, 
        false, 
        new Date(), 
        new Date(), 
        null, 
        101
      ),
      new productEntity(
        1, 
        'Nombre del Producto', 
        'Detalle del Producto', 
        1, 
        2, 
        100.0, 
        50.0, 
        150.0, 
        120.0, 
        true, 
        false, 
        new Date(), 
        new Date(), 
        null, 
        101
      ),
      new productEntity(
        1, 
        'Nombre del Producto', 
        'Detalle del Producto', 
        1, 
        2, 
        100.0, 
        50.0, 
        150.0, 
        120.0, 
        true, 
        false, 
        new Date(), 
        new Date(), 
        null, 
        101
      ),
      new productEntity(
        1, 
        'Nombre del Producto', 
        'Detalle del Producto', 
        1, 
        2, 
        100.0, 
        50.0, 
        150.0, 
        120.0, 
        true, 
        false, 
        new Date(), 
        new Date(), 
        null, 
        101
      ),
      new productEntity(
        1, 
        'Nombre del Producto', 
        'Detalle del Producto', 
        1, 
        2, 
        100.0, 
        50.0, 
        150.0, 
        120.0, 
        true, 
        false, 
        new Date(), 
        new Date(), 
        null, 
        101
      ),
      new productEntity(
        1, 
        'Nombre del Producto', 
        'Detalle del Producto', 
        1, 
        2, 
        100.0, 
        50.0, 
        150.0, 
        120.0, 
        true, 
        false, 
        new Date(), 
        new Date(), 
        null, 
        101
      )
    ];

    
    
   }
}
