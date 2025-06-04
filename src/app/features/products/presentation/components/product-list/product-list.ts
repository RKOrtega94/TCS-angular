import { Component, Input } from '@angular/core';
import { Product } from '../../../domain/product.model'; // Adjusted path
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-product-list',
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  @Input() products: Product[] = [];
}
