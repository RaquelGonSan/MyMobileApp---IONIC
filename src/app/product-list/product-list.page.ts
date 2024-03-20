import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.interface';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule ,IonicModule, RouterLink]
})
export class ProductListPage implements OnInit{

  products: Product[] = [];
  productService = inject(ProductsService)

  constructor() { }

  async ngOnInit() {
    const response = await this.productService.getAllProducts();
    this.products = response.results;
  }


}
