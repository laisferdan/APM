import {Routes} from '@angular/router';
import { ProductListComponent } from './features/pages/product-list/product-list.component';
import { ProductDetailComponent } from './features/pages/product-detail/product-detail.component';
import { HomeComponent } from './features/pages/home/home.component';
import { PageNotFoundComponent } from './features/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
