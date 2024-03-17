import typeColorsRaw from "../assets/type-colors.json"
import { Pokemon } from "../types/Pokemon";
import { PokemonTypeColors } from "../types/PokemonTypeColors";

const typeColors: PokemonTypeColors = typeColorsRaw as PokemonTypeColors;

export default function PokemonInfo({profile}: {profile: Pokemon}) {
    return (
        <div className="pokemon-detail-columns">
                <div>
                    <h2>Front Sprite</h2>
                    <div className="sprite-container">
                        <img src={profile.sprite} />
                    </div>
                </div>

                <div>
                    <h2>Types</h2>
                    <div className="types">
                        {profile.types.map((type: string) => (
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
                    <div><strong>Number</strong>: {profile.id}</div>
                </div>
            </div>
    )
}