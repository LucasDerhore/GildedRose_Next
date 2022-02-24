const { Item } = require("../src/gilded_rose");

class LostQuality extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality > 0) this.quality -= 1;
    if (this.quality < 0) this.quality = 0;
    this.sellIn -= 1;
  }
}

module.exports = {
  LostQuality,
};
