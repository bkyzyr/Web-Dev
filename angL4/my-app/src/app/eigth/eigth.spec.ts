import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eigth } from './eigth';

describe('Eigth', () => {
  let component: Eigth;
  let fixture: ComponentFixture<Eigth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eigth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eigth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
