import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const components = [
  MatTableModule,
  MatCardModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...components],
  exports: [...components],
})
export class MaterialModule {}
