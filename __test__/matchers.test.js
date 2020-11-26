describe('Comparadores comunes', () => {
    const user = {
        name: "Oscar",
        lastname: "barajas"
    };

    const user2 = {
        name: "Oscar",
        lastname: "Barajas"
    };

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2)
    });

    test('No son exactamente igual', () => {
        expect(user).not.toEqual(user2)
    });
});