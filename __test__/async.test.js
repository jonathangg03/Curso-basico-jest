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
})