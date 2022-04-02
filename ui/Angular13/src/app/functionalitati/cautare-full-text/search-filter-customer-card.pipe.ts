import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterCustomerCard'
})
export class SearchFilterCustomerCardPipe implements PipeTransform {

  transform(customer_card_list: any[], search_value_customer_card: string) {
    if (!customer_card_list || !search_value_customer_card) {
      return customer_card_list;
    }
    return customer_card_list.filter(customer_card =>
      customer_card.last_name.toLocaleLowerCase().includes(search_value_customer_card.toLocaleLowerCase()) ||
      customer_card.first_name.toLocaleLowerCase().includes(search_value_customer_card.toLocaleLowerCase())
    );
  }

}
