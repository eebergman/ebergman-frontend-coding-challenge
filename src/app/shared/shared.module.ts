import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../modules/material/material.module';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
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
    EditDialogComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  exports: [LayoutComponent, EnrolleeComponent, EditDialogComponent],
  entryComponents: [EditDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
