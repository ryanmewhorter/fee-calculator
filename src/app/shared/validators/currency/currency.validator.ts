import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import Utils from '../../utils/utils';


export class CurrencyValidator {

  public static isNumber: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return !Utils.isNumber(control.value) ? {isNumber: true} : null;
  }

}
