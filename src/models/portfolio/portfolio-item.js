export default class PortfolioItem {
  constructor({
    id,
    name,
    description,
    imagePath,
    html,
    tagNames,
    website,
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.html = html;
    this.tagNames = tagNames;
    this.website = website || null;
  }
}
