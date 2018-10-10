import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Keypad from '@/components/Keypad.vue';

describe('Keypad.vue', () => {
  const testKey = (id, key) => {
    it(`emits ${key} event when key: ${id} clicked`, () => {
      const wrapper = shallowMount(Keypad);
      wrapper.find(`#${id}`).trigger('click');
      expect(wrapper.emitted()['on-key'][0][0].value).to.be.equal(key);
    });
  };
  testKey('one', '1');
  testKey('two', '2');
  testKey('three', '3');
  testKey('four', '4');
  testKey('five', '5');
  testKey('six', '6');
  testKey('seven', '7');
  testKey('eight', '8');
  testKey('nine', '9');
  testKey('divide', '/');
  testKey('plus', '+');
  testKey('minus', '-');
  testKey('multiply', '*');
  testKey('plus', '+');
  testKey('exp', '^');
  it('emits clear event', () => {
    const wrapper = shallowMount(Keypad);
    wrapper.find('#clear').trigger('click');
    expect(wrapper.emitted()['on-clear']).not.to.be.undefined;
  });
  it('emits equal event', () => {
    const wrapper = shallowMount(Keypad);
    wrapper.find('#equal').trigger('click');
    expect(wrapper.emitted()['on-equal']).not.to.be.undefined;
  });
  it('emits backspace event', () => {
    const wrapper = shallowMount(Keypad);
    wrapper.find('#backspace').trigger('click');
    expect(wrapper.emitted()['on-backspace']).not.to.be.undefined;
  });
});
