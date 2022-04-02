import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  readonly API_Url = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  car_list(): Observable<any[]> {
    return this.http.get<any>(this.API_Url + '/car/');
  }

  car_add(car: any) {
    return this.http.post(this.API_Url + '/car/', car);
  }

  car_update(car: any) {
    return this.http.put(this.API_Url + '/car/', car);
  }

  car_delete(car: any) {
    return this.http.delete(this.API_Url + '/car/' + car);
  }
}
