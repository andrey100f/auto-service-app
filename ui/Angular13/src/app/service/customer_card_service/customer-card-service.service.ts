import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerCardServiceService {
  readonly API_Url = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  custmer_card_list(): Observable<any[]> {
    return this.http.get<any>(this.API_Url + '/customer_card/');
  }

  customer_card_add(customer_card: any) {
    return this.http.post(this.API_Url + '/customer_card/', customer_card);
  }

  customer_card_update(customer_card: any) {
    return this.http.put(this.API_Url + '/customer_card/', customer_card);
  }

  customer_card_delete(customer_card: any) {
    return this.http.delete(this.API_Url + '/customer_card/' + customer_card);
  }
}
