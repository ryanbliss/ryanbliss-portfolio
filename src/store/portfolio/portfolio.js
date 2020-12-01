/* eslint-disable global-require */
import PortfolioItem from '@/models/portfolio/portfolio-item';
import getCorzoHtml from '@/assets/portfolio/corzo/corzo-html';
import getPollenWiseHtml from '@/assets/portfolio/pollen-wise/pollen-wise-html';

export default {
  namespaced: true,
  state: {
    items: [
      new PortfolioItem({
        id: 'corzo',
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
        website: 'https://www.corzo.io',
      }),
      new PortfolioItem({
        id: 'pollenwise',
        name: 'Pollen Wise',
        description: 'Designed and developed Pollen Wise -- the popular iOS and Android app. Led usability studies & user interviews.',
        imagePath: require('@/assets/portfolio/pollen-wise/pollen-wise-feature-image.png'),
        html: getPollenWiseHtml(),
        tagNames: [
          'Flutter',
          'Dart',
          'Figma',
          'Custom Built',
        ],
        website: 'https://www.pollenwise.com',
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
