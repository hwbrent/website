/**
 * @summary The tooltip thing that appears when you hover over an {@link Icon}
 * @type {HTMLDivElement}
 */
let tooltip;

/**
 * @summary Creates the tooltip element
 */
function initTooltip() {
    tooltip = document.createElement('div');

    // add it to the DOM
    const root = document.getElementById('root');
    root.appendChild(tooltip);

    // Add a class to allow styling
    tooltip.classList.add('tooltip');
}

/**
 * @summary Shows the tooltip above the icon
 * @description Puts the tooltip above the icon with the centres lined up
 * @param {MouseEvent} event - The 'mouseenter' event
 * @param {string} iconName - The name of the icon, e.g. 'Launchpad'
 */
export function showTooltip(event, iconName) {
    if (!tooltip) {
        initTooltip();
    }

    // Put the icon's name inside the tooltip
    tooltip.textContent = iconName;

    // Make the tooltip visible (this is the default 'display' value if you never set it)
    tooltip.style.display = '';

    //////////////////////////////////////////////
    /// Place the tooltip above the given icon ///
    //////////////////////////////////////////////
    // Basically, we get the position of the top edge of the icon. From that we get
    // the bottom edge of the tooltip. Then we calculate the top left of the tooltip
    // based off the widths and heights and stuff

    const icon = event.currentTarget;
    const iconRect = icon.getBoundingClientRect();

    // Calculate the centre point of the top edge of the icon
    const iconTopCentreX = iconRect.left + (iconRect.width / 2);
    const iconTopCentreY = iconRect.top;

    const distance = 20; // pixels - gap between icon and tooltip

    // The centre point of the bottom edge of the tooltip
    const tooltipBottomCentreY = iconTopCentreY - distance;

    // Figure out the coordinates of the top left corner of the tooltip
    const tooltipRect = tooltip.getBoundingClientRect();
    const tooltipTopLeftY = tooltipBottomCentreY - tooltipRect.height;
    const tooltipTopLeftX = iconTopCentreX - (tooltipRect.width / 2);

    // Set the x and y coordinate values
    tooltip.style.left = `${tooltipTopLeftX}px`;
    tooltip.style.top = `${tooltipTopLeftY}px`;
}

/**
 * @summary Hides the tooltip
 */
export function hideTooltip() {
    // Make the div invisible
    tooltip.style.display = 'none';
}
