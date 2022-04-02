import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from 'src/app/service/transaction_service/transaction-service.service';
import { CustomerCardServiceService } from 'src/app/service/customer_card_service/customer-card-service.service';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';

@Component({
  selector: 'app-show-delete-transaction',
  templateUrl: './show-delete-transaction.component.html',
  styleUrls: ['./show-delete-transaction.component.css']
})
export class ShowDeleteTransactionComponent implements OnInit {

  constructor(private service: TransactionServiceService, private service_car: CarServiceService, private service_customer_card: CustomerCardServiceService) { }

  transaction_list: any = [];
  customer_card_list; any = [];
  car_list: any = [];
  run_add_edit_transaction: boolean = false;
  modal_title: string = "";
  transaction: any;
  suma_manopera: any = [];
  suma_piese: any = [];
  run_reduceri: boolean = true;
  undo_list: any = [];
  redo_list: any = [];

  ngOnInit(): void {
    this.get_car_list();
    this.get_customer_card_list();
    this.refresh_transaction_list();
  }

  get_car_list() {
    this.service_car.car_list().subscribe(data => {
      this.car_list = data;
    });
  }

  get_customer_card_list() {
    this.service_customer_card.custmer_card_list().subscribe(data => {
      this.customer_card_list = data;
    })
  }

  refresh_transaction_list() {
    this.service.transaction_list().subscribe(data => {
      this.transaction_list = data;
    });
  }

  add_click() {
    this.transaction = {
      id_transaction: 0,
      id_car: 0,
      id_customer_card: 0,
      sum_of_labor: 0,
      sum_of_parts: 0,
      date: "",
      hour: ""
    }
    this.modal_title = "Adaugare tranzactie";
    this.run_add_edit_transaction = true;
  }

  close_click() {
    this.refresh_transaction_list();
    if (this.modal_title == "Adaugare tranzactie") {
      this.undo_list.push({
        operation: 'delete',
        object: {}
      });
      this.redo_list = [];
    }
    this.run_add_edit_transaction = false;
  }

  edit_click(transaction_to_edit: any) {
    this.transaction = transaction_to_edit;
    this.undo_list.push({
      operation: 'edit',
      object: transaction_to_edit
    });
    this.redo_list = [];
    this.modal_title = "Modificare tranzactie"
    this.run_add_edit_transaction = true;
  }

  delete_click(transaction_to_delete: any) {
    if (confirm("Esti sigur ca vrei sa stergi aceasta tranzactie?")) {
      this.undo_list.push({
        operation: 'add',
        object: transaction_to_delete
      });
      this.redo_list = [];
      this.service.transaction_delete(transaction_to_delete.id_transaction).subscribe(data => {
        alert(data.toString());
        this.refresh_transaction_list();
      });
    }
  }

  reduceri_tranzactii() {
    if (this.run_reduceri) {
      for (let transaction of this.transaction_list) {
        var sum_of_labor = transaction.sum_of_labor;
        var sum_of_parts = transaction.sum_of_parts;
        for (let car of this.car_list) {
          if (transaction.id_car == car.id_car && car.guarantee == true) {
            sum_of_parts = 0;
          }
        }
        for (let customer_card of this.customer_card_list) {
          if (transaction.id_customer_card == customer_card.id_customer_card) {
            sum_of_labor = transaction.sum_of_labor - (transaction.sum_of_labor / 10);
          }
        }
        if (transaction.sum_of_labor != sum_of_labor) {
          this.suma_manopera.push("Reducere de 10% aplicata pentru card client pentru tranzactia " + String(transaction.id_transaction) + ".");
        }
        if (transaction.sum_of_parts != sum_of_parts) {
          this.suma_piese.push("Reducere aplicata pentru masina in garantie pentru tranzactia " + String(transaction.id_transaction) + ".");
        }
        var new_transaction = {
          id_transaction: transaction.id_transaction,
          id_car: transaction.id_car,
          id_customer_card: transaction.id_customer_card,
          sum_of_labor: sum_of_labor,
          sum_of_parts: sum_of_parts,
          date: transaction.date,
          hour: transaction.hour
        }
        this.service.transaction_update(new_transaction).subscribe(data => {
          alert(data.toString())
        });
      }
      this.refresh_transaction_list();
      this.run_reduceri = false;
    }
    else {
      this.suma_manopera = [];
      this.suma_piese = [];
    }
  }

  undo() {
    if (this.undo_list) {
      var last_undo_operation = this.undo_list.pop();
      if (last_undo_operation['operation'] == "add") {
        this.service.transaction_add(last_undo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_transaction_list();
        });
        this.redo_list.push(last_undo_operation);
      }
      else if (last_undo_operation['operation'] == "delete") {
        this.service.transaction_delete(this.transaction_list[this.transaction_list.length - 1].id_transaction).subscribe(data => {
          alert(data.toString());
          this.refresh_transaction_list();
        });
        last_undo_operation['object'] = this.transaction_list[this.transaction_list.length - 1];
        this.redo_list.push(last_undo_operation);
      }
      else if (last_undo_operation['operation'] == "edit") {
        this.refresh_transaction_list();
        var edited_transaction = {};
        for (let transaction of this.transaction_list) {
          if (last_undo_operation['object'].id_transaction == transaction.id_transaction) {
            edited_transaction = transaction;
          }
        }
        this.redo_list.push({
          operation: 'edit',
          object: edited_transaction
        });
        this.service.transaction_update(last_undo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_transaction_list();
        });
      }
    }
  }

  redo() {
    if (this.redo_list) {
      var last_redo_operation = this.redo_list.pop();
      if (last_redo_operation['operation'] == "add") {
        this.undo_list.push(last_redo_operation);
        last_redo_operation['object'].id_transaction = last_redo_operation['object'].id_transaction + 1;
        this.service.transaction_delete(last_redo_operation['object'].id_transaction).subscribe(data => {
          alert(data.toString());
          this.refresh_transaction_list();
        });
      }
      else if (last_redo_operation['operation'] == "delete") {
        this.undo_list.push(last_redo_operation);
        this.service.transaction_add(last_redo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_transaction_list();
        });
      }
      else if (last_redo_operation['operation'] == "edit") {
        this.refresh_transaction_list();
        var edited_transaction = {};
        for (let transaction of this.transaction_list) {
          if (last_redo_operation['object'].id_transaction == transaction.id_transaction) {
            edited_transaction = transaction;
          }
        }
        this.undo_list.push({
          operation: 'edit',
          object: edited_transaction
        });
        this.service.transaction_update(last_redo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_transaction_list();
        });
      }
    }
  }
}

