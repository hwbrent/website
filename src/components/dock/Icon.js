import Image from 'next/image';

import { showTooltip, hideTooltip } from './Tooltip';

// Trial and error. Seems about right. Idk
const SIZE = 52;

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
