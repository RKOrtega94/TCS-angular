import { Routes } from '@angular/router';
import { productRoutes } from './features/products/presentation/product.routes';

export const routes: Routes = [
  ...productRoutes,
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
