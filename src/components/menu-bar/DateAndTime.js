import { useState } from "react";

const getDate = () => new Date();

export default function DateAndTime() {

    const [ date, setDate ] = useState(getDate());

    // update the tracked date/time every second
    const updateDate = () => setDate(getDate());
    setInterval(updateDate, 1000);

    console.log(date);

    return (
        <div className="date-and-time"></div>
    );
};
