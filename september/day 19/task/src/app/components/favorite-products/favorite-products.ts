import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';

@Component({
  selector: 'app-favorite-products',
  imports: [],
  templateUrl: './favorite-products.html',
  styleUrl: './favorite-products.css',
})
export class FavoriteProducts {
  @Input() favoriteProducts: ProductModel[] = [];
}
