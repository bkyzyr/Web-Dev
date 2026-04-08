import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductService } from './models/product.service';
import { ProductListComponent } from './products/product-list/product-list.component/product-list.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedCategoryId: number | null = null;
  categories: any[] = [];
  products: any[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.products = this.productService.getProductsByCategory(id);
  }
}