import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeeCalculatorComponent} from './components/fee-calculator/fee-calculator.component';

const routes: Routes = [
  {path: '', redirectTo: 'calc', pathMatch: 'full'},
  {path: 'calc', component: FeeCalculatorComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
