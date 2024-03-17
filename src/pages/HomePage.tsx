import { useNavigate } from "react-router-dom";
import pokemon from "../assets/pokemon-home.json"
import typeColorsRaw from "../assets/type-colors.json"

import "./HomePage.scss";
import { useState } from "react";
import { PokemonTypeColors } from "../types/PokemonTypeColors";

const typeColors: PokemonTypeColors = typeColorsRaw as PokemonTypeColors;

export default function HomePage() {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("all");

    const selectedPokemon = selectedType === "all" ? pokemon : pokemon.filter(individual => individual.types.includes(selectedType))

    return (
        <div className="home">
            <h1 className="title">Poke-Info</h1>
            <a href="/random"><h2 className="title">Random Pokemon</h2></a>
            <div>
                <input placeholder="Search" onChange={e => setSearchQuery(e.target.value)} />
                <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
                    <option value="all">All  Types</option>
                    {Object.keys(typeColors).map(type => (
                        <option value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <div className="pokemon-container">
                {selectedPokemon.filter(individual => individual.name.startsWith(searchQuery)).map((individual, index) => (
                    <div className="pokemon" key={individual.name} onClick={() => navigate("/pokemon/" + index)}>
                        <h3>{individual.name}</h3>
                        <img className="sprite" src={individual.sprite ?? "https://placehold.co/128x128"} />
                        <div className="types">
                            {individual.types.map((type: string) => (
                                <div style={
                                    {
                                        backgroundColor: typeColors[type] ?? "white",
                                        paddingInline: "1rem",
                                        width: "5rem",
                                        textAlign: "center",
                                        color: "white",
                                        fontWeight: "bold",
                                        margin: "0.25rem",
                                        borderColor: "white",
                                        borderWidth: "1px",
                                        borderRadius: "12px"
                                    }
                                }>
                                    {type}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}