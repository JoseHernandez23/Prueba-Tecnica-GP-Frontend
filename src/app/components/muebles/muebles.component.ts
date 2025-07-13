import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component'; 
import { Dashboard } from '../../pages/dashboard/dashboard.component';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from '../../services/transferencia.service';

@Component({
  selector: 'app-muebles',
  standalone: true,
  imports: [Dashboard, CatalogoComponent],
  templateUrl: './muebles.component.html',
  styleUrl: './muebles.component.css'
})
export class MueblesComponent {

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
    this.transferencia.setId('furniture');
  }

  verProducto(id: number) {
    this.transferencia.setProductoId(id);
  }
}
