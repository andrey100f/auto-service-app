import { Component, OnInit, Input } from '@angular/core';
import { CustomerCardServiceService } from 'src/app/service/customer_card_service/customer-card-service.service';

@Component({
  selector: 'app-add-edit-customer-card',
  templateUrl: './add-edit-customer-card.component.html',
  styleUrls: ['./add-edit-customer-card.component.css']
})
export class AddEditCustomerCardComponent implements OnInit {

  constructor(private service: CustomerCardServiceService) { }

  @Input() customer_card: any;
  id_customer_card: number = 0;
  last_name: string = "";
  first_name: string = "";
  cnp: string = "";
  date_of_birth: string = "";
  date_of_registration: string = "";
  errors: any = [];
  customer_card_list: any = [];

  ngOnInit(): void {
    this.refresh_customer_card_list();
    this.id_customer_card = this.customer_card.id_customer_card;
    this.last_name = this.customer_card.last_name;
    this.first_name = this.customer_card.first_name;
    this.cnp = this.customer_card.cnp;
    this.date_of_birth = this.customer_card.date_of_birth;
    this.date_of_registration = this.customer_card.date_of_registration;
  }

  refresh_customer_card_list() {
    this.service.custmer_card_list().subscribe(data => {
      this.customer_card_list = data;
    });
  }

  add_customer_card() {
    var new_customer_card = {
      id_customer_card: this.id_customer_card,
      last_name: this.last_name,
      first_name: this.first_name,
      cnp: this.cnp,
      date_of_birth: this.date_of_birth,
      date_of_registration: this.date_of_registration
    }
    this.service.customer_card_add(new_customer_card).subscribe(data => {
      alert(data.toString());
    });
  }

  edit_customer_card() {
    var new_customer_card = {
      id_customer_card: this.id_customer_card,
      last_name: this.last_name,
      first_name: this.first_name,
      cnp: this.cnp,
      date_of_birth: this.date_of_birth,
      date_of_registration: this.date_of_registration
    }
    this.service.customer_card_update(new_customer_card).subscribe(data => {
      alert(data.toString());
    });
  }

  validate() {
    this.errors = [];
    if (this.last_name == "") {
      this.errors.push("Completati campul 'Nume'.")
    }
    if (this.first_name == "") {
      this.errors.push("Completati campul 'Prenume'.")
    }
    if (this.cnp == "") {
      this.errors.push("Completati campul 'CNP'.")
    }
    if (this.date_of_birth == "") {
      this.errors.push("Completati campul 'Data nasterii'.")
    }
    if (this.date_of_registration == "") {
      this.errors.push("Completati campul 'Data inregistrarii'.")
    }
    for (let customer_card of this.customer_card_list) {
      if (customer_card.cnp == this.cnp && customer_card != this.customer_card) {
        this.errors.push("Acest CNP exista deja.")
      }
    }
  }
}
