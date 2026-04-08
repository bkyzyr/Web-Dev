import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card', 
  standalone: true,
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.product.id);
  }
  like(){
    this.product.likes++;
  }
  
}