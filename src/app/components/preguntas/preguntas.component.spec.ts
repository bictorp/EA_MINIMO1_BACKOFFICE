import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasComponent } from './preguntas.component';

describe('PreguntasComponent', () => {
  let component: PreguntasComponent;
  let fixture: ComponentFixture<PreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PreguntasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});