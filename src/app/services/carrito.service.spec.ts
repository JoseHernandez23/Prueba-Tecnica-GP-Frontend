import { TestBed } from '@angular/core/testing';

import { CarritoService } from './carrito.sevice';

describe('Carrito', () => {
  let service: CarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
