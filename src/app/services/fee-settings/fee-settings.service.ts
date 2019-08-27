import { Injectable } from '@angular/core';
import {butterService} from '../butter-service/butter.service';
import {FeeSetting} from '../../shared/models/fee-setting';
import {Fee} from '../../shared/models/fee';

@Injectable({
  providedIn: 'root'
})
export class FeeSettingsService {

  constructor() { }

  async fetch(): Promise<ButterResponse> {
    return butterService.content.retrieve(['feesettings']);
  }

  translateToModel(data: any): FeeSetting {
    const fs = {
      name: null,
      description: null,
      fees: []
    } as FeeSetting;
    fs.name = data.name;
    fs.description = data.description;
    for (const fee of data.fees) {
      const f = {flat: null, percent: null, max: null} as Fee;
      f.flat = fee.flat;
      f.percent = fee.percent;
      f.max = fee.max;
      fs.fees.push(f);
    }
    return fs;
  }
}
