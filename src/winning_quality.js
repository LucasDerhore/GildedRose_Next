const { Item } = require("../src/gilded_rose");

class WinningQuality extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn <= 5) this.quality += 3;
    else if (this.sellIn <= 10) this.quality += 2;
    else this.quality += 1;
    if (this.quality > 50) this.quality = 50;
    if (this.sellIn === 0) this.quality = 0;
    this.sellIn -= 1;
  }
}

module.exports = {
  WinningQuality,
};
