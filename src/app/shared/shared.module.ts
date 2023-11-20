import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarComponent } from './components/star/star.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  exports: [
    ConvertToSpacesPipe,
    StarComponent
  ]
})
export class SharedModule { }
