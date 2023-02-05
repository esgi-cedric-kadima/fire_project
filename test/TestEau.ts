import {Eau} from "../class/props/Eau";
import { expect } from 'chai';

describe('Test Eau class', () => {
    it("Devrait créer une instance d'Eau", () => {
        const eau = new Eau();
        expect(eau).to.be.an.instanceOf(Eau);
    });
});
