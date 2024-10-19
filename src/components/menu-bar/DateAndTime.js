import { useState, useEffect } from "react";

/**
 * @returns {string} The language configured in the browser settings.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language}
 * @example
 * console.log(getLocale()); // "en-US"
 */
const getLocale = () => window?.navigator?.language || 'en-US';

const dateFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
const getDateFormatter = () => new Intl.DateTimeFormat(getLocale(), dateFormatOptions);
const formatDate = (date) => getDateFormatter().format(date);

const timeFormatOptions = { hour: '2-digit', minute: '2-digit' };
const getTimeFormatter = () => new Intl.DateTimeFormat(getLocale(), timeFormatOptions);
const formatTime = (date) => getTimeFormatter().format(date);

const getDateTimeString = (setter) => {
    // get the current date
    const now = new Date();

    // get and format the date like in macOS
    const date = formatDate(now); // e.g. 'Sat 19 Oct'
    
    // get and format the time like in macOS
    const time = formatTime(now); // e.g. '21:39'

    const string = date + ' ' + time; // e.g. 'Sat 19 Oct 21:39'
    return string;
};

/**
 * @summary Represents the widget on the far right of the menu bar which shows the
 * date and time.
 * @description An example is "Sat 19 Oct 21:18"
 * @returns {React.JSX.Element}
 */
export default function DateAndTime() {

    const initialDateTime = getDateTimeString();
    const [ dateTime, setDateTime ] = useState(initialDateTime);

    // update the shown date/time every second
    const updateDateTime = () => setDateTime(getDateTimeString());
    setInterval(updateDateTime, 1000);

    return (
        <div className="date-and-time">
            {dateTime}
        </div>
    );
};
