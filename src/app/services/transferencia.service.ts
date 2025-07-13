import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private tipoCatalogo: string | null = null;
  private productoId: number | null = null;

  setId(valor: string) {
    this.tipoCatalogo = valor;
  }

  getId(): string | null { 
    return this.tipoCatalogo;
  }

  setProductoId(id: number) {
    this.productoId = id;  
  }

  getProductoId(): number | null {   
    return this.productoId;
  }

  
}
