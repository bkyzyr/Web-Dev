import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tenth } from './tenth';

describe('Tenth', () => {
  let component: Tenth;
  let fixture: ComponentFixture<Tenth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tenth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tenth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
