import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../core/models/product.interface';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  public pageTitle: string = 'Product Detail'
  public product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`
  }

  public onBack(): void {
    this.router.navigate(['/products']);
  }
}
