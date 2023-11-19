import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/pages/product-list/product-list.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: ProductListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
