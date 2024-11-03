/**
 * @summary The little window that appears under a menu when it's highlighted
 * @type {HTMLDivElement}
 */
let popup;

/**
 * @summary Creates the popup element
 */
function initPopup() {
    popup = document.createElement('div');

    // add it to the DOM
    const root = document.getElementById('root');
    root.appendChild(popup);

    // Add a class to allow styling
    popup.classList.add('popup');
}

/**
 * @summary Shows the popup under the given menu
 */
export function showPopup() {
    if (!popup) {
        initPopup();
    }

    popup.style.display = '';
}

/**
 * @summary Hides the popup
 */
export function hidePopup() {
    popup.style.display = 'none';
}

/**
 * @summary Positions the popup relative to the given menu
 * @description The majority of the time, in macOS, the left hand edge of the popup
 * is level with the furthest-left gap which is highlighted. That's what this function
 * achieves
 * @param {HTMLDivElement} menu - the menu that the popup should be placed relative to
 */
export function placePopup(menu) {}

/**
 * @summary Adds contents to the popup
 * @description Adds any of the given contents to `<div>`s inside the popup, with
 * separators (`<hr>`s) where specified
 * @param {string} name - the name of the menu; this lets us know what the contents
 * should be
 */
export function populatePopup() {}
