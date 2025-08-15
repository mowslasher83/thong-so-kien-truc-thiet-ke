class DesignSystem {
  constructor() {
    this.colors = {};
  }

  setColors(colors) {
    this.colors = colors;
  }

  getColors() {
    return this.colors;
  }

  setFonts(fonts) {
    this.fonts = fonts;
  }

  getFonts() {
    return this.fonts;
  }
}

const designSystem = new DesignSystem();
export default designSystem;