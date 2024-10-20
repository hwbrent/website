import { useEffect } from "react";

/**
 * @summary Custom hook to call a function once when a component first mounts
 * @param {function} callback - the func to be called when the component is mounted
 * @returns {void}
 */
export const useOnMount = (callback) => useEffect(callback, []);
