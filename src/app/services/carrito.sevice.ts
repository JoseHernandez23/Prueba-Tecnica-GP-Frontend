import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private readonly STORAGE_KEY = 'carrito';
  private productos: any[] = JSON.parse(localStorage.getItem('carrito') || '[]');
  private productosSubject = new BehaviorSubject<any[]>([]);

  productos$ = this.productosSubject.asObservable();

  constructor() {
    const carritoStorage = localStorage.getItem(this.STORAGE_KEY);
    if (carritoStorage) {
      try {
        this.productos = JSON.parse(carritoStorage);
      } catch {
        this.productos = [];
      }
    }
    this.productosSubject.next(this.productos);
  }

   private guardarEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.productos));
  }

  agregarProducto(producto: any) {
    const existente = this.productos.find(p => p.id === producto.id);
    if (existente) {
      existente.cantidad = (existente.cantidad || 1) + 1;
    } else {
      this.productos.push({ ...producto, cantidad: 1 });
    }
    this.productosSubject.next([...this.productos]);
    this.guardarEnLocalStorage();
  }

  actualizarProducto(index: number, productoActualizado: any) {
  this.productos[index] = productoActualizado;
  this.productosSubject.next([...this.productos]);
  this.guardarEnLocalStorage();
}

  quitarProducto(index: number) {
  this.productos.splice(index, 1);
  this.productosSubject.next(this.productos);
  this.guardarEnLocalStorage(); 
}


  obtenerProductos(): any[] {
    return [...this.productos];
  }

  obtenerTotal(): number {
    return this.productos.reduce((acc, prod) => acc + prod.price * (prod.cantidad || 1), 0);
  }

  vaciarCarrito() {
    this.productos = [];
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem('carrito');
    this.productosSubject.next([...this.productos]);
  }
}
