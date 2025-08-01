import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../services/snackbar.service';


export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackbar = inject(SnackbarService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('HTTP Error:', error);

      if (error.status >= 400 && error.status < 500) {
        console.log('Ocurrió un error del cliente');
        console.log(error.error.message);
        snackbar?.show(`Ups, ocurrió un error! ${error.error.message}`);
      } else if (error.status >= 500) {
        console.log('Error del servidor, intenta más tarde');
        snackbar?.show('Ups, Tuvimos un error procesando tu solicitud!');
      } else if (error.status === 0) {
        snackbar?.show('Ups, error de conexión!');
      }

      return throwError(() => error);
    })
  );
};
