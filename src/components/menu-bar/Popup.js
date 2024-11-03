import config from '@/components/configs/popup';

/**
 * @summary The little window that appears under a menu when it's highlighted
 * @type {HTMLDivElement}
 */
let popup;

/**
 * @summary Creates the popup element
 */
export function initPopup() {
    popup = document.createElement('div');

    // add it to the DOM
    const root = document.getElementById('root');
    root.appendChild(popup);

    // Add a class to allow styling
    popup.classList.add('popup');

    // hide it by default
    hidePopup();
}

/**
 * @summary Shows the popup under the given menu
 */
export function showPopup() {
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
export function placePopup(menu) {
    // get the furthest-left highlighted gap next to 'menu'
    const gap = menu.previousElementSibling.previousElementSibling;

    // this is the x coordinate of the left side of the gap. we'll use this for
    // the popup too
    const popupLeft = gap.getBoundingClientRect().left;

    // the top of the popup must line up with the bottom of the menu bar. so let's use
    // that value
    const bar = menu.parentElement.parentElement;
    const popupTop = bar.getBoundingClientRect().bottom;

    console.log(gap, popupLeft, popupTop);

    // place the popup
    popup.style.left = `${popupLeft}px`;
    popup.style.top = `${popupTop}px`;
}

/**
 * @summary Adds contents to the popup
 * @description Adds any of the given contents to `<div>`s inside the popup, with
 * separators (`<hr>`s) where specified
 * @param {string} application - the current application open. "Finder" by default
 * @param {string} menuName - the name of the menu; this lets us know what the contents
 * should be
 */
export function populatePopup(application, menuName) {
    // first, empty the popup of any prior contents
    while (popup.firstChild) {
        popup.removeChild(popup.firstChild);
    }

    // get the popup contents from the config JSON file
    const configEntry = config[application][menuName];

    if (configEntry.length === 0) {
        return;
    }

    // 'configEntry' is an array of objects. each object is a "row" in the popup
    for (const row of configEntry) {
        const { contents, disabled, separator } = row;

        if (separator) {
            const hr = document.createElement('hr');
            popup.appendChild(hr);
            continue;
        }

        // wrapper for the label and icons
        const wrapperEl = document.createElement('div');
        popup.appendChild(wrapperEl);

        // the text on the left of the row
        // e.g. 'Hide Visual Studio Code'
        const labelEl = document.createElement('div');
        wrapperEl.appendChild(labelEl);

        // the symbols on the right of the row
        // e.g. '⌘H'
        const symbolsEl = document.createElement('div');
        wrapperEl.appendChild(symbolsEl);

        // add the text contents from the config to the elements
        const [labelText, symbolsText] = contents;
        labelEl.textContent = labelText;
        symbolsEl.textContent = symbolsText;

        wrapperEl.dataset.disabled = disabled;
    }
}
