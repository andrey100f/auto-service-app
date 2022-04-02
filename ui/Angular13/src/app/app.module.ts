import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddEditCarComponent } from './car/add-edit-car/add-edit-car.component';
import { ShowDeleteCarComponent } from './car/show-delete-car/show-delete-car.component';
import { AddEditCustomerCardComponent } from './customer-card/add-edit-customer-card/add-edit-customer-card.component';
import { ShowDeleteCustomerCardComponent } from './customer-card/show-delete-customer-card/show-delete-customer-card.component';
import { AddEditTransactionComponent } from './transaction/add-edit-transaction/add-edit-transaction.component';
import { ShowDeleteTransactionComponent } from './transaction/show-delete-transaction/show-delete-transaction.component';
import { CarServiceService } from './service/car_service/car-service.service';
import { CustomerCardServiceService } from './service/customer_card_service/customer-card-service.service';
import { TransactionServiceService } from './service/transaction_service/transaction-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FunctionalitatiComponent } from './functionalitati/functionalitati.component';
import { CautareFullTextComponent } from './functionalitati/cautare-full-text/cautare-full-text.component';
import { SearchFilterPipe } from './functionalitati/cautare-full-text/search-filter.pipe';
import { SearchFilterCustomerCardPipe } from './functionalitati/cautare-full-text/search-filter-customer-card.pipe';
import { TransactionIntervalComponent } from './functionalitati/transaction-interval/transaction-interval.component';
import { CarSortComponent } from './functionalitati/car-sort/car-sort.component';
import { CustomerCardSortComponent } from './functionalitati/customer-card-sort/customer-card-sort.component';
import { TransactionDeleteComponent } from './functionalitati/transaction-delete/transaction-delete.component';
import { UpdateGuaranteeComponent } from './functionalitati/update-guarantee/update-guarantee.component';
import { RandomGenerateComponent } from './functionalitati/random-generate/random-generate.component';
import { CascadeDeleteComponent } from './functionalitati/cascade-delete/cascade-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CustomerCardComponent,
    TransactionComponent,
    AddEditCarComponent,
    ShowDeleteCarComponent,
    AddEditCustomerCardComponent,
    ShowDeleteCustomerCardComponent,
    AddEditTransactionComponent,
    ShowDeleteTransactionComponent,
    FunctionalitatiComponent,
    CautareFullTextComponent,
    SearchFilterPipe,
    SearchFilterCustomerCardPipe,
    TransactionIntervalComponent,
    CarSortComponent,
    CustomerCardSortComponent,
    TransactionDeleteComponent,
    UpdateGuaranteeComponent,
    RandomGenerateComponent,
    CascadeDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CarServiceService, CustomerCardServiceService, TransactionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
