import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenWatches } from './women-watches.component';

describe('WomenWatches', () => {
  let component: WomenWatches;
  let fixture: ComponentFixture<WomenWatches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenWatches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenWatches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
