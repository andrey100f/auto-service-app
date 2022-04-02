import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';
import { TransactionServiceService } from 'src/app/service/transaction_service/transaction-service.service';

@Component({
  selector: 'app-car-sort',
  templateUrl: './car-sort.component.html',
  styleUrls: ['./car-sort.component.css']
})
export class CarSortComponent implements OnInit {

  constructor(private service_car: CarServiceService, private service_transaction: TransactionServiceService) { }

  car_list: any = [];
  transaction_list: any = [];
  final_list: any = [];
  make_list: boolean = true;

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

  get_list() {
    if (this.make_list) {
      for (let transaction of this.transaction_list) {
        for (let car of this.car_list) {
          if (transaction.id_car == car.id_car) {
            var object = {
              id_car: car.id_car,
              model: car.model,
              year_of_purchase: car.year_of_purchase,
              number_of_kilometers: car.number_of_kilometers,
              guarantee: car.guarantee,
              sum_of_labor: transaction.sum_of_labor
            };
            this.final_list.push(object);
          }
        }
      }
      var sorted = this.final_list.sort(function (a, b) {
        return b.sum_of_labor - a.sum_of_labor
      });
      this.final_list = sorted;
      this.make_list = false;
    }
  }
}


