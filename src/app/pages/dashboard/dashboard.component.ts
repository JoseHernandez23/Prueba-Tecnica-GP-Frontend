import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CatalogoComponent } from '../../components/catalogo/catalogo.component';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, NavbarComponent, CatalogoComponent  ], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class Dashboard {
  terminoBusqueda: string = '';

  constructor(private busquedaService: BusquedaService) {}

  onBuscar(event: Event) {
  const input = event.target as HTMLInputElement;
  this.busquedaService.setTermino(input.value);
}

}
