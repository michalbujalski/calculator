import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Calculator from '@/components/Calculator.vue';
import CalcInput from '@/components/CalcInput.vue';
import Keypad from '@/components/Keypad.vue';

describe('Calculator.vue', () => {
  it('cointains all controlls', () => {
    const wrapper = shallowMount(Calculator);
    expect(wrapper.find(CalcInput).exists()).to.be.equal(true);
    expect(wrapper.find(Keypad).exists()).to.be.equal(true);
  });
  it('updates equation', () => {
    const wrapper = shallowMount(Calculator);
    wrapper.find(CalcInput).vm.$emit('on-change', '123');
    expect(wrapper.vm.equation).to.be.equal('123');
  });
  it('update with equation containing unexpected chars', () => {
    const wrapper = shallowMount(Calculator);
    wrapper.find(CalcInput).vm.$emit('on-change', 'a987bc#');
    expect(wrapper.vm.equation).to.be.equal('987');
  });
  it('evaluate equation on enter', () => {
    const wrapper = shallowMount(Calculator);
    wrapper.vm.equation = '1+2';
    wrapper.find(CalcInput).vm.$emit('on-equal');
    expect(wrapper.vm.equation).to.be.equal('3');
  });
  it('update and evaluate equation', () => {
    const wrapper = shallowMount(Calculator);
    wrapper.vm.equation = '2^3';
    wrapper.find(Keypad).vm.$emit('on-key', '+');
    wrapper.find(CalcInput).vm.$emit('on-equal');
    expect(wrapper.vm.equation).to.be.equal('8');
  });
  it('update and evaluate equation', () => {
    const wrapper = shallowMount(Calculator);
    wrapper.vm.equation = '3^3+2';
    wrapper.find(Keypad).vm.$emit('on-backspace');
    wrapper.find(Keypad).vm.$emit('on-backspace');
    wrapper.find(Keypad).vm.$emit('on-equal');
    expect(wrapper.vm.equation).to.be.equal('27');
  });
  it('clear equation', () => {
    const wrapper = shallowMount(Calculator);
    wrapper.vm.equation = '3^3+2-12';
    wrapper.find(Keypad).vm.$emit('on-clear');
    expect(wrapper.vm.equation).to.be.equal('0');
  });
});
