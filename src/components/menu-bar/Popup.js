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

export function placePopup() {}

export function populatePopup() {}
