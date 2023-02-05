import {expect} from "chai";
import {Item} from "../class/Item";


describe("Item class", () => {
    it("Devrait créer une instance d'une Item", () => {
        const x = 5;
        const y = 10;
        const terrainType = "desert";
        const item = new Item(x, y, terrainType);
        expect(item).to.be.an.instanceOf(Item);
        expect(item.x).to.equal(x);
        expect(item.y).to.equal(y);
        expect(item.terrainType).to.equal(terrainType);
    });
});