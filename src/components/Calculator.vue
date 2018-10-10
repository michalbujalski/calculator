<template>
  <v-card class="calculator">
    <v-container align-center justify-content fluid>
      <v-layout row>
        <v-flex>
          <calc-input
            ref="calcInput"
            @on-change="onChange"
            @on-equal="onEqual"
            :equation="equation">
          </calc-input>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <keypad
            @on-key="onKey"
            @on-equal="onEqual"
            @on-clear="onClear"
            @on-backspace="onBackspace"
            />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import Keypad from '@/components/Keypad';
import CalcInput from './CalcInput.vue';
import { calcFilter, removeLastChar, evaluate, INIT_VALUE, filterEquation } from '../calculator';

export default {
  components: {
    Keypad, CalcInput,
  },
  props: {
    msg: String,
  },
  data() {
    return { equation: INIT_VALUE };
  },
  methods: {
    onChange(changed) {
      this.equation = filterEquation(changed);
    },
    onKey(event) {
      this.equation = calcFilter(this.equation, event.value);
    },
    onEqual() {
      this.equation = evaluate(this.equation);
    },
    onClear() {
      this.equation = INIT_VALUE;
    },
    onBackspace() {
      this.equation = removeLastChar(this.equation);
    },
  },
};
</script>
<style scoped lang="stylus">
.calculator
  max-width 900px
  margin auto
</style>
