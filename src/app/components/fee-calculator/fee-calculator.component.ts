import { Component, OnInit } from '@angular/core';
import {FeeSetting} from '../../shared/models/fee-setting';
import Utils from '../../shared/utils/utils';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {FEE_SETTINGS} from '../../shared/utils/constants';
import {CurrencyValidator} from '../../shared/validators/currency/currency.validator';
import {FeeSettingsService} from '../../services/fee-settings/fee-settings.service';

@Component({
  selector: 'app-fee-calculator',
  templateUrl: './fee-calculator.component.html',
  styleUrls: ['./fee-calculator.component.scss']
})
export class FeeCalculatorComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private feeSettingsService: FeeSettingsService) { }

  form: FormGroup;

  public feeSettings: FeeSetting[] = []; // [...FEE_SETTINGS];

  static calculateBuyerPays(sellerReceives: number, setting: FeeSetting): number {
    let buyerPays = sellerReceives;
    for (const fee of setting.fees) {
      buyerPays = Math.min(Utils.round((buyerPays + fee.flat) / (1 - (fee.percent / 100))), fee.max ? buyerPays + fee.max : Infinity );
    }
    return buyerPays;
  }

  static calculateSellerReceives(buyerPays: number, setting: FeeSetting): number {
    let sellerReceives = buyerPays;
    for (const fee of setting.fees) {
      sellerReceives = Math.max(Utils.round(sellerReceives * (1 - (fee.percent / 100)) - fee.flat), fee.max ? sellerReceives - fee.max : 0);
    }
    return sellerReceives;
  }

  ngOnInit(): void {
    this.form = this.createForm();
    this.listenForChanges(this.form);
    this.feeSettingsService.fetch()
      .then((response: ButterResponse) => {
        console.log('Response:', response);
        if (response.data && response.data.data && response.data.data.feesettings) {
          this.feeSettings = response.data.data.feesettings.map(fs => this.feeSettingsService.translateToModel(fs));
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  createForm(): FormGroup {
    return this.fb.group({
      feeSetting: [null, Validators.required],
      buyerPays: ['0', CurrencyValidator.isNumber],
      sellerReceives: ['0', CurrencyValidator.isNumber]
    });
  }

  listenForChanges(form: FormGroup): void {
    let lastEdited: string = null;
    form.get('feeSetting').valueChanges.subscribe((feeSetting: FeeSetting) => {
      console.log('last edited:', lastEdited);
      if (lastEdited === 'buyerPays') {
        const buyerPaysValue = form.get('buyerPays').value;
        console.log('buyerPaysValue: ', buyerPaysValue);
        form.get('sellerReceives').setValue(
          FeeCalculatorComponent.calculateSellerReceives(buyerPaysValue, feeSetting), {emitEvent: false}
        );
      } else if (lastEdited === 'sellerReceives') {
        const sellerReceivesValue = form.get('sellerReceives').value;
        console.log('sellerReceivesValue: ', sellerReceivesValue);
        form.get('buyerPays').setValue(
          FeeCalculatorComponent.calculateBuyerPays(sellerReceivesValue, feeSetting), {emitEvent: false}
        );
      }
    });
    form.get('buyerPays').valueChanges.subscribe((buyerPays: string) => {
      const feeSetting = form.get('feeSetting').value;
      if (feeSetting !== null && Utils.isNumber(buyerPays)) {
        form.get('sellerReceives').setValue(
          FeeCalculatorComponent.calculateSellerReceives(Utils.parseFloat(buyerPays), feeSetting),
          {emitEvent: false}
        );
      }
      lastEdited = 'buyerPays';
    });
    form.get('sellerReceives').valueChanges.subscribe((sellerReceives: string) => {
      const feeSetting = form.get('feeSetting').value;
      if (feeSetting !== null && Utils.isNumber(sellerReceives)) {
        form.get('buyerPays').setValue(
          FeeCalculatorComponent.calculateBuyerPays(Utils.parseFloat(sellerReceives), feeSetting),
          {emitEvent: false}
        );
      }
      lastEdited = 'sellerReceives';
    });
  }

}
