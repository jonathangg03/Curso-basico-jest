import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('Snapshoot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('Siempre fallará la instantanea', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20)//Valores aleatorios del 0 al 19
        }
        expect(user).toMatchSnapshot();
    });


    test('Tenemos una excepción', () => {
        const user = {
            id: Math.floor(Math.random() * 20),//Valores aleatorios del 0 al 19
            name: 'Jonathan Garcia'
        }

        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    });
});