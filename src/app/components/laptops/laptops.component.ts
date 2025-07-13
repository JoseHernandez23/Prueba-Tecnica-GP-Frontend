import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component'; 
import { Dashboard } from '../../pages/dashboard/dashboard.component';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from '../../services/transferencia.service';

@Component({
  selector: 'app-laptops',
  imports: [Dashboard, CatalogoComponent],
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class Laptops {
constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private transferencia: TransferenciaService) {}

    ngOnInit(){
      this.enviarTipoCatalogo();
    }

  enviarTipoCatalogo() {
    this.transferencia.setId('laptops');
  }
}
