import { Component, OnInit, Input } from '@angular/core';
import { TransactionServiceService } from 'src/app/service/transaction_service/transaction-service.service';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';
import { CustomerCardServiceService } from 'src/app/service/customer_card_service/customer-card-service.service';

@Component({
  selector: 'app-add-edit-transaction',
  templateUrl: './add-edit-transaction.component.html',
  styleUrls: ['./add-edit-transaction.component.css']
})
export class AddEditTransactionComponent implements OnInit {

  constructor(private service: TransactionServiceService, private service_car: CarServiceService, private service_customer_card: CustomerCardServiceService) { }

  @Input() transaction: any;
  id_transaction: number = 0;
  id_car: number = 0;
  id_customer_card: number = 0;
  sum_of_labor: number = 0;
  sum_of_parts: number = 0;
  date: string = "";
  hour: string = "";
  car_list: any = [];
  customer_card_list: any = [];
  errors: any = [];

  ngOnInit(): void {
    this.get_car_list();
    this.get_customer_card_list();
    this.id_transaction = this.transaction.id_transaction;
    this.id_car = this.transaction.id_car;
    this.id_customer_card = this.transaction.id_customer_card;
    this.sum_of_labor = this.transaction.sum_of_labor;
    this.sum_of_parts = this.transaction.sum_of_parts;
    this.date = this.transaction.date;
    this.hour = this.transaction.hour;
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

  add_transaction() {
    var new_transaction = {
      id_transaction: this.id_transaction,
      id_car: this.id_car,
      id_customer_card: this.id_customer_card,
      sum_of_labor: this.sum_of_labor,
      sum_of_parts: this.sum_of_parts,
      date: this.date,
      hour: this.hour
    }
    this.service.transaction_add(new_transaction).subscribe(data => {
      alert(data.toString())
    });
  }

  edit_transaction() {
    var new_transaction = {
      id_transaction: this.id_transaction,
      id_car: this.id_car,
      id_customer_card: this.id_customer_card,
      sum_of_labor: this.sum_of_labor,
      sum_of_parts: this.sum_of_parts,
      date: this.date,
      hour: this.hour
    }
    this.service.transaction_update(new_transaction).subscribe(data => {
      alert(data.toString())
    });
  }

  validate() {
    this.errors = [];
    if (this.sum_of_labor == 0) {
      this.errors.push("Completati campul 'Suma manopera'.")
    }
    if (this.sum_of_parts == 0) {
      this.errors.push("Completati campul 'Suma piese'.")
    }
    if (this.date == "") {
      this.errors.push("Completati campul 'Data'.")
    }
    if (this.hour == "") {
      this.errors.push("Completati campul 'Ora'.")
    }
  }
}
