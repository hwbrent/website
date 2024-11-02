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
 */
function showTooltip() {
    if (!tooltip) {
        initTooltip();
    }
}

/**
 * @summary Hides the tooltip
 */
function hideTooltip() {}

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

    return (
        <div
            className    = 'icon'
            key          = {key}
            onMouseEnter = {showTooltip}
            onMouseLeave = {hideTooltip}
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
