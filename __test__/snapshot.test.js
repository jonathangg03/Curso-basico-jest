import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('Snapshoot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });
});