import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Coffie } from './coffie';

@Injectable({
  providedIn: 'root'
})
export class CoffiesService {

  private apiUrlCoffies: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCoffies() : Observable<Coffie[]> {
    return this.http.get<Coffie[]>(this.apiUrlCoffies)
  }

}
