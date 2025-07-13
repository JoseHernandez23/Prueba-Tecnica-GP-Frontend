import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component'; 
import { Dashboard } from '../../pages/dashboard/dashboard.component';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from '../../services/transferencia.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modalcarrito } from '../../components/modalcarrito/modalcarrito.component';

@Component({
  selector: 'app-tablets',
  standalone: true,
  imports: [Dashboard, CatalogoComponent],
  templateUrl: './tablets.component.html',
  styleUrl: './tablets.component.css'
})
export class Tablets {
constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private transferencia: TransferenciaService) {}

    ngOnInit(){
      this.enviarTipoCatalogo();
    }

  enviarTipoCatalogo() {
    this.transferencia.setId('tablets');
  }
}
