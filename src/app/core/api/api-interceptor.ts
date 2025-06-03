import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const apiUrl = `${environment.apiUrl}/${req.url}`;
  const apiReq = req.clone({
    url: apiUrl,
  });
  return next(apiReq);
};
