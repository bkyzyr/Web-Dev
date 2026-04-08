import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {

  @Input() product: any;  

  selectedImage: string = '';
  
  ngOnInit() {
    this.selectedImage = this.product.images[0];
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }
  displayFilter(rate: number) {
    
  }
  shareWhatsApp() {
    const message = `Check this product: ${this.product.name} - ${this.product.price}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const message = `Check this product: ${this.product.name} - ${this.product.price}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  amountStar(rate: number): number[] {
    return Array(Math.floor(rate)).fill(0);
  }
}
