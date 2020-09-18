import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EnrolleeComponent } from './components/enrollee/enrollee.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout/layout.component';

@NgModule({
  declarations: [NotFoundComponent, EnrolleeComponent, LayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent, EnrolleeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
