/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoffiesService } from './coffies.service';

describe('Service: Coffies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffiesService]
    });
  });

  it('should ...', inject([CoffiesService], (service: CoffiesService) => {
    expect(service).toBeTruthy();
  }));
});
