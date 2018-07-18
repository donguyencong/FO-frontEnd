import { TestBed, inject } from '@angular/core/testing';

import { FoodpostService } from './foodpost.service';

describe('FoodpostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodpostService]
    });
  });

  it('should be created', inject([FoodpostService], (service: FoodpostService) => {
    expect(service).toBeTruthy();
  }));
});
