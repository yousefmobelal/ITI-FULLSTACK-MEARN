import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductModel } from '../../models/ProductModel';

@Component({
  selector: 'app-product-dashboard',
  imports: [FormsModule],
  templateUrl: './product-dashboard.html',
  styleUrl: './product-dashboard.css',
})
export class ProductDashboard {
  productName: string = '';
  productPrice: number | null = null;
  productCategory: string = '';

  products: ProductModel[] = [];
  favoriteProductsIds: string[] = [];
  editingProductId: string | null = null;

  get favoriteProducts(): ProductModel[] {
    return this.products.filter((p) => this.favoriteProductsIds.includes(p.id));
  }

  get isUpdating(): boolean {
    return this.editingProductId !== null;
  }

  isCurrentProductUpdating(productId: string): boolean {
    return this.editingProductId === productId;
  }

  chooseProductTobeUpdated(product: ProductModel) {
    if (this.editingProductId == product.id) {
      this.editingProductId = null;
      this.resetInputs();
      return;
    }
    this.editingProductId = product.id;
    this.productName = product.name;
    this.productPrice = product.price;
    this.productCategory = product.category;
  }

  isFavorite(productId: string): boolean {
    return this.favoriteProductsIds.includes(productId);
  }

  toggleFavorite(productId: string) {
    const index = this.favoriteProductsIds.indexOf(productId);
    if (index > -1) {
      this.favoriteProductsIds.splice(index, 1);
    } else {
      this.favoriteProductsIds.push(productId);
    }
  }

  deleteProduct(productId: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      if (this.editingProductId === productId) {
        this.editingProductId = null;
        this.resetInputs();
      }
      this.products = this.products.filter((p) => p.id !== productId);
      this.favoriteProductsIds = this.favoriteProductsIds.filter((id) => id !== productId);
    }
  }

  updateProduct() {
    if (!this.areInputsValid()) {
      return;
    }

    const product = this.products.find((p) => p.id === this.editingProductId);
    if (!product) {
      alert('Product not found!');
      return;
    }

    product.name = this.productName;
    product.price = this.productPrice!;
    product.category = this.productCategory;

    this.editingProductId = null;
    this.resetInputs();
    this.products = this.products.map((p) => (p.id === product.id ? product : p));
  }

  addProduct() {
    if (!this.areInputsValid()) {
      return;
    }

    const newProduct = new ProductModel(
      Date.now().toLocaleString(),
      this.productName,
      this.productPrice!,
      this.productCategory
    );
    this.products.push(newProduct);
    this.resetInputs();
  }

  resetInputs(): void {
    this.productName = '';
    this.productPrice = null;
    this.productCategory = '';
  }

  areInputsValid(): boolean {
    if (!this.productName) {
      alert('Product name is required.');
      return false;
    }

    if (!this.productPrice) {
      alert('Product price must be greater than zero.');
      return false;
    }
    if (!this.productCategory) {
      alert('Product category is required.');
      return false;
    }

    return true;
  }
}
