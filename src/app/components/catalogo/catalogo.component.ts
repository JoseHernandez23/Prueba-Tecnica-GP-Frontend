import { Component, OnInit, Input, SimpleChanges   } from '@angular/core';
import { CommonModule } from '@angular/common'; // ¡IMPORTANTE!
import { ApiService } from '../../services/api.service';
import { ProductsModel, Product } from '../../models/producto.model';
import { TransferenciaService } from '../../services/transferencia.service';
import { Modal } from '../../components/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule], // ¡NECESARIO para usar *ngFor y *ngIf!
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {
  productos: Product[] = [];
  productosDetalle: Product | null = null;
  tipoCatalogo: string = "";
  productosCarrito: any[] = [];
  @Input() terminoBusqueda: string = '';
  @Input() categoria: string = '';
  productosCargados = false;
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;
  
  constructor(
  private productoService: ApiService,
  private transferencia: TransferenciaService,
  private modalService: NgbModal,
  private route: ActivatedRoute,
  private router: Router,
  private busquedaService: BusquedaService
) {}

  ngOnInit() {
    this.busquedaService.terminoBusqueda$.subscribe(termino => {
    this.terminoBusqueda = termino;
    this.calcularTotalPages();
  });

    this.obtenerProductosPorCategoria(this.categoria);
  }

  calcularTotalPages() {
  const total = this.productosFiltrados.length;
  this.totalPages = Math.ceil(total / this.pageSize) || 1;
}

  get paginas(): number[] {
  return Array(this.totalPages).fill(0).map((x, i) => i + 1);
}

cambiarPagina(delta: number) {
  this.currentPage += delta;
}


get productosPaginados(): Product[] {
  const start = (this.currentPage - 1) * this.pageSize;
  const end = start + this.pageSize;
  return this.productosFiltrados.slice(start, end);
}

  get productosFiltrados(): Product[] {
  let resultado: Product[];

  if (!this.terminoBusqueda?.trim()) {
    resultado = this.productos;
  } else {
    const palabras = this.terminoBusqueda.toLowerCase().split(/\s+/);
    resultado = this.productos.filter(producto =>
      producto.title?.toLowerCase().split(/\s+/).some(word =>
        palabras.some(palabra => word.includes(palabra))
      )
    );
  }

  // recalcular páginas en cada filtrado
  this.totalPages = Math.max(1, Math.ceil(resultado.length / this.pageSize));
  if (this.currentPage > this.totalPages) this.currentPage = 1;

  return resultado;
}


   ngOnChanges(changes: SimpleChanges) {
    if (changes['categoria'] && this.categoria != 'todos') {
      this.obtenerProductosPorCategoria(this.categoria);
    }
    else if(changes['categoria'] && this.categoria == 'todos') {
      this.obtenerProductosTodos();
    }
  }

  obtenerProductosTodos() {
    this.productosCargados = false;
    this.productos = [];  
    this.productoService.obtenerTodosProductos().subscribe({
      next: (data) => {
        this.productos = data.products ?? [];
        this.productosCargados = true;
        this.currentPage = 1;
        this.calcularTotalPages();
      },
      error: (error) => {
        this.productos = [];
        this.productosCargados = true;
      }
    });
  }

  obtenerProductosPorCategoria(categoria: string) {
    this.productosCargados = false;
    this.productos = [];  
    this.productoService.obtenerProductoPorCategoria(categoria).subscribe({
      next: (data) => {
        this.productos = data.products ?? [];
        this.productosCargados = true;
        this.currentPage = 1;
        this.calcularTotalPages();
      },
      error: (error) => {
        this.productos = [];
        this.productosCargados = true;
      }
    });
  }

  verProducto(id: number) {
  this.transferencia.setProductoId(id);

  this.productoService.obtenerProductoPorId(id).subscribe({
    next: (data) => {
      this.productosDetalle = data;

      this.abrirModal(this.productosDetalle);
    },
    error: (error) => {
      console.error('Error al obtener productos', error);
    }
  });
}

  abrirModal(productoDetalle: Product) {
    const modalRef = this.modalService.open(Modal);
    modalRef.componentInstance.producto = productoDetalle;
  }

  agregarAlCarrito(producto: any) {
  const existente = this.productosCarrito.find(p => p.id === producto.id);
  if (existente) {
    existente.cantidad = (existente.cantidad || 1) + 1;
  } else {
    this.productosCarrito.push({ ...producto, cantidad: 1 });
  }
}

}


