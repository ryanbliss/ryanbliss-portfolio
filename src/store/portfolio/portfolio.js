/* eslint-disable global-require */
import PortfolioItem from '@/models/portfolio/portfolio-item';
import getCorzoHtml from '@/assets/portfolio/corzo/corzo-html';

export default {
  namespaced: true,
  state: {
    items: [
      new PortfolioItem({
        id: 0,
        name: 'Corzo',
        description: 'Designed and developed the Corzo web app, Chrome extension, and several Node.js microservices.',
        imagePath: require('@/assets/portfolio/corzo/corzo-feature-image.png'),
        html: getCorzoHtml(),
        tagNames: [
          'Javascript',
          'Node.js',
          'Vue.js',
          'Sketch',
          'Mixpanel',
          'Hotjar',
        ],
      }),
    ],
  },
  getters: {
    portfolioItemForId: (state) => (id) => state.items
      .find((item) => item.id === id),
    portfolioItemsForTagName: (state) => (tagName) => state.items
      .filter((item) => item.tagNames.includes(tagName)),
  },
};
