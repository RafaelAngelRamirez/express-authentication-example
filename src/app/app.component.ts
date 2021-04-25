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

  obtenerHora() {
    let hh = new Date().getHours();
    let mm = new Date().getMinutes();

    return `${hh}:${mm}`;
  }

  publicar(datos: any) {
    this.resultado.unshift([this.obtenerHora(), datos]);
  }

  ejecutar() {
    if (this.cargando) return;
    this.cargando = true;
    this.corsService.conexion().subscribe(
      (r) => {
        this.cargando = false;
        this.publicar(r);
      },
      () => (this.cargando = false)
    );
  }

  usuario: string = 'usuario';
  password: string = 'password';

  token() {
    if (this.cargando) return;
    this.cargando = true;
    this.corsService
      .token({ usuario: this.usuario, password: this.password })
      .subscribe(
        (token) => {
          this.cargando = false;
          this.publicar(token);
        },
        () => (this.cargando = false)
      );
  }
}
