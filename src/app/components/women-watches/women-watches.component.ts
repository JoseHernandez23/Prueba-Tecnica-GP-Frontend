import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component'; 
import { Dashboard } from '../../pages/dashboard/dashboard.component';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from '../../services/transferencia.service';
import { Modalcarrito } from '../../components/modalcarrito/modalcarrito.component';

@Component({
  selector: 'app-women-watches',
 imports: [Dashboard, CatalogoComponent],
  templateUrl: './women-watches.component.html',
  styleUrl: './women-watches.component.css'
})
export class WomenWatches {
constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private transferencia: TransferenciaService) {}

    ngOnInit(){
      this.enviarTipoCatalogo();
    }

  enviarTipoCatalogo() {
    this.transferencia.setId('womens-watches');
  }
}
