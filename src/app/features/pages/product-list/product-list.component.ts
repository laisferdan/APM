import { IProduct } from './../../../core/models/product.interface';
import { FormsModule } from '@angular/forms';
import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ProductService } from '../../../shared/services/product.service';
import { Subscription } from 'rxjs';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule, ProductDetailComponent, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  public pageTitle: string = 'Product List';
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public showImage: boolean = false;
  public errorMessage: string = '';
  public sub!: Subscription;

  public listFilter = signal('');
  public filteredProducts = computed(() => this.performFilter(this.listFilter()));
  public products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onFilterChange(value: string) {
    this.listFilter.set(value);
  }

  public onRatingClick(message: string): void {
    this.pageTitle = 'Product list: ' + message;
  }

  public performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
