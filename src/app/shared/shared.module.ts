import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarComponent } from './components/star/star.component';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    ConvertToSpacesPipe,
    StarComponent
  ]
})
export class SharedModule { }
