import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosProductos } from './todos-productos.component';

describe('TodosProductos', () => {
  let component: TodosProductos;
  let fixture: ComponentFixture<TodosProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
