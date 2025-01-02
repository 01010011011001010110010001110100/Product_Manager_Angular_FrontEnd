import { Component, OnInit, ViewChild } from '@angular/core';
import { productService } from '../../../../Core/services/productService';
import { productModel } from '../../../../Core/DTOS/models/product/productModel';
import { RouterLink } from '@angular/router';
import { routerDecorated } from '../../../../Core/helpers/extensionClasses/routerDecorated';
import { DeleteModalComponent } from '../../../widgets/modal/delete-modal/delete-modal.component';
import { simulateDeleteProductRequest } from '../../../../Core/DTOS/request/product/simulateDeleteProductRequest';
import { objectHelper } from '../../../../Core/helpers/others/objectHelper';
import { deleteEntityModel } from '../../../../Core/DTOS/models/generals/deleteEntityModel';
import { DynamicTableComponent } from '../../../widgets/table/dinamic-table/dynamic-table.component';
import { enumProviderService } from '../../../../Core/services/enumProviderService';


@Component({
  selector: 'list-products',
  imports: [
    RouterLink,
    DeleteModalComponent,
    DynamicTableComponent
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {

  // Vars
  public products: productModel[];

  // Routers
  public router: routerDecorated;

  // Services
  private productService: productService
  public enumProviderService: enumProviderService;

  // Components
  @ViewChild(DeleteModalComponent) private deleteModal!: DeleteModalComponent;

  constructor(
    productService: productService,
    enumProviderService: enumProviderService,
    router: routerDecorated
  ) {
    // Initialize variables
    this.products = [];
    this.productService = productService;
    this.enumProviderService = enumProviderService;
    this.router = router;
  }


  ngOnInit(): void {
    this.loadProducts();
  }

  // load Products
  private loadProducts(): void {
    this.productService.getAllModelFiltered([{property: "isDeleted", value: false}]).subscribe((products) => {
      this.products = products;
    });
  }
  
  // Delete modal
  public openDeleteModal(productModel: productModel): void{
    this.deleteModal.openModal(objectHelper.mapMatchingProperties(new deleteEntityModel(), productModel));
  }

  // Delete the product
  public deleteProduct(documentId: string): void {
    this.productService.simulateDelete(new simulateDeleteProductRequest(), documentId).subscribe(() => {
      this.loadProducts();
    });
  }

}
