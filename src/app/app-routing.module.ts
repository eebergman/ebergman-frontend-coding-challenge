import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnrolleeComponent } from './shared/components/enrollee/enrollee.component';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';
import { LayoutComponent } from './shared/components/layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: EnrolleeComponent,
      },
      {
        path: '404',
        component: NotFoundComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
