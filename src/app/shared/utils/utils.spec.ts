import Utils from './utils';


describe('Utils tests', () => {

  it('sanitizeFloat should not remove periods', () => {
    expect(Utils.sanitizeFloat('12.34')).toEqual('12.34');
  });

  it('sanitizeFloat should remove non digit characters', () => {
    expect(Utils.sanitizeFloat('0ab.88c*)_+=')).toEqual('0.88');
  });

  it('parseFloat should convert valid input string to number', () => {
    expect(Utils.parseFloat('1.234')).toEqual(1.234);
  });

  it('parseFloat should convert invalid input string to null', () => {
    expect(Utils.parseFloat('2k3415123as_')).toBeNull();
  });

  it('sanitizeInt should remove periods', () => {
    expect(Utils.sanitizeInt('12.34')).toEqual('1234');
  });

  it('sanitizeInt should remove non digit characters', () => {
    expect(Utils.sanitizeInt('0abc*)_+=')).toEqual('0');
  });

  it('parseInt should convert valid input string to number', () => {
    expect(Utils.parseInt('564789')).toEqual(564789);
  });

  it('parseInt should convert invalid input string to null', () => {
    expect(Utils.parseInt('23491y0+ASDf')).toBeNull();
  });

  it('isNumber should return true for valid number input', () => {
    expect(Utils.isNumber('0')).toBeTruthy();
    expect(Utils.isNumber('0.1234')).toBeTruthy();
    expect(Utils.isNumber(0.1234)).toBeTruthy();
    expect(Utils.isNumber('81239')).toBeTruthy();
  });

  it('isNumber should return false for invalid number input', () => {
    expect(Utils.isNumber('0a')).toBeFalsy();
    expect(Utils.isNumber('a0')).toBeFalsy();
    expect(Utils.isNumber('___44')).toBeFalsy();
    expect(Utils.isNumber('1+2*3')).toBeFalsy();
    expect(Utils.isNumber(null)).toBeFalsy();
    expect(Utils.isNumber({})).toBeFalsy();
  });

  it('round should properly round numbers', () => {
    expect(Utils.round(3.5, 0)).toEqual(4);
    expect(Utils.round(3.4, 0)).toEqual(3);
    expect(Utils.round(3.44, 1)).toEqual(3.4);
    expect(Utils.round(3.45, 1)).toEqual(3.5);
    expect(Utils.round(3.454, 2)).toEqual(3.45);
    expect(Utils.round(3.455, 2)).toEqual(3.46);
  });

});
