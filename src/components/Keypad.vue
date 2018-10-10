<template>
  <v-container class="keypad">
    <key-layout>
      <v-btn
        id="clear"
        slot="col1"
        color="primary"
        flat
        class="keypad__btn"
        @click="onClear">
        C
      </v-btn>
      <v-btn
        id="backspace"
        slot="col2"
        color="primary"
        flat
        class="keypad__btn"
        @click="onBackspace">
        DEL
      </v-btn>
      <v-btn
        id="exp"
        slot="col3"
        color="primary"
        flat
        class="keypad__btn"
        @click="onKeyClick('^')">
        ^
      </v-btn>
      <v-btn
        id="multiply"
        slot="col4"
        color="primary"
        flat
        class="keypad__btn"
        @click="onKeyClick('*')">
        *
      </v-btn>
    </key-layout>
    <key-layout>
      <v-btn
        id="seven"
        slot="col1"
        flat
        class="keypad__btn"
        @click="onKeyClick('7')">
        7
      </v-btn>
      <v-btn
        id="eight"
        slot="col2"
        flat
        class="keypad__btn"
        @click="onKeyClick('8')">
        8
      </v-btn>
      <v-btn
        id="nine"
        slot="col3"
        flat
        class="keypad__btn"
        @click="onKeyClick('9')">
        9
      </v-btn>
      <v-btn
        id="divide"
        slot="col4"
        color="primary"
        flat
        class="keypad__btn"
        @click="onKeyClick('/')">
        /
      </v-btn>
    </key-layout>
    <key-layout>
      <v-btn
        id="four"
        slot="col1"
        flat
        class="keypad__btn"
        @click="onKeyClick('4')">
        4
      </v-btn>
      <v-btn
        id="five"
        slot="col2"
        flat
        class="keypad__btn"
        @click="onKeyClick('5')">
        5
      </v-btn>
      <v-btn
        id="six"
        slot="col3"
        flat
        class="keypad__btn"
        @click="onKeyClick('6')">
        6
      </v-btn>
      <v-btn
        id="minus"
        slot="col4"
        color="primary"
        flat
        class="keypad__btn"
        @click="onKeyClick('-')">
        -
      </v-btn>
    </key-layout>
    <key-layout>
      <v-btn
        id="one"
        slot="col1"
        flat
        class="keypad__btn"
        @click="onKeyClick('1')">
        1
      </v-btn>
      <v-btn
        id="two"
        slot="col2"
        flat
        class="keypad__btn"
        @click="onKeyClick('2')">
        2
      </v-btn>
      <v-btn
        id="three"
        slot="col3"
        flat
        class="keypad__btn"
        @click="onKeyClick('3')">
        3
      </v-btn>
      <v-btn
        id="plus"
        slot="col4"
        flat
        color="primary"
        class="keypad__btn"
        @click="onKeyClick('+')">
        +
      </v-btn>
    </key-layout>
    <v-layout row>
      <v-flex
        xs6>
        <v-btn
          id="zero"
          flat
          class="keypad__btn"
          @click="onKeyClick('0')">
          0
        </v-btn>
      </v-flex>
      <v-flex
        xs3>
        <v-btn
          id="comma"
          flat
          class="keypad__btn"
          @click="onKeyClick('.')">
          .
        </v-btn>
      </v-flex>
      <v-flex
        xs3>
        <v-btn
          id="equal"
          color="primary"
          class="keypad__btn"
          @click="onEqual()">
          =
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import KeyLayout from './KeyLayout.vue';

const keyObj = (label, classes, value, id) => ({
  label,
  classes,
  value,
  id,
});

export default {
  components: { KeyLayout },
  methods: {
    onKeyClick(key) {
      this.$emit('on-key', { value: key });
    },
    onEqual() {
      this.$emit('on-equal');
    },
    onBackspace() {
      this.$emit('on-backspace');
    },
    onClear() {
      this.$emit('on-clear');
    },
  },
};
</script>

<style lang="stylus">
.keypad
  &__btn
    width 100%
    user-select none
    color white
    text-align center
    cursor pointer
    font-size 24px
</style>
