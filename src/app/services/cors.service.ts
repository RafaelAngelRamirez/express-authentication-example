import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CorsService {
  constructor(private http: HttpClient) {}

  url = 'https://codice-express-authentication.herokuapp.com';
  // url = 'http://127.0.0.1:3000';

  conexion() {
    return this.http
      .get(this.url, {
        responseType: 'text',
      })
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      );
  }

  token(credenciales: any) {
    return this.http.post(this.url.concat('/login'), credenciales).pipe(
      map((res: any) => {
        localStorage.setItem('token', res.token);
        return res.token;
      })
    );
  }
}
