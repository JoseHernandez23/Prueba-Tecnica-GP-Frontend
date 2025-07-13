import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from '../../services/carrito.sevice';

@Component({
  selector: 'app-modalcarrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modalcarrito.component.html',
  styleUrl: './modalcarrito.component.css'
})
export class Modalcarrito {
productosCarrito: any[] = [];

constructor(private carritoService: CarritoService, private modalService: NgbModal) {}

ngOnInit() {
  this.carritoService.productos$.subscribe(productos => {
    this.productosCarrito = productos;
  });
}


cambiarCantidadDesdeEvento(index: number, event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target && target.value) {
    const cantidad = parseInt(target.value, 10);
    if (!isNaN(cantidad) && cantidad > 0) {
      this.productosCarrito[index].cantidad = cantidad;
      this.carritoService.actualizarProducto(index, this.productosCarrito[index]);
    }
  }
}

  abrirModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  quitarDelCarrito(index: number) {
    this.carritoService.quitarProducto(index);
  }

 obtenerTotal(): number {
  const total = this.productosCarrito.reduce((total, producto) => total + (producto.price * (producto.cantidad || 1)), 0);
  return Math.round(total * 100) / 100;
}

efectuarCompra(modal: any) {
  this.carritoService.vaciarCarrito(); 
  modal.close();                         
}

   vaciarCarrito() {
    this.productosCarrito = [];
  }
}
