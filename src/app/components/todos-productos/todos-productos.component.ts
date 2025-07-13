import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component'; 
import { Dashboard } from '../../pages/dashboard/dashboard.component';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from '../../services/transferencia.service';

@Component({
  selector: 'app-todos-productos',
  standalone: true,
  imports: [Dashboard, CatalogoComponent],
  templateUrl: './todos-productos.component.html',
  styleUrl: './todos-productos.component.css'
})
export class TodosProductos {
id: number = 0;
  terminoBusqueda: string = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private transferencia: TransferenciaService) {}

    ngOnInit(){
      this.enviarTipoCatalogo();
    }

  enviarTipoCatalogo() {
    this.transferencia.setId('');
  }

  verProducto(id: number) {
    this.transferencia.setProductoId(id);
  }
}
