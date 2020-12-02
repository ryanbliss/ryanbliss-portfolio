/* eslint-disable global-require */
import PortfolioItem from '@/models/portfolio/portfolio-item';
import getCorzoHtml from '@/assets/portfolio/corzo/corzo-html';
import getPollenWiseHtml from '@/assets/portfolio/pollen-wise/pollen-wise-html';
import getUserbuddyHtml from '@/assets/portfolio/userbuddy/userbuddy-html';
import getSoarHtml from '@/assets/portfolio/soar/soar-html';

export default {
  namespaced: true,
  state: {
    items: [
      new PortfolioItem({
        id: 'corzo',
        name: 'Corzo',
        description: 'As the co-founder of Corzo, I helped build a note-taking tool for account executives that use Salesforce. Integrating with tools its users use each day, Corzo simplifies + consolidates workflows of enterprise account executives.',
        imagePath: require('@/assets/portfolio/corzo/corzo-feature-image.png'),
        html: getCorzoHtml(),
        tagNames: [
          'Javascript',
          'Node.js',
          'Vue.js',
          'Sketch',
          'Mixpanel',
          'Hotjar',
          'LucidChart',
        ],
        website: 'https://www.corzo.io',
        galleryImagePaths: [
          require('@/assets/portfolio/corzo/gallery/corzo-1.jpg'),
          require('@/assets/portfolio/corzo/gallery/corzo-2.jpg'),
          require('@/assets/portfolio/corzo/gallery/corzo-3.jpg'),
          require('@/assets/portfolio/corzo/gallery/corzo-4.jpg'),
        ],
      }),
      new PortfolioItem({
        id: 'pollenwise',
        name: 'Pollen Wise',
        description: 'As a consultant, I rebuilt the Pollen Wise app — a way for allergy suffers to view local pollen counts, track symptoms, and learn about possible treatments. My redesign & rebuild helped them reach tens of thousands of new users through organic growth.',
        imagePath: require('@/assets/portfolio/pollen-wise/pollen-wise-feature-image.png'),
        html: getPollenWiseHtml(),
        tagNames: [
          'Flutter + Dart',
          'Figma',
          'Custom Built',
        ],
        website: 'https://www.pollenwise.com',
        galleryImagePaths: [
          require('@/assets/portfolio/pollen-wise/gallery/pw-1.jpg'),
          require('@/assets/portfolio/pollen-wise/gallery/pw-2.jpg'),
          require('@/assets/portfolio/pollen-wise/gallery/pw-3.jpg'),
        ],
      }),
      new PortfolioItem({
        id: 'userbuddy',
        name: 'Userbuddy',
        description: "As a fun side project, we are building an SDK for data-driven app developers. The idea is to standardize the feedback loop I've used on my top-rated apps: collect user sentiment/feedback, target cohorts with usability surveys & study invitations, and ask happy users to leave an app review.",
        imagePath: require('@/assets/portfolio/userbuddy/userbuddy-feature-image.jpg'),
        html: getUserbuddyHtml(),
        tagNames: [
          'Swift',
          'Vue.js',
          'Javascript',
          'Figma',
        ],
        website: null,
        galleryImagePaths: [
          require('@/assets/portfolio/userbuddy/userbuddy-feature-image.jpg'),
        ],
      }),
      new PortfolioItem({
        id: 'soar',
        name: 'Soar',
        description: 'From the founder of Ancestry.com, Soar is a platform for coaches and trainers various business needs (i.e. invoices, marketplace, etc.). As their primary UX consultant, I worked closely with their users to identify pain points, prototype ideas, and ship solutions.',
        imagePath: require('@/assets/portfolio/soar/soar-feature-image.jpg'),
        html: getSoarHtml(),
        tagNames: [
          'Sketch',
          'Hotjar',
          'LucidChart',
          'Javascript',
        ],
        website: null,
        galleryImagePaths: [
          require('@/assets/portfolio/soar/soar-feature-image.jpg'),
        ],
      }),
    ],
  },
  getters: {
    portfolioItemForId: (state) => (id) => state.items
      .find((item) => item.id === id),
    portfolioItemsForTagName: (state) => (tagName) => state.items
      .filter((item) => item.tagNames.includes(tagName)),
    portfolioItemCountForTagName: (state, getters) => (tagName) => getters
      .portfolioItemsForTagName(tagName).length,
  },
};
