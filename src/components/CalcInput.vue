<template>
<!--
  .sync won't work here as we also need to update
  value after filtering out unexpected chars,
  that's why I used custom implementation
  -->
<div
  :class="{
    'v-input':true,
    'v-text-field':true,
    'theme--light':true,
    'v-input--is-focused':isFocused,
    'primary--text':isFocused
    }">
  <div class="v-input__control">
    <div class="v-input__slot">
    <input
      :value="equation"
      @focus="isFocused=true"
      @blur="isFocused=false"
      @keyup.enter="onEnter"
      @input="onInput"/>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: [
    'equation',
  ],
  data() {
    return { isFocused: false };
  },
  methods: {
    onEnter() {
      this.$emit('on-equal');
    },
    onInput(e) {
      this.$emit('on-change', e.target.value);
      // force input to re-rerender if unexpected char is used
      this.$forceUpdate();
    },
  },
};
</script>
<style lang="stylus">
input
  font-size 24px
</style>
