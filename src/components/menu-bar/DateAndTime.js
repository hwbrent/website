import { useState, useEffect } from "react";

/**
 * @summary Gets a new `Date` object
 * @returns {Date}
 */
const getDate = () => new Date();

/**
 * @summary Custom hook to execute `callback` whenever the time changes
 * @param {Function} callback - a function to be called when the date or time changes
 * @param {Date} dateObj - the value to be monitored
 * @returns {void}
 */
const onDateTimeChange = (callback, dateObj) => useEffect(callback, [dateObj]);

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

    // when the date object updates, update the string representation of it.
    const formatDate = () => {
        console.log('formatDate');
    };
    onDateTimeChange(formatDate, date);

    console.log(date);

    return (
        <div className="date-and-time"></div>
    );
};
