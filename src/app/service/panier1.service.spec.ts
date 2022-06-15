import { TestBed } from '@angular/core/testing';

import { Panier1Service } from './panier1.service';

describe('Panier1Service', () => {
  let service: Panier1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Panier1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
