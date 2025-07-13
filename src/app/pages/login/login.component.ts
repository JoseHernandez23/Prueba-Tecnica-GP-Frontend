import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { LoginRequest, LoginResponse } from '../../models/login.model';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.sevice';
declare const bootstrap: any;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgbToastModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  toastMessage = '';

  @ViewChild('errorToast', { static: false }) errorToast!: ElementRef;

  constructor(private apiService: ApiService, private router: Router, private userService: UserService, private carritoService: CarritoService) {}

  ngOnInit() {
  history.pushState(null, '', location.href);
  window.onpopstate = () => {
    history.pushState(null, '', location.href);
  };
}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const loginData: LoginRequest = {
        username: this.username,
        password: this.password
      };

      this.apiService.login(loginData).subscribe({
      next: (response: LoginResponse) => {
        if (response && response.id > 0 && response.username) {
          localStorage.setItem('token', response.accessToken);
          this.userService.setUsuario(response.username);
          this.carritoService.vaciarCarrito();
          this.router.navigate(['/dashboard']);
        } else {
          this.toastMessage = 'Credenciales incorrectas.';
          this.mostrarToast();
        }
      },
      error: (error) => {
        this.toastMessage = 'Error de servidor o conexión.';
        this.mostrarToast();
      }
});

    }
  }
  mostrarToast() {
    const toastEl = this.errorToast?.nativeElement;
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }
}
