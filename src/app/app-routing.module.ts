import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { BudgetComponent } from './budget/budget.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'events', component: EventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
