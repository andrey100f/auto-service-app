import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(car_list: any[], search_value: string) {
    if (!car_list || !search_value) {
      return car_list;
    }
    return car_list.filter(car =>
      car.model.toLocaleLowerCase().includes(search_value.toLocaleLowerCase())
    );
  }

}
