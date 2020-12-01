import Tag from '@/models/tag/tag';

export default {
  namespaced: true,
  state: {
    tags: [
      new Tag({
        name: 'Javascript',
        type: 'CODE',
      }),
      new Tag({
        name: 'Swift',
        type: 'CODE',
      }),
      new Tag({
        name: 'Java',
        type: 'CODE',
      }),
      new Tag({
        name: 'Node.js',
        type: 'CODE',
      }),
      new Tag({
        name: 'C#',
        type: 'CODE',
      }),
      new Tag({
        name: 'Vue.js',
        type: 'CODE',
      }),
      new Tag({
        name: 'Flutter',
        type: 'CODE',
      }),
      new Tag({
        name: 'Dart',
        type: 'CODE',
      }),
      new Tag({
        name: 'Figma',
        type: 'UX',
      }),
      new Tag({
        name: 'Sketch',
        type: 'UX',
      }),
      new Tag({
        name: 'Mixpanel',
        type: 'UX',
      }),
      new Tag({
        name: 'Pendo',
        type: 'UX',
      }),
      new Tag({
        name: 'Hotjar',
        type: 'UX',
      }),
      new Tag({
        name: 'Custom Built',
        type: 'UX',
      }),
    ],
  },
  getters: {
    tagForName: (state) => (name) => state.tags
      .find((tag) => tag.name === name),
    tagsForType: (state) => (type) => state.tags
      .filter((tag) => tag.type === type),
  },
};
