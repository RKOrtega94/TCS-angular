import { ProductRepositoryImpl } from './features/products/data/repositories/product.repository.impl';

export const APP_PROVIDERS = [
  {
    provide: 'IProductRepository',
    useClass: ProductRepositoryImpl,
  },
];
