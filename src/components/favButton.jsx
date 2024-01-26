import React from "react";
import { useState } from "react";

const FavButton = () => {
    const [bool, setBoolean] = useState(false);

    const changeFav = () => {
        setBoolean(!bool)
    }

    return (
        <div>
            <button role='button' id='favButton' onClick={changeFav}>{!bool && <p>♡</p>}{bool && <p>❤️</p>}</button>
        </div>
    )
};

export default FavButton;

// As a user, I want to press a button to mark a gig as a favourite
// 

// const favButton = new FavButton()
// console.log(favButton.useState)
