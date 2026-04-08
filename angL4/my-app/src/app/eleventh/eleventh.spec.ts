import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eleventh } from './eleventh';

describe('Eleventh', () => {
  let component: Eleventh;
  let fixture: ComponentFixture<Eleventh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eleventh]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eleventh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
