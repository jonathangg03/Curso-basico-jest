export const getCharacter = (data) => {
    const objeto = {
        "id": data.id,
        "name": data.name,
        "status" : data.status,
        "species": data.species,
        "gender": data.gender
    }
    
    return objeto
};