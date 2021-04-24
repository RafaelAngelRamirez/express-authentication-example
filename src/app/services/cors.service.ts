import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CorsService {
  constructor(private http: HttpClient) {}

  conexion() {
    return this.http
      .get('https://codice-express-authentication.herokuapp.com', {
        responseType: 'text',
      })
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}
