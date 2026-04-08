import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seventh } from './seventh';

describe('Seventh', () => {
  let component: Seventh;
  let fixture: ComponentFixture<Seventh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seventh]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seventh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
