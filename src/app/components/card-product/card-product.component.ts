import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input() ID: number;
  @Input() name: string;
  @Input() detail: string;

  constructor() {
    this.ID = 0;
    this.name = '';
    this.detail = '';
  }
}
