import { Component, OnInit } from '@angular/core';
import { CustomerCardServiceService } from 'src/app/service/customer_card_service/customer-card-service.service';

@Component({
  selector: 'app-show-delete-customer-card',
  templateUrl: './show-delete-customer-card.component.html',
  styleUrls: ['./show-delete-customer-card.component.css']
})
export class ShowDeleteCustomerCardComponent implements OnInit {

  constructor(private service: CustomerCardServiceService) { }

  customer_card_list: any = [];
  modal_title: string = "";
  run_add_edit_customer_card: boolean = false;
  customer_card: any;
  undo_list: any = [];
  redo_list: any = [];

  ngOnInit(): void {
    this.refresh_customer_card_list();
  }

  refresh_customer_card_list() {
    this.service.custmer_card_list().subscribe(data => {
      this.customer_card_list = data;
    });
  }

  add_click() {
    this.customer_card = {
      id_customer_card: 0,
      last_name: "",
      first_name: "",
      cnp: "",
      date_of_birth: "",
      date_of_registration: ""
    }
    this.modal_title = "Adaugare card client";
    this.run_add_edit_customer_card = true;
  }

  close_click() {
    this.refresh_customer_card_list();
    if (this.modal_title == "Adaugare card client") {
      this.undo_list.push({
        operation: 'delete',
        object: {}
      });
      this.redo_list = [];
    }
    this.run_add_edit_customer_card = false;
  }

  edit_click(customer_card_to_edit: any) {
    this.customer_card = customer_card_to_edit;
    this.undo_list.push({
      operation: 'edit',
      object: customer_card_to_edit
    });
    this.redo_list = [];
    this.modal_title = "Modificare card client"
    this.run_add_edit_customer_card = true;
  }

  delete_click(customer_card_to_delete: any) {
    if (confirm("Esti sigur ca vrei sa stergi acest card client?")) {
      this.undo_list.push({
        operation: 'add',
        object: customer_card_to_delete
      });
      this.redo_list = [];
      this.service.customer_card_delete(customer_card_to_delete.id_customer_card).subscribe(data => {
        alert(data.toString());
        this.refresh_customer_card_list();
      });
    }
  }

  undo() {
    if (this.undo_list) {
      var last_undo_operation = this.undo_list.pop();
      if (last_undo_operation['operation'] == "add") {
        this.service.customer_card_add(last_undo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_customer_card_list();
        });
        this.redo_list.push(last_undo_operation);
      }
      else if (last_undo_operation['operation'] == "delete") {
        this.service.customer_card_delete(this.customer_card_list[this.customer_card_list.length - 1].id_customer_card).subscribe(data => {
          alert(data.toString());
          this.refresh_customer_card_list();
        });
        last_undo_operation['object'] = this.customer_card_list[this.customer_card_list.length - 1];
        this.redo_list.push(last_undo_operation);
      }
      else if (last_undo_operation['operation'] == "edit") {
        this.refresh_customer_card_list();
        var edited_customer_card = {};
        for (let customer_card of this.customer_card_list) {
          if (last_undo_operation['object'].id_customer_card == customer_card.id_customer_card) {
            edited_customer_card = customer_card;
          }
        }
        this.redo_list.push({
          operation: 'edit',
          object: edited_customer_card
        });
        this.service.customer_card_update(last_undo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_customer_card_list();
        });
      }
    }
  }

  redo() {
    if (this.redo_list) {
      var last_redo_operation = this.redo_list.pop();
      if (last_redo_operation['operation'] == "add") {
        this.undo_list.push(last_redo_operation);
        last_redo_operation['object'].id_customer_card = last_redo_operation['object'].id_customer_card + 1;
        this.service.customer_card_delete(last_redo_operation['object'].id_customer_card).subscribe(data => {
          alert(data.toString());
          this.refresh_customer_card_list();
        });
      }
      else if (last_redo_operation['operation'] == "delete") {
        this.undo_list.push(last_redo_operation);
        this.service.customer_card_add(last_redo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_customer_card_list();
        });
      }
      else if (last_redo_operation['operation'] == "edit") {
        this.refresh_customer_card_list();
        var edited_customer_card = {};
        for (let customer_card of this.customer_card_list) {
          if (last_redo_operation['object'].id_customer_card == customer_card.id_customer_card) {
            edited_customer_card = customer_card;
          }
        }
        this.undo_list.push({
          operation: 'edit',
          object: edited_customer_card
        });
        this.service.customer_card_update(last_redo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_customer_card_list();
        });
      }
    }
  }

}
