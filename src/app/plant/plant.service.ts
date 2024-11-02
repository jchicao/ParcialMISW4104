import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Plant } from './plant';


@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl = environment.baseUrl;

constructor( private http: HttpClient) { }

getPlants(): Observable<Plant[]> {
  return this.http.get<Plant[]>(this.apiUrl);
}

}
