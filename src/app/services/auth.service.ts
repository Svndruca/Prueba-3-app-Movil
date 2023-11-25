

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000';  

  constructor(private http: HttpClient) {}

  cambiarContrasena(usuario: string, nuevaContrasena: string): Observable<any> {
    const url = `${this.apiUrl}/cambio-contrasena`;

    
    return this.http.post(url, { usuario, nuevaContrasena });
  }
}
