// import Cookies from 'js-cookie';
// import router from '../../router/index';

export default {
  namespaced: true,
  state: {
    path: '/',
    portfolioItemId: null,
  },
  mutations: {
    setPath(state, path) {
      state.path = path;
    },
    setParams(state, params) {
      state.portfolioItemId = params.itemid || null;
    },
  },
};
