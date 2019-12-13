import React from "react";

const CharCard = props => {
    
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.height}</p>
            <p>{props.mass}</p>
            <p>{props.hair_color}</p>
        </div>
    );
}

export default CharCard;