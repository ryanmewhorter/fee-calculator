import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {CurrencyValidator} from './currency.validator';

describe('Currency validator tests', () => {

  describe('isNumber tests', () => {

    const testValue = (value: string): ValidationErrors | null => {
      return CurrencyValidator.isNumber(new FormControl(value));
    };

    it('should return no errors when control has valid number value', () => {
      expect(testValue('0')).toBeNull();
      expect(testValue('1.25')).toBeNull();
      expect(testValue('09.87')).toBeNull();
      expect(testValue('60.0')).toBeNull();
    });

    it('should return no errors when control has valid number value', () => {
      expect(testValue('abc')).toEqual({isNumber: true});
      expect(testValue('0+1')).toEqual({isNumber: true});
      expect(testValue('___')).toEqual({isNumber: true});
    });

  });

});
