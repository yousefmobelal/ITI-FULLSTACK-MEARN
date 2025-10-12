import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductModel } from '../../models/ProductModel';
import { CommonModule } from '@angular/common';
import { FavoriteProducts } from '../favorite-products/favorite-products';

@Component({
  selector: 'app-product-dashboard',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, FavoriteProducts],
  templateUrl: './product-dashboard.html',
  styleUrl: './product-dashboard.css',
})
export class ProductDashboard implements OnInit {
  productForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [
        '',
        {
          validators: [Validators.required, Validators.maxLength(30)],
          updateOn: 'change',
        },
      ],
      price: [
        '',
        {
          validators: [Validators.required, Validators.min(0)],
          updateOn: 'change',
        },
      ],
      category: [
        '',

        {
          validators: [Validators.required, Validators.maxLength(20)],
          updateOn: 'change',
        },
      ],
    });
  }

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
    this.productForm.setValue({
      name: product.name,
      price: product.price,
      category: product.category,
    });
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

    product.name = this.productForm.value.name!;
    product.price = this.productForm.value.price!;
    product.category = this.productForm.value.category!;

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
      this.productForm.value.name!,
      this.productForm.value.price!,
      this.productForm.value.category!
    );
    this.products.push(newProduct);
    this.resetInputs();
  }

  resetInputs(): void {
    this.productForm.reset();
  }

  areInputsValid(): boolean {
    console.log(this.productForm.get('name')?.errors);
    return this.productForm.valid;
  }

  isRequired(controlName: string): boolean {
    const control = this.productForm.get(controlName);
    return control?.hasError('required') ?? false;
  }

  isExceedingMaxLength(controlName: string): boolean {
    const control = this.productForm.get(controlName);
    return control?.hasError('maxlength') ?? false;
  }
  isBelowMin(controlName: string): boolean {
    const control = this.productForm.get(controlName);
    return control?.hasError('min') ?? false;
  }
}
