import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CarSortComponent } from './functionalitati/car-sort/car-sort.component';
import { CautareFullTextComponent } from './functionalitati/cautare-full-text/cautare-full-text.component';
import { CustomerCardSortComponent } from './functionalitati/customer-card-sort/customer-card-sort.component';
import { FunctionalitatiComponent } from './functionalitati/functionalitati.component';
import { TransactionIntervalComponent } from './functionalitati/transaction-interval/transaction-interval.component';
import { TransactionDeleteComponent } from './functionalitati/transaction-delete/transaction-delete.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UpdateGuaranteeComponent } from './functionalitati/update-guarantee/update-guarantee.component';
import { RandomGenerateComponent } from './functionalitati/random-generate/random-generate.component';
import { CascadeDeleteComponent } from './functionalitati/cascade-delete/cascade-delete.component';

const routes: Routes = [
  { path: 'car', component: CarComponent },
  { path: 'customer_card', component: CustomerCardComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'functionalitati', component: FunctionalitatiComponent },
  { path: 'cautare_full_text', component: CautareFullTextComponent },
  { path: 'transaction_interval', component: TransactionIntervalComponent },
  { path: 'car_sort', component: CarSortComponent },
  { path: 'customer_card_sort', component: CustomerCardSortComponent },
  { path: 'transaction_delete', component: TransactionDeleteComponent },
  { path: 'update_guarantee', component: UpdateGuaranteeComponent },
  { path: 'random_generate', component: RandomGenerateComponent },
  { path: 'cascade_delete', component: CascadeDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
