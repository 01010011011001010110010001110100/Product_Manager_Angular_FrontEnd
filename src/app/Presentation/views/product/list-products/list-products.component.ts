import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { productService } from '../../../../Core/services/productService';
import { productModel } from '../../../../Core/DTOS/models/product/productModel';
import { RouterLink } from '@angular/router';
import { routerDecorated } from '../../../../Core/helpers/extensionClasses/routerDecorated';
import { DeleteModalComponent } from '../../../widgets/modal/delete-modal/delete-modal.component';
import { simulateDeleteProductRequest } from '../../../../Core/DTOS/request/product/simulateDeleteProductRequest';
import { objectHelper } from '../../../../Core/helpers/others/objectHelper';
import { deleteEntityModel } from '../../../../Core/DTOS/models/generals/deleteEntityModel';
import { DinamicTableComponent } from '../../../widgets/table/dinamic-table/dinamic-table.component';

@Component({
  selector: 'list-products',
  imports: [
    RouterLink,
    DeleteModalComponent,
    DinamicTableComponent
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

  // Components
  @ViewChild(DeleteModalComponent) private deleteModal!: DeleteModalComponent;

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
   

  //#region Controls list Behaviour

  public openDeleteModal(productModel: productModel){
    this.deleteModal.openModal(objectHelper.mapMatchingProperties(new deleteEntityModel(), productModel));
  }

  public deleteProduct(documentId: string) {
    this.productService.simulateDelete(new simulateDeleteProductRequest(), documentId).subscribe(() => {
      this.loadProducts();
    });
  }

  //#endregion
}
