import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from 'src/app/service/transaction_service/transaction-service.service';

@Component({
  selector: 'app-transaction-interval',
  templateUrl: './transaction-interval.component.html',
  styleUrls: ['./transaction-interval.component.css']
})
export class TransactionIntervalComponent implements OnInit {

  constructor(private service: TransactionServiceService) { }

  transaction_list: any = [];
  search_value: any;

  ngOnInit(): void {
    this.get_transaction_list();
  }

  get_transaction_list() {
    this.service.transaction_list().subscribe(data => {
      this.transaction_list = data;
    });
  }

  click_interval() {
    if (this.search_value) {
      var new_list: any = [];
      var splitted_data = this.search_value.split(" ");
      for (let transaction of this.transaction_list) {
        var sum = transaction.sum_of_labor + transaction.sum_of_parts;
        if (Number(splitted_data[0]) <= sum && sum <= Number(splitted_data[1])) {
          new_list.push(transaction);
        }
      }
      this.transaction_list = new_list;
    }
    else {
      this.get_transaction_list();
    }
  }
}
