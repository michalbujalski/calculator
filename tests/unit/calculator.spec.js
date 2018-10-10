import {
  calcFilter,
  isOperator,
  removeLastChar,
  endsWithDigit,
  endsWithDecimal,
  isSeparator,
  endsWithSeparatorOrOperator,
  trimOperators,
  filterEquation,
  evaluate,
} from '../../src/calculator';
import { expect } from 'chai';

describe('trim unexpected chars', () => {
  it('remove all unexpected chars', () => {
    expect(filterEquation('12a23#')).to.be.equal('1223');
  });
  it('remove init unexpected char', () => {
    expect(filterEquation('@#')).to.be.equal('0');
  });
  it('remove prepending 0 if next char is digit', () => {
    expect(filterEquation('01')).to.be.equal('1');
  });
});

describe('trim equation', () => {
  it('trim trailing operator', () => {
    expect(trimOperators('12+')).to.be.equal('12');
  });
  it('trim trailing separator', () => {
    expect(trimOperators('12.')).to.be.equal('12');
  });
  it('trim appending separator', () => {
    expect(trimOperators('.33')).to.be.equal('33');
  });
  it('trim appending unexpected operaator', () => {
    expect(trimOperators('*9111')).to.be.equal('9111');
  });
  it('don\'t trim appending expected operaator', () => {
    expect(trimOperators('+235')).to.be.equal('+235');
  });
  it('don\'t trim appending expected operaator', () => {
    expect(trimOperators('-1')).to.be.equal('-1');
  });
  it('trim all operators', () => {
    expect(trimOperators('*3-3-')).to.be.equal('3-3');
  });
  it('trim only unexpected operators', () => {
    expect(trimOperators('-3-3+')).to.be.equal('-3-3');
  });
});

describe('evaluator', () => {
  it('evaluates equation', () => {
    expect(evaluate('2+2')).to.be.equal('4');
  });
  it('handle incorrect equation', () => {
    expect(evaluate('12+1/')).to.be.equal('13');
  });
});

describe('helper functions', () => {
  it('deltes last char', () => {
    expect(removeLastChar('2+1')).to.be.equal('2+');
  });
  it('deltes last char, fallback to 0', () => {
    expect(removeLastChar('2')).to.be.equal('0');
  });
  it('check is separator .', () => {
    expect(isSeparator('.')).to.be.equal(true);
  });
  it('check is separator ,', () => {
    expect(isSeparator(',')).to.be.equal(true);
  });
  it('check is separator 0', () => {
    expect(isSeparator('0')).to.be.equal(false);
  });
  it('check operator +', () => {
    expect(isOperator('+')).to.be.equal(true);
  });
  it('check operator -', () => {
    expect(isOperator('-')).to.be.equal(true);
  });
  it('check operator *', () => {
    expect(isOperator('*')).to.be.equal(true);
  });
  it('check operator /', () => {
    expect(isOperator('/')).to.be.equal(true);
  });
  it('check non-operator', () => {
    expect(isOperator(',')).to.be.equal(false);
  });
  it('check ends with digit', () => {
    expect(endsWithDigit('0.01')).to.be.equal(true);
  });
  it('check does not end with digit', () => {
    expect(endsWithDigit('0.0+')).to.be.equal(false);
  });
  it('check ends with decimal', () => {
    expect(endsWithDecimal('12+0.12')).to.be.equal(true);
  });
  it('check ends with decimal', () => {
    expect(endsWithDecimal('12+12')).to.be.equal(false);
  });
  it('check ends with decimal if init value 0', () => {
    expect(endsWithDecimal('0')).to.be.equal(false);
  });
  it('check ends with digit', () => {
    expect(endsWithDecimal('12+0.12')).to.be.equal(true);
  });
  it('check ends with digit', () => {
    expect(endsWithDecimal('12+0.1/')).to.be.equal(false);
  });
  it('check if last separator', () => {
    expect(endsWithSeparatorOrOperator('12.')).to.be.equal(true);
  });
  it('check if last separator or operator', () => {
    expect(endsWithSeparatorOrOperator('3*')).to.be.equal(true);
  });
});
describe('calc-filter', () => {
  it('appends input to equation if digit', () => {
    expect(calcFilter('12', '2')).to.be.equal('122');
  });
  it('appends input to equation if operator +', () => {
    expect(calcFilter('12', '+')).to.be.equal('12+');
  });
  it('appends input to equation if operator /', () => {
    expect(calcFilter('1', '/')).to.be.equal('1/');
  });
  it('changes operator if equation ends with operator', () => {
    expect(calcFilter('1+', '/')).to.be.equal('1/');
  });
  it('ignores comma if equation ends with comama', () => {
    expect(calcFilter('1.', '.')).to.be.equal('1.');
  });
  it('changes to operator if equation ends with comma', () => {
    expect(calcFilter('1.', '+')).to.be.equal('1+');
  });
  it('changes to operator if equation ends with comma', () => {
    expect(calcFilter('0.00', '.')).to.be.equal('0.00');
  });
  it('appends operator if equation ends with decimal', () => {
    expect(calcFilter('0.00', '.')).to.be.equal('0.00');
  });
  it('has init value 0', () => {
    expect(calcFilter('0', '.')).to.be.equal('0.');
  });
  it('append operation to init digit', () => {
    expect(calcFilter('0', '+')).to.be.equal('0+');
  });
});
