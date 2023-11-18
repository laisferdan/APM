import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    ConvertToSpacesPipe
  ],
  imports: [
  ],
  exports: [
    ConvertToSpacesPipe
]
})
export class SharedModule { }
