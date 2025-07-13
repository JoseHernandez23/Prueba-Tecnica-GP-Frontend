import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel, Product } from '../models/producto.model';
import { LoginRequest, LoginResponse } from '../models/login.model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  obtenerTodosProductos(): Observable<ProductsModel> {
    return this.http.get<ProductsModel>(`${this.baseUrl}/Products/GetAllProducts`);
  }

  obtenerProductoPorId(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/Products/GetProduct/${id}`);
  }

  obtenerProductoPorCategoria(category: string): Observable<ProductsModel> {
    return this.http.get<ProductsModel>(`${this.baseUrl}/Products/GetByCategory/${category}`);
  }

  login(login: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/Login/Login`, login);
  }

}
