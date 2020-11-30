export default class Tag {
  constructor({
    name,
    type,
  }) {
    if (!['CODE', 'UX'].includes(type)) {
      console.trace();
      throw new Error(`tag.js: invalid type of ${type}`);
    }
    this.name = name;
    this.type = type;
  }
}
