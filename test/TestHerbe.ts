import {Herbe} from "../class/props/Herbe";
import { expect } from 'chai';

describe('Test Herbe class', () => {
    it("Devrait créer une instance d'Herbe", () => {
        const eau = new Herbe();
        expect(eau).to.be.an.instanceOf(Herbe);
    });
});
