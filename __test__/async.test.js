import { getDataFromApi } from '../promises'

describe('Probar async-await', () => {
    test('Realizar una peticion a una API', async () => {
        const API = 'https://rickandmortyapi.com/api/character/';
        const API_RICK = 'https://rickandmortyapi.com/api/character/1';
        await getDataFromApi(API).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });
        
        await getDataFromApi(API_RICK).then(data => {
            expect(data.name).toEqual('Rick Sanchez');
        });
    });

    test('Realizando una petición a una API con error', async () => {
        const apiError = 'http://httpstat.us/404'//Esta api retorna un error 404
        const peticion =  getDataFromApi(apiError);
        await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
    });


    test('Resuelve un Hola', async () => {
        await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
        await expect(Promise.reject('Error')).rejects.toBe('Error');
    });
})