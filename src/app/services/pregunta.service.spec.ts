import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PreguntaService } from './pregunta.service';

describe('PreguntaService', () => {
  let service: PreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});