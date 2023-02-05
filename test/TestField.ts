import {expect} from 'chai';
import {Field} from '../class/Field';
/**
 * Ce test unitaire vérifie que lorsque vous appelez le constructeur Field avec une taille donnée, un objet de type Field est créé.
 * Le test utilise la méthode to.be.an.instanceOf de Chai pour vérifier si l'objet créé est bien une instance de la classe Field.
 */
describe('Field classe', () => {
    it('Devrait créer une instance de Field', () => {
        const size = 100;
        const field = new Field(size);
        expect(field).to.be.an.instanceOf(Field);
    });
});
