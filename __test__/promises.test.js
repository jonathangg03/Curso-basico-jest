import {getDataFromApi} from '../promises';

describe('Probaremos promesas', () => {
    test('Realizando una petición a una API', done => {
        const api = 'https://rickandmortyapi.com/api/character/'
        getDataFromApi(api)
        .then(data => {
            expect(data.results.length).toBeGreaterThan(0);
            done()
        })
    });

    test('Resuelve un hola', () => {
        return expect(Promise.resolve('Hola!!')).resolves.toBe('Hola!!')
    });

    test('Rechaza con un error', () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error');
    })
})