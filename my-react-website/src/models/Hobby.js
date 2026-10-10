export default class Hobby {
  constructor({ title, text, image, alt, caption = "", border = false }) {
    this.title = title;
    this.text = text;
    this.image = image;
    this.alt = alt;
    this.caption = caption;
    this.border = border;
  }

  hasCaption() {
    return this.caption.trim() !== "";
  }

  imageClasses() {
    return `w-full rounded-xl ${this.border ? "border border-line" : ""}`.trim();
  }
}