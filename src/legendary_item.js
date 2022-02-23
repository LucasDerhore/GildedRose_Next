const { Item } = require("../src/gilded_rose");

class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    return this.quality;
  }
}

module.exports = {
  LegendaryItem,
};
