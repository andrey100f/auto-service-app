import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';

@Component({
  selector: 'app-update-guarantee',
  templateUrl: './update-guarantee.component.html',
  styleUrls: ['./update-guarantee.component.css']
})
export class UpdateGuaranteeComponent implements OnInit {

  constructor(private service: CarServiceService) { }

  car_list: any = [];
  new_list: any = [];

  ngOnInit(): void {
    this.get_car_list();
  }

  get_car_list() {
    this.service.car_list().subscribe(data => {
      this.car_list = data;
    });
  }

  update_guarantee() {
    for (let car of this.car_list) {
      var guarantee = false;
      if (car.number_of_kilometers <= 60000 && (2021 - car.year_of_purchase) <= 3) {
        guarantee = true;
      }
      var new_car = {
        id_car: car.id_car,
        model: car.model,
        year_of_purchase: car.year_of_purchase,
        number_of_kilometers: car.number_of_kilometers,
        guarantee: guarantee
      }
      this.service.car_update(new_car).subscribe(data => {
        alert(data.toString());
      });
    }
    this.get_car_list();
  }
}
