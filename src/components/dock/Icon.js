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
 * @param {string} iconName - The name of the icon, e.g. 'Launchpad'
 */
function showTooltip(iconName) {
    if (!tooltip) {
        initTooltip();
    }

    // Put the icon's name inside the <p>
    const p = tooltip.firstElementChild;
    p.textContent = iconName;

    // Make the tooltip visible (this is the default 'display' value if you never set it)
    tooltip.style.display = '';
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

    const show = () => showTooltip(name);
    const hide = () => hideTooltip(name);

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
