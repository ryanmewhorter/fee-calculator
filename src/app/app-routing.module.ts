import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeeCalculatorComponent} from './components/fee-calculator/fee-calculator.component';

const routes: Routes = [
  {path: '', component: FeeCalculatorComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
