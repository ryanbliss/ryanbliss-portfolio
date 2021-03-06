import {
  cabana,
  corzo,
  knowMe,
  pollenWise,
  skipio,
  soar,
  taxzilla,
  userbuddy,
  wordwars,
  flipbook,
  hashtaggy,
  covidQuiz,
  coinly,
} from './reference/portfolio-reference';

export default {
  namespaced: true,
  state: {
    items: [
      corzo,
      pollenWise,
      userbuddy,
      soar,
      wordwars,
      skipio,
      cabana,
      knowMe,
      covidQuiz,
      flipbook,
      coinly,
      taxzilla,
      hashtaggy,
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
