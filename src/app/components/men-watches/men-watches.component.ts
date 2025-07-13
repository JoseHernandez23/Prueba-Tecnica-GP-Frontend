import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component'; 
import { Dashboard } from '../../pages/dashboard/dashboard.component';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from '../../services/transferencia.service';

@Component({
  selector: 'app-men-watches',
 imports: [Dashboard, CatalogoComponent],
  templateUrl: './men-watches.component.html',
  styleUrl: './men-watches.component.css'
})
export class MenWatches {
constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private transferencia: TransferenciaService) {}

    ngOnInit(){
      this.enviarTipoCatalogo();
    }

  enviarTipoCatalogo() {
    this.transferencia.setId('mens-watches');
  }
}
