import React from "react";


export const PlayerCard = props => {
console.log(props)
    return(
        <div>
            <div className="card-wrapper">
            <h1 className="card-name">{props.player.name}</h1>
            <h2 className="card-team">Country: {props.player.country}</h2>
            <h4 className="card-rank">Searches: {props.player.searches}</h4>
 </div>
        </div>
    )
}

export default PlayerCard;