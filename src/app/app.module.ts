import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { FeeCalculatorComponent } from './components/fee-calculator/fee-calculator.component';
import { FeeSettingFormComponent } from './components/fee-setting-form/fee-setting-form.component';
import { FeeFormComponent } from './components/fee-setting-form/fee-form/fee-form.component';

// export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    FeeCalculatorComponent,
    FeeSettingFormComponent,
    FeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxMaskModule.forRoot(options),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
