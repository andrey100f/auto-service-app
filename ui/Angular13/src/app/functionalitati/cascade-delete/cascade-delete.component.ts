import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';
import { TransactionServiceService } from 'src/app/service/transaction_service/transaction-service.service';

@Component({
  selector: 'app-cascade-delete',
  templateUrl: './cascade-delete.component.html',
  styleUrls: ['./cascade-delete.component.css']
})
export class CascadeDeleteComponent implements OnInit {

  constructor(private service_car: CarServiceService, private service_transaction: TransactionServiceService) { }

  delete: string = "";
  car_list: any = [];
  transaction_list: any = [];

  ngOnInit(): void {
    this.get_car_list();
    this.get_transaction_list();
  }

  get_car_list() {
    this.service_car.car_list().subscribe(data => {
      this.car_list = data;
    });
  }

  get_transaction_list() {
    this.service_transaction.transaction_list().subscribe(data => {
      this.transaction_list = data;
    });
  }

  cascade_delete() {
    var delete_value = Number(this.delete);
    for (let car of this.car_list) {
      if (car.id_car == delete_value) {
        this.service_car.car_delete(car.id_car).subscribe(data => {
          alert(data.toString());
          this.get_car_list();
        });
      }
    }
    for (let transaction of this.transaction_list) {
      if (transaction.id_car == delete_value) {
        this.service_transaction.transaction_delete(transaction.id_transaction).subscribe(data => {
          alert(data.toString());
          this.get_transaction_list();
        });
      }
    }
  }
}
