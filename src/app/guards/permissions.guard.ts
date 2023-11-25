import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')!==null) {
      return true; // El usuario ha iniciado sesión y puede acceder.
    } else {
      this.router.navigate(['/login']); // Redirige al inicio de sesión si el usuario no ha iniciado sesión.
      return false; // No permite la navegación a menos que el usuario inicie sesión.
    }
  }

}

