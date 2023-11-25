import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoading: boolean = false;
  currentPage: string = 'RegistrQR';
  usuario: string = '';

  constructor(
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const usuario = localStorage.getItem('username')
    if(usuario!==null){
      this.usuario=usuario
  }}

 
  salir(): void {
    // Elimina los datos del localStorage
    localStorage.clear();

    // Redirige al usuario a la página de inicio de sesión (login)
    this.router.navigate(['/login']);
  }



  toggleMenu() {
    this.menuCtrl.toggle();
  }

  redirectTo(page: string) {
    this.menuCtrl.close();
    this.router.navigate([page], { queryParams: { usuario: this.usuario } });
    this.currentPage = page === 'estudiante' ? 'Estudiante' : 'Escanear QR';
  }

  redireccionarAHome() {
    this.isLoading = true; 

    setTimeout(() => {
      this.isLoading = false;
    }, 9000); // segundos
  }
}



















