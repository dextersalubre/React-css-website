export default class Theme {
  static KEY = "theme";

  constructor(name = "dark") {
    this.name = name === "light" ? "light" : "dark";
  }

  isLight() {
    return this.name === "light";
  }

  toggle() {
    return new Theme(this.isLight() ? "dark" : "light");
  }

  apply(root = document.documentElement) {
    root.setAttribute("data-theme", this.name);
  }

  save() {
    try {
      localStorage.setItem(Theme.KEY, this.name);
    } catch {
      // storage unavailable, theme just won't persist
    }
  }

  static load() {
    try {
      return new Theme(localStorage.getItem(Theme.KEY));
    } catch {
      return new Theme();
    }
  }
}