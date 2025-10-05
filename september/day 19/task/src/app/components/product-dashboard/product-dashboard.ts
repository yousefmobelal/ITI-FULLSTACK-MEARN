import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  products: Product[] = [];
  favoriteProducts: string[] = [];
  editingProductId: string | null = null;

  get isUpdating(): boolean {
    return this.editingProductId !== null;
  }

  isCurrentProductUpdating(productId: string): boolean {
    return this.editingProductId === productId;
  }

  chooseProductTobeUpdated(product: Product) {
    this.editingProductId = product.id;
    this.productName = product.name;
    this.productPrice = product.price;
    this.productCategory = product.category;
  }

  isFavorite(productId: string): boolean {
    return this.favoriteProducts.includes(productId);
  }

  toggleFavorite(productId: string) {
    const index = this.favoriteProducts.indexOf(productId);
    if (index > -1) {
      this.favoriteProducts.splice(index, 1);
    } else {
      this.favoriteProducts.push(productId);
    }
  }

  deleteProduct(productId: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.products = this.products.filter((p) => p.id !== productId);
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

    const newProduct = new Product(
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

class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public category: string
  ) {}
}
