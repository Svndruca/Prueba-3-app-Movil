import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.page.html',
  styleUrls: ['./cambio-contrasena.page.scss'],
})
export class CambioContrasenaPage {
  usuario: string = '';
  contrasenaNueva: string = '';
  confirmarContrasena: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private authService: AuthService  
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.usuario = params['usuario'] || ''; 
    });
  }

  cambiarContrasena() {
    if (this.contrasenaNueva !== this.confirmarContrasena) {
      this.mostrarAlerta('Las contraseñas no coinciden. Favor intentar nuevamente.');
    } else {
     
      this.authService.cambiarContrasena(this.usuario, this.contrasenaNueva).subscribe(
        (response: any) => {
          if (response.authenticated) {
            this.mostrarAlerta('Contraseña cambiada exitosamente.');
            this.router.navigate(['/login']);
          } else {
            this.mostrarAlerta('Error de autenticación. La contraseña actual no es correcta.');
          }
        },
        (error) => {
          console.error('Error:', error);
          this.mostrarAlerta('Error al intentar cambiar la contraseña.');
        }
      );
    }
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
