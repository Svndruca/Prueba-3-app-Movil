import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionLogoutGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')===null) {
      
      localStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }
    else{
      return true;
    }

    
    
  }
}// lo implementare como mejora