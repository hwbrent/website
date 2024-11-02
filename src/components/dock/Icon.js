import Image from 'next/image';

// Trial and error. Seems about right. Idk
const SIZE = 52;

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

    // add a text element within it
    const p = document.createElement('p');
    tooltip.appendChild(p);
}

/**
 * @summary Shows the tooltip above the icon
 * @description Puts the tooltip above the icon with the centres lined up
 * @param {MouseEvent} event - The 'mouseenter' event
 * @param {string} iconName - The name of the icon, e.g. 'Launchpad'
 */
function showTooltip(event, iconName) {
    if (!tooltip) {
        initTooltip();
    }

    // Put the icon's name inside the <p>
    const p = tooltip.firstElementChild;
    p.textContent = iconName;

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
function hideTooltip() {
    // Make the div invisible
    tooltip.style.display = 'none';
}

/**
 * @summary An icon in the macOS dock
 * @param {object} png - an object containing data relating to this icon and its image
 * @param {number} key - the index of this icon in the overall ICONS array
 * @returns {React.JSX}
 */
export default function Icon(png, key) {
    // e.g. '/website/_next/static/media/Downloads.55f91097.png'
    const { src } = png;

    // Get the name of the file from the src
    const name = src.split('/').pop().split('.')[0];

    const show = (event) => showTooltip(event, name);
    const hide = (event) => hideTooltip(event, name);

    return (
        <div
            className    = 'icon'
            key          = {key}
            onMouseEnter = {show}
            onMouseLeave = {hide}
        >
            <Image
                src    = {src}
                width  = {SIZE}
                height = {SIZE}
                alt    = {name}
            />
        </div>
    );
}
