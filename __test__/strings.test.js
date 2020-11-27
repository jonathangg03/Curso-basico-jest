describe('Comprobar cadenas de texto', () => {
    const text = 'Un bonito texo';


    test('Debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    });

    test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/es/);
    })

    test('Debe tener el tamaño', () => {
        expect(text).toHaveLength(14)
    });
})