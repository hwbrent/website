import { useEffect } from "react";

/**
 * @summary Custom hook to call a function once when a component first mounts
 * @param {function} callback - the func to be called when the component is mounted
 * @returns {void}
 */
export const useOnMount = (callback) => useEffect(callback, []);

/**
 * @summary Custom hook to do something every second
 * @param {function} setDateTime - the function to be called every second
 * @returns {void}
 */
export const useDoEverySecond = (callback) => useEffect(() => {
    const id = setInterval(callback, 1000);
    return () => clearInterval(id);
}, []);
