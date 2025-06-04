import { Routes } from '@angular/router';
import { ProductPage } from './pages/product-page';
import { ProductFormPage } from './pages/product-form-page/product-form-page';

export const productRoutes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductPage,
      },
      {
        path: 'form',
        component: ProductFormPage,
      },
      {
        path: 'form/:id',
        component: ProductFormPage,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
