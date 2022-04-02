import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from 'src/app/service/transaction_service/transaction-service.service';

@Component({
  selector: 'app-transaction-delete',
  templateUrl: './transaction-delete.component.html',
  styleUrls: ['./transaction-delete.component.css']
})
export class TransactionDeleteComponent implements OnInit {

  constructor(private service: TransactionServiceService) { }

  transaction_list: any = [];
  date_left: any;
  date_right: any;
  undo_list: any = [];
  redo_list: any = [];

  ngOnInit(): void {
    this.get_transaction_list();
  }

  get_transaction_list() {
    this.service.transaction_list().subscribe(data => {
      this.transaction_list = data;
    });
  }

  transaction_delete_interval() {
    var transaction_undo_list: any = [];
    if (this.date_left && this.date_right) {
      for (let transaction of this.transaction_list) {
        if (this.date_left <= transaction.date && transaction.date <= this.date_right) {
          transaction_undo_list.push(transaction)
          this.service.transaction_delete(transaction.id_transaction).subscribe(data => {
            alert(data.toString());
            this.get_transaction_list();
          });
        }
      }
      this.undo_list.push(transaction_undo_list);
      this.redo_list = [];
    }
  }

  undo() {
    var last_undo_operation = this.undo_list.pop();
    this.redo_list.push(last_undo_operation);
    for (let transaction of last_undo_operation) {
      this.service.transaction_add(transaction).subscribe(data => {
        alert(data.toString());
        this.get_transaction_list();
      });
    }
  }

  redo() {
    var last_redo_operation = this.redo_list.pop();
    this.undo_list.push(last_redo_operation);
    for (let transaction of last_redo_operation) {
      transaction.id_transaction = transaction.id_transaction + 1;
      this.service.transaction_delete(transaction.id_transaction).subscribe(data => {
        alert(data.toString());
        this.get_transaction_list();
      });
    }
  }
}

