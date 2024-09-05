import React from "react";

const Pokeinfo = ({ data }) => {

    return (
        <>
        {
            (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="abilities">
                        {
                            data.abilities.map((poke, index) => {
                                return (
                                    // Added a key prop here
                                    <div className="group" key={index}>
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map((poke, index) => {
                                return (
                                    // Added a key prop here
                                    <div key={index}>
                                        <h3>{poke.stat.name}: {poke.base_stat}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            )
        }
        </>
    )
}

export default Pokeinfo;
