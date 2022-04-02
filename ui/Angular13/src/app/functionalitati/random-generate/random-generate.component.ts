import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';

@Component({
  selector: 'app-random-generate',
  templateUrl: './random-generate.component.html',
  styleUrls: ['./random-generate.component.css']
})
export class RandomGenerateComponent implements OnInit {

  constructor(private service: CarServiceService) { }

  car_list: any = [];
  generate: string = "";

  ngOnInit(): void {
    this.get_car_list();
  }

  get_car_list() {
    this.service.car_list().subscribe(data => {
      this.car_list = data;
    });
  }

  generate_random() {
    var value = Number(this.generate);
    var model_list = ["Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Ford", "Skoda", "Opel", "Renault", "Dacia", "Volvo", "Peugeot", "Toyota"];
    var guarantee_list = [true, false];
    for (var i = 1; i <= value; i = i + 1) {
      let id_car_random = 0;
      let model_random = model_list[Math.floor(Math.random() * model_list.length)];
      let year_of_purchase_random = Math.floor(Math.random() * (2021 - 2000) + 2000);
      let number_of_kilometers_random = Math.floor(Math.random() * (100000 - 1000) + 1000);
      let guarantee_random = guarantee_list[Math.floor(Math.random() * guarantee_list.length)];
      var new_car = {
        id_car: id_car_random,
        model: model_random,
        year_of_purchase: year_of_purchase_random,
        number_of_kilometers: number_of_kilometers_random,
        guarantee: guarantee_random
      }
      this.service.car_add(new_car).subscribe(data => {
        alert(data.toString());
      });
    }
    this.get_car_list();
  }
}
