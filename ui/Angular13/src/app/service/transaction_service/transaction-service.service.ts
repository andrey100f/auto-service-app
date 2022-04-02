import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {
  readonly API_Url = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  transaction_list(): Observable<any[]> {
    return this.http.get<any>(this.API_Url + '/transaction/');
  }

  transaction_add(transaction: any) {
    return this.http.post(this.API_Url + '/transaction/', transaction);
  }

  transaction_update(transaction: any) {
    return this.http.put(this.API_Url + '/transaction/', transaction);
  }

  transaction_delete(transaction: any) {
    return this.http.delete(this.API_Url + '/transaction/' + transaction);
  }
}
