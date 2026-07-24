import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, retry, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    retry(2),
    catchError((error) => {
      if (error.status === 401) {
        alert('Unauthorized request - redirecting to Home.');
        router.navigate(['/']);
      } else if (error.status === 500) {
        alert('Internal server error (500) occurred.');
      }
      return throwError(() => error);
    })
  );
};
