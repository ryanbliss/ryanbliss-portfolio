export default class PortfolioItem {
  constructor({
    id,
    name,
    description,
    imagePath,
    html,
    tagNames,
    website,
    galleryImagePaths,
    buttonText,
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.html = html;
    this.tagNames = tagNames;
    this.website = website || null;
    this.galleryImagePaths = galleryImagePaths;
    this.buttonText = buttonText;
  }
}
