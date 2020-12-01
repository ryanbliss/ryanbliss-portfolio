export default class PortfolioItem {
  constructor({
    id,
    name,
    description,
    imagePath,
    html,
    tagNames,
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.htmlPath = html;
    this.tagNames = tagNames;
  }
}
