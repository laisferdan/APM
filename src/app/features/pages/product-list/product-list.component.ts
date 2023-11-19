import { IProduct } from './../../../core/models/product.interface';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  public pageTitle: string = 'Product List';
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public showImage: boolean = false;

  private _listFilter = '';
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  public filteredProducts: IProduct[] = [];
  public products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  public onRatingClick(message: string): void {
    this.pageTitle = 'Product list: ' + message;
  }

  public performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
