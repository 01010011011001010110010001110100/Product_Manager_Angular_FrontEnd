import { Component, OnInit } from '@angular/core';
import { productService } from '../../services/productService';
import { saveProductModel } from '../../DTOS/models/product/saveProductModel';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { typeCurrencyService } from '../../services/typeCurrencyService';
import { typePaymentService } from '../../services/typePaymentService';
import { typeCurrencyEntity } from '../../entities/typeCurrencyEntity';
import { typePaymentEntity } from '../../entities/typePaymentEntity';
import { Observable, forkJoin, map } from 'rxjs';
import { editProductModel } from '../../DTOS/models/product/editProductModel';


@Component({
  selector: 'app-save-product',
  imports: [
    FormsModule
  ],
  templateUrl: './save-product.component.html',
  styleUrl: './save-product.component.css'
})
export class SaveProductComponent implements OnInit{

  // Vars
  public model: any;
  public editMode: boolean;

  // Lists
  private currentCurrencies: typeCurrencyEntity[];
  private currentPayments: typePaymentEntity[];

  constructor(
    private productService: productService,
    private typeCurrencyService: typeCurrencyService,
    private typePaymentService: typePaymentService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  {
    // Initialize vars
    this.currentCurrencies = [];
    this.currentPayments = [];
    this.model = new saveProductModel();
    this.editMode = false;
  }

  ngOnInit(): void {
    // create and fill lists
    this.route.queryParams.subscribe((params) => {

      // Id product
      let productId = params['Id'];

      // Set if the save goes in edit mode
      this.editMode = productId != undefined;

      // When list were loaded, load the model
      this.loadListValues().subscribe(() => {
        if (this.editMode) 
        {
          this.productService.getEditModel(productId).subscribe((model: editProductModel | null) => {
            if (model) {
              this.model = model;
              this.model.documentId = productId;
              this.loadListValuesInModel();
            }
          });
        } 
        else 
        {
          this.model = new saveProductModel();
          this.loadListValuesInModel();
        }
      });

    });

  }



  //#region Functions only for model

  // Load the list of things that we need to shwo
  private loadListValues(): Observable<void> {
    return forkJoin([
      this.typeCurrencyService.getAll(),
      this.typePaymentService.getAll()
    ]).pipe(
      map(([currencies, payments]) => {
        this.currentCurrencies = currencies;
        this.currentPayments = payments;
      })
    );
  }

  // Just load tye list in model
  private loadListValuesInModel(): void {
    this.model.listTypeCurrencies = this.currentCurrencies;
    this.model.listTypePayments = this.currentPayments;
  }

  //#endregion


  // Create the product and go to the lists
  public create(): void {
    this.productService.add(this.model).subscribe(() => {
      this.router.navigate(['/list-products']);
    });
  }

  // Edit the product
  public update(): void {
    this.productService.update(this.model).subscribe(() => {
      this.router.navigate(['/list-products']);
    });
  }
  
  // Delete the product
  public delete(): void {
    this.productService.delete(this.model.documentId).subscribe(() => {
      this.router.navigate(['/list-products']);
    });
  }
}
