import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modalcarrito } from '../modalcarrito/modalcarrito.component';
import { UserService } from '../../services/user.service'; 
import { CarritoService } from '../../services/carrito.sevice';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, Modalcarrito],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('ModalCarrito') carritoModalRef!: TemplateRef<any>;
  productosCarrito: any[] = [];

  constructor(
    private router: Router,
    public userService: UserService,
    private modalService: NgbModal,
    private carritoService: CarritoService
  ) {}

  
  abrirModalCarrito() {
   
    this.modalService.open(this.carritoModalRef, { size: 'lg' });
  }

  quitarDelCarrito(index: number) {
    this.productosCarrito.splice(index, 1);
  }

  obtenerTotal(): number {
    return this.productosCarrito.reduce(
      (total, producto) => total + (producto.price * (producto.cantidad || 1)),
      0
    );
  }

  cerrarSesion() {
  this.userService.setUsuario('');
  this.carritoService.vaciarCarrito();
  localStorage.removeItem('usuario');
  localStorage.clear();

    this.router.navigate(['/login']);
  }
}
