import Vue from 'vue';
import Vuex from 'vuex';
import tags from './tags/tags';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tags,
  },
});
