import { Injectable } from '@angular/core';
import {Bike} from "./bike.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private baseUrl = 'https://iberobike-0bd083e7be2c.herokuapp.com/api/bike'; // Reemplaza con la URL de tu API
  //private baseUrl = 'http://localhost:8080/api/bike'; // Reemplaza con la URL de tu API


  constructor(private http: HttpClient) {}

  public getAllBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.baseUrl)
      .pipe(map(res=>{
        return res
      }));
  }

  getBikeById(id: number): Observable<Bike> {
    return this.http.get<Bike>(`${this.baseUrl}/${id}`);
  }

  createBike(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.baseUrl, bike);
  }

  updateBike(id: number, bike: Bike): Observable<Bike> {
    return this.http.put<Bike>(`${this.baseUrl}/${id}`, bike);
  }

  deleteBike(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
