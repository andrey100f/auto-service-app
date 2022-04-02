import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';
import { CustomerCardServiceService } from 'src/app/service/customer_card_service/customer-card-service.service';

@Component({
  selector: 'app-cautare-full-text',
  templateUrl: './cautare-full-text.component.html',
  styleUrls: ['./cautare-full-text.component.css']
})
export class CautareFullTextComponent implements OnInit {

  constructor(private service_car: CarServiceService, private service_customer_card: CustomerCardServiceService) { }

  car_list: any = [];
  search_value: string = "";
  customer_card_list: any = [];
  search_value_customer_card: string = "";

  ngOnInit(): void {
    this.car_search_list();
    this.customer_card_search_list();
  }

  car_search_list() {
    this.service_car.car_list().subscribe(data => {
      this.car_list = data;
    })
  }

  customer_card_search_list() {
    this.service_customer_card.custmer_card_list().subscribe(data => {
      this.customer_card_list = data;
    })
  }
}

