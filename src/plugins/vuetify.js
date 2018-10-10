import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VBtn,
  VIcon,
  VGrid,
  VTextField,
  VCard,
  transitions,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';
import { Ripple } from 'vuetify/es5/directives';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VIcon,
    VGrid,
    VTextField,
    VCard,
    transitions,
  },
  directives: [Ripple],
  iconfont: 'md',
});
