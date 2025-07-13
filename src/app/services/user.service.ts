import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuario: string = '';

  constructor() {
    const usuarioStorage = localStorage.getItem('usuario');
    if (usuarioStorage) {
      this.usuario = JSON.parse(usuarioStorage);
    }
  }

  setUsuario(nombre: string) {
    this.usuario = nombre;
    localStorage.setItem('usuario', JSON.stringify(nombre));
  }

  getUsuario(): string {
    return this.usuario;    
  }
}
