import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';
import { CustomerCardServiceService } from 'src/app/service/customer_card_service/customer-card-service.service';
import { TransactionServiceService } from 'src/app/service/transaction_service/transaction-service.service';

@Component({
  selector: 'app-customer-card-sort',
  templateUrl: './customer-card-sort.component.html',
  styleUrls: ['./customer-card-sort.component.css']
})
export class CustomerCardSortComponent implements OnInit {

  constructor(private service_car: CarServiceService, private service_customer_card: CustomerCardServiceService, private service_transaction: TransactionServiceService) { }

  car_list: any = [];
  customer_card_list: any = [];
  transaction_list: any = [];
  final_list: any = [];
  make_list: boolean = true;

  ngOnInit(): void {
    this.get_car_list();
    this.get_customer_card_list();
    this.get_transaction_list();
  }

  get_car_list() {
    this.service_car.car_list().subscribe(data => {
      this.car_list = data;
    });
  }

  get_customer_card_list() {
    this.service_customer_card.custmer_card_list().subscribe(data => {
      this.customer_card_list = data;
    });
  }

  get_transaction_list() {
    this.service_transaction.transaction_list().subscribe(data => {
      this.transaction_list = data;
    });
  }

  get_list() {
    if (this.make_list) {
      for (let customer_card of this.customer_card_list) {
        var reducere = 0.0;
        for (let transaction of this.transaction_list) {
          if (customer_card.id_customer_card == transaction.id_customer_card) {
            reducere = transaction.sum_of_labor / 10;
            for (let car of this.car_list) {
              if (transaction.id_car == car.id_car && car.guarantee == true) {
                reducere = reducere + transaction.sum_of_parts;
              }
            }
          }
        }
        var object = {
          id_customer_card: customer_card.id_customer_card,
          last_name: customer_card.last_name,
          first_name: customer_card.first_name,
          cnp: customer_card.cnp,
          date_of_birth: customer_card.date_of_birth,
          date_of_registration: customer_card.date_of_registration,
          reducere: reducere
        }
        this.final_list.push(object);
      }
      var sorted = this.final_list.sort(function (a, b) {
        return b.reducere - a.reducere
      });
      this.final_list = sorted;
      this.make_list = false;
    }
  }
}
