import PokemonInfo from "../components/PokemonInfo";
import { getRandomArrayIndex, toTitleCase } from "../utils/string";
import pokemonHome from "../assets/pokemon-home.json"
import { Pokemon } from "../types/Pokemon";

const pokemon: Pokemon[] = pokemonHome as Pokemon[];

export default function RandomPokemonPage() {
    const profile = pokemon[getRandomArrayIndex(pokemon)];
    return (
        <div className="pokemon-details-page">
        <a href="/"><h1>Poke-Info</h1></a>
        <hr/>
        <h2>
            {toTitleCase(profile.name)}
        </h2>
        <PokemonInfo profile={profile}/>
        <div className="actions">
                <a href="/random">Get another random pokemon</a>
        </div>
    </div>
    )
}