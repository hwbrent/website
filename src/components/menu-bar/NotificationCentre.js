import { useState, useEffect } from "react";

/**
 * @returns {string} The language configured in the browser settings.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language}
 * @example
 * console.log(getLocale()); // "en-US"
 */
const getLocale = () => global?.navigator?.language || 'en-US';

// these three things are related to formatting a date to appear like in macOS
const dateFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
const getDateFormatter = () => new Intl.DateTimeFormat(getLocale(), dateFormatOptions);
const formatDate = (date) => getDateFormatter().format(date);

// these three things are related to formatting time to appear like in macOS
const timeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23' // specifies 24-hour format, i.e 22:00 rather than 10:00PM
};
const getTimeFormatter = () => new Intl.DateTimeFormat(getLocale(), timeFormatOptions);
const formatTime = (date) => getTimeFormatter().format(date);

/**
 * @returns {string} The current date/time, formatted as in macOS
 * @example
 * const dateTime = getDateTimeString();
 * console.log(dateTime); // 'Sat 19 Oct 21:39'
 */
const getDateTimeString = () => {
    // get the current date
    const now = new Date();

    // get and format the date like in macOS
    const date =
        formatDate(now) // e.g. 'Sat, 19 Oct'
        .replace(',', ''); // e.g. 'Sat 19 Oct'

    // get and format the time like in macOS
    const time = formatTime(now); // e.g. '21:39'

    const string = date + ' ' + time; // e.g. 'Sat 19 Oct 21:39'
    return string;
};

/**
 * @summary Updates the shown date/time every second
 * @param {function} setDateTime - the React useState setter function for the
 *                                 date/time string
 * @returns {void}
 */
const updateEverySecond = (setDateTime) => {
    // run this stuff after the component is mounted in the page
    const callback = () => {
        // pass the formatted string to setDateTime
        const updateDateTimeString = () => setDateTime(getDateTimeString());

        // update straight away so that we don't have a situation where the widget
        // is empty for the first second that the page is loaded
        updateDateTimeString();

        // call 'updateDateTimeString' every second
        const second = 1000;
        const id = setInterval(updateDateTimeString, second);

        // Cleanup function - clear interval when component unmounts
        const cleanup = () => clearInterval(id)
        return cleanup;
    };

    return useEffect(callback, []);
};

/**
 * @summary Represents the widget on the far right of the menu bar which shows the
 * date and time.
 * @description An example is "Sat 19 Oct 21:18"
 * @returns {React.JSX.Element}
 */
export default function NotificationCentre() {
    // the string that will be shown to the user in the widget
    const [ dateTime, setDateTime ] = useState('');

    updateEverySecond(setDateTime);

    return (
        <div className="date-and-time">
            {dateTime}
        </div>
    );
};
