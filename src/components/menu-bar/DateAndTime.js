import { useState } from "react";

/**
 * @summary Gets a new `Date` object
 * @returns {Date}
 */
const getDate = () => new Date();

/**
 * @summary Represents the widget on the far right of the menu bar which shows the
 * date and time.
 * @description An example is "Sat 19 Oct 21:18"
 * @returns {React.JSX.Element}
 */
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
