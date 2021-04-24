import { Component } from '@angular/core';
import { CorsService } from './services/cors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cargando = false;
  title = 'express-authentication-example';
  resultado = [];
  constructor(private corsService: CorsService) {}

  ejecutar() {
    this.cargando = true;
    this.corsService.conexion().subscribe(
      (r) => {
        this.cargando = false;
        this.resultado.push(r);
      },
      () => (this.cargando = false)
    );
  }
}
