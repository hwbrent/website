import { useState } from "react";

export default function DateAndTime() {

    const [ date, setDate ] = useState(new Date());

    console.log(date);

    return (
        <div className="date-and-time"></div>
    );
};
