import React from "react";

const CharCard = props => {
    console.log(props.button);
    return (
        <div>
            <h1>{props.button.name}</h1>
            <p>{props.button.height}</p>
            <p>{props.button.mass}</p>
            <p>{props.button.hair_color}</p>
        </div>
    );
}

export default CharCard;