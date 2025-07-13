import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../models/producto.model';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.sevice';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class Modal {
  @Input() producto!: Product;

  constructor(
  public activeModal: NgbActiveModal,
  private carritoService: CarritoService
) {}

agregarAlCarrito(producto: any) {
  this.carritoService.agregarProducto(producto);
  this.activeModal.close(); 
}
}
