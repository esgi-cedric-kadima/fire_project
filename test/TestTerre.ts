import {Terre} from "../class/props/Terre";
import { expect } from 'chai';

describe('Test Terre class', () => {
    it("Devrait créer une instance de Terre", () => {
        const eau = new Terre();
        expect(eau).to.be.an.instanceOf(Terre);
    });
});
