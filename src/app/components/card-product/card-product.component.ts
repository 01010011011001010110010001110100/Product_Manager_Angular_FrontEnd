import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card-product',
  imports: [
    RouterLink
  ],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input() documentId?: string;
  @Input() name?: string;
  @Input() detail?: string;
}
