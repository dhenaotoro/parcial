/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoffiesService } from './coffies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Coffies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoffiesService]
    });
  });

  it('should ...', inject([CoffiesService], (service: CoffiesService) => {
    expect(service).toBeTruthy();
  }));
});
