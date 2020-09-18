import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const components = [];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...components],
  exports: [...components],
})
export class MaterialModule {}
