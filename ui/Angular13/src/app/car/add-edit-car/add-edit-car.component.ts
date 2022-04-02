import { Component, OnInit, Input } from '@angular/core';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.css']
})

export class AddEditCarComponent implements OnInit {

  constructor(private service: CarServiceService) { }

  @Input() car: any;
  id_car: number = 0;
  model: string = "";
  year_of_purchase: number = 0;
  number_of_kilometers: number = 0;
  guarantee: boolean = false;
  errors: any = [];

  ngOnInit(): void {
    this.id_car = this.car.id_car;
    this.model = this.car.model;
    this.year_of_purchase = this.car.year_of_purchase;
    this.number_of_kilometers = this.car.number_of_kilometers;
    this.guarantee = this.car.guarantee;
  }

  add_car() {
    var new_car = {
      id_car: this.id_car,
      model: this.model,
      year_of_purchase: this.year_of_purchase,
      number_of_kilometers: this.number_of_kilometers,
      guarantee: this.guarantee
    }
    this.service.car_add(new_car).subscribe(data => {
      alert(data.toString());
    });
  }

  edit_car() {
    var new_car = {
      id_car: this.id_car,
      model: this.model,
      year_of_purchase: this.year_of_purchase,
      number_of_kilometers: this.number_of_kilometers,
      guarantee: this.guarantee
    }
    this.service.car_update(new_car).subscribe(data => {
      alert(data.toString());
    });
  }

  validate() {
    this.errors = [];
    if (this.model == "") {
      this.errors.push("Completati campul 'Model'.")
    }
    if (this.number_of_kilometers <= 0) {
      this.errors.push("Campul 'Numar kilometri' trebuie sa aiba o valoare strict pozitiva.");
    }
    if (this.year_of_purchase <= 0) {
      this.errors.push("Campul 'An achizitie' trebuie sa aiba o valoare strict pozitiva.");
    }
  }
}
