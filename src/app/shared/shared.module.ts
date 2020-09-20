import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../modules/material/material.module';
import { EnrolleeComponent } from './components/enrollee/enrollee.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout/layout.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    EnrolleeComponent,
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [LayoutComponent, EnrolleeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
