import { useState } from "react";
import React from "react";

const Die = () => {
    const [die, setDie] = useState(0);
    const handleRoll = () => {
        setDie(Math.floor(Math.random() * 6) + 1);
    };
    return (
        <>
            <button onClick={handleRoll}>Roll the die!</button><br/>
            <p>{die}</p>
        </>
        );
};

export default Die;