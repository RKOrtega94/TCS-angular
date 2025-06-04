import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const isProd = environment.apiUrl !== '' && window.location.port !== '4200';
  const apiUrl = isProd ? `${environment.apiUrl}/${req.url}` : req.url;
  const apiReq = req.clone({
    url: apiUrl,
    headers: req.headers,
  });
  return next(apiReq);
};
