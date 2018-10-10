import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CalculatorInput from '@/components/CalcInput.vue';

describe('CalcInput.vue', () => {
  it('emmits event on allowed char', () => {
    const wrapper = shallowMount(CalculatorInput);
    wrapper.find('input').setValue('1');
    expect(wrapper.emitted()['on-change'][0][0]).to.be.equal('1');
  });
  it('emmits events on allowed char', () => {
    const wrapper = shallowMount(CalculatorInput);
    wrapper.find('input').setValue('1');
    wrapper.find('input').setValue('2');
    expect(wrapper.emitted()['on-change'].length).to.be.equal(2);
  });
});
