import { useParams } from "react-router-dom";
import pokemonHome from "../assets/pokemon-home.json"
import { Pokemon } from "../types/Pokemon";
import "./PokemonDetailsPage.scss";
import PokemonInfo from "../components/PokemonInfo";
import { toTitleCase } from "../utils/string";

const pokemon: Pokemon[] = pokemonHome as Pokemon[];

export default function PokemonDetailPage() {
    const params = useParams();
    const pokemonIndex = Number(params.index);
    const profile = pokemon[pokemonIndex]

    if (!params.index || !profile) {
        return <div>invalid pokemon!</div>
    }

    let prevPokemon = (pokemonIndex - 1 + pokemon.length) % pokemon.length;
    let nextPokemon = (pokemonIndex + 1) % pokemon.length;

    return (
        <div className="pokemon-details-page">
            <a href="/"><h1>Poke-Info</h1></a>
            <hr/>
            <h2>
                {toTitleCase(profile.name)}
            </h2>
            <PokemonInfo profile={profile}/>
            <div className="actions">
                <a href={"/pokemon/" + prevPokemon}>Previous Pokemon</a>
                <a href={"/pokemon/" + nextPokemon}>Next Pokemon</a>
            </div>
        </div>
    )
}

