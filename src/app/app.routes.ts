import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard.component';
import { Login } from './pages/login/login.component';
import { MueblesComponent } from './components/muebles/muebles.component';
import { Tablets } from './components/tablets/tablets.component';
import { Smartphones } from './components/smartphones/smartphones.component';
import { Laptops } from './components/laptops/laptops.component';
import { MenWatches } from './components/men-watches/men-watches.component';
import { WomenWatches } from './components/women-watches/women-watches.component';
import { TodosProductos } from './components/todos-productos/todos-productos.component';

export const routes: Routes = [
    { path: 'dashboard', component: TodosProductos },
    { path: 'login', component: Login },
    { path: 'muebles', component: MueblesComponent },
    { path: 'tablets', component: Tablets },
    { path: 'smartphones', component: Smartphones },
    { path: 'laptops', component: Laptops },
    { path: 'mens-watches', component: MenWatches },
    { path: 'womens-watches', component: WomenWatches },
    { path: 'todos', component: TodosProductos },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard' }
];
