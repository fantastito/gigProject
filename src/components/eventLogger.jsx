import React from "react";

const EventLogger = () => {
    const handleEvent = (event) => {
        console.log(event.target.value);
    };

    return (
        <input type="text" onChange={handleEvent} placeholder="Type something..." />
    );
};

export default EventLogger;