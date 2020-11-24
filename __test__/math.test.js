import {sumar, mult, restar, dividir} from '../math.js';

describe('Calculos matematicos', () => {//Hacer una descripción, y ahi dentro hacemos nuestra prueba
    test('Prueba de sumas', () => {//Hacer una prueba, le damos un nombre
        expect(sumar(1, 1)).toBe(2);
    });

    test('Prueba de multiplicar', () => {
        expect(mult(2, 2)).toBe(4);
    });

    test('Prueba de restar', () => {
        expect(restar(3, 1)).toBe(2);
    });

    test('Prueba de dividir', () => {
        expect(dividir(4, 2)).toBe(2);
    })
});