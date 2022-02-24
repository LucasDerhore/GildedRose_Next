const { Shop } = require("../src/gilded_rose");
const { LegendaryItem } = require("../src/legendary_item");
const { LostQuality } = require("../src/lost_quality");
const { WinningQuality } = require("../src/winning_quality");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new LostQuality("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  // Legendary Test
  it("Legendary quality", function () {
    const gildedRose = new Shop([
      new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it("Lost quality", function () {
    const gildedRose = new Shop([
      new LostQuality("+5 Dexterity Vest", 10, 20),
      new LostQuality("Elixir of the Mongoose", 5, 7),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
    expect(items[1].quality).toBe(6);
  });

  it("Winning quality", function () {
    const gildedRose = new Shop([
      new WinningQuality("Aged Brie", 2, 0),
      new WinningQuality("Aged Brie", 5, 0),
      new WinningQuality("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new WinningQuality("Backstage passes to a TAFKAL80ETC concert", 10, 0),
      new WinningQuality("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
    expect(items[1].quality).toBe(3);
    expect(items[2].quality).toBe(21);
    //expect(items[3].quality).toBe(2);
    expect(items[4].quality).toBe(50);
  });
});
