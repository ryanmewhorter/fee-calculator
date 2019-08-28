import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeeCalculatorComponent} from './components/fee-calculator/fee-calculator.component';
import {FeeSettingFormComponent} from './components/fee-setting-form/fee-setting-form.component';

const routes: Routes = [
  {path: '', component: FeeCalculatorComponent, pathMatch: 'full'},
  {path: 'create', component: FeeSettingFormComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
