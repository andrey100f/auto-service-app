import { Component, OnInit, Input } from '@angular/core';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';

@Component({
  selector: 'app-show-delete-car',
  templateUrl: './show-delete-car.component.html',
  styleUrls: ['./show-delete-car.component.css']
})
export class ShowDeleteCarComponent implements OnInit {

  constructor(private service: CarServiceService) { }

  undo_list: any = [];
  redo_list: any = [];
  car_list: any = [];
  run_add_edit_car: boolean = false;
  modal_title: string = "";
  car: any;

  ngOnInit(): void {
    this.refresh_car_list();
  }

  refresh_car_list() {
    this.service.car_list().subscribe(data => {
      this.car_list = data;
    });
  }

  add_click() {
    this.car = {
      id_car: 0,
      model: "",
      year_of_purchase: 0,
      number_of_kilometers: 0,
      guarantee: false
    }
    this.modal_title = "Adaugare masina";
    this.run_add_edit_car = true;

  }

  close_click() {
    this.refresh_car_list();
    if (this.modal_title == "Adaugare masina") {
      this.undo_list.push({
        operation: 'delete',
        object: {}
      });
      this.redo_list = [];
    }
    this.run_add_edit_car = false;
  }

  edit_click(car_to_edit: any) {
    this.car = car_to_edit;
    this.undo_list.push({
      operation: 'edit',
      object: car_to_edit
    });
    this.redo_list = [];
    this.modal_title = "Modificare masina"
    this.run_add_edit_car = true;
  }

  delete_click(car_to_delete: any) {
    if (confirm("Esti sigur ca vrei sa stergi aceasta masina?")) {
      this.undo_list.push({
        operation: 'add',
        object: car_to_delete
      });
      this.redo_list = [];
      this.service.car_delete(car_to_delete.id_car).subscribe(data => {
        alert(data.toString());
        this.refresh_car_list();
      });
    }
  }

  undo() {
    if (this.undo_list) {
      var last_undo_operation = this.undo_list.pop();
      if (last_undo_operation['operation'] == "add") {
        this.service.car_add(last_undo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_car_list();
        });
        this.redo_list.push(last_undo_operation);
      }
      else if (last_undo_operation['operation'] == "delete") {
        this.service.car_delete(this.car_list[this.car_list.length - 1].id_car).subscribe(data => {
          alert(data.toString());
          this.refresh_car_list();
        });
        last_undo_operation['object'] = this.car_list[this.car_list.length - 1];
        this.redo_list.push(last_undo_operation);
      }
      else if (last_undo_operation['operation'] == "edit") {
        this.refresh_car_list();
        var edited_car = {};
        for (let car of this.car_list) {
          if (last_undo_operation['object'].id_car == car.id_car) {
            edited_car = car;
          }
        }
        this.redo_list.push({
          operation: 'edit',
          object: edited_car
        });
        this.service.car_update(last_undo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_car_list();
        });
      }
    }
  }

  redo() {
    if (this.redo_list) {
      var last_redo_operation = this.redo_list.pop();
      if (last_redo_operation['operation'] == "add") {
        this.undo_list.push(last_redo_operation);
        last_redo_operation['object'].id_car = last_redo_operation['object'].id_car + 1;
        this.service.car_delete(last_redo_operation['object'].id_car).subscribe(data => {
          alert(data.toString());
          this.refresh_car_list();
        });
      }
      else if (last_redo_operation['operation'] == "delete") {
        this.undo_list.push(last_redo_operation);
        this.service.car_add(last_redo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_car_list();
        });
      }
      else if (last_redo_operation['operation'] == "edit") {
        this.refresh_car_list();
        var edited_car = {};
        for (let car of this.car_list) {
          if (last_redo_operation['object'].id_car == car.id_car) {
            edited_car = car;
          }
        }
        this.undo_list.push({
          operation: 'edit',
          object: edited_car
        });
        this.service.car_update(last_redo_operation['object']).subscribe(data => {
          alert(data.toString());
          this.refresh_car_list();
        });
      }
    }
  }
}
