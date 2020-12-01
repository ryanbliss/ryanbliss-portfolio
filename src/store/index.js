import Vue from 'vue';
import Vuex from 'vuex';
import tags from './tags/tags';
import portfolio from './portfolio/portfolio';
import route from './route/route';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tags,
    portfolio,
    route,
  },
});
