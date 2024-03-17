import fs from "fs";

const pokemonData = [];

async function preprocess() {
    const allPokemonResponse = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302");
    const allPokemonJson = await allPokemonResponse.json();

    for (let result of allPokemonJson.results) {
        const pokemonResponse = await fetch(result.url);
        const pokemonJson = await pokemonResponse.json();

        pokemonData.push({
            name: result.name,
            id: pokemonJson.order,
            sprite: pokemonJson.sprites.front_default,
            types: pokemonJson.types.map((type) => type.type.name)
        })
    }

    fs.writeFile('data.json', JSON.stringify(pokemonData, null, 4), (err) => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
}

preprocess();
console.log(pokemonData)
