import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalcarrito } from './modalcarrito.component';

describe('Modalcarrito', () => {
  let component: Modalcarrito;
  let fixture: ComponentFixture<Modalcarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modalcarrito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modalcarrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
