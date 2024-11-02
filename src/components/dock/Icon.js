import Image from 'next/image';

// Trial and error. Seems about right. Idk
const SIZE = 52;

/**
 * @summary An icon in the macOS dock
 * @param {object} png - an object containing data relating to this icon and its image
 * @param {number} key - the index of this icon in the overall ICONS array
 * @returns {React.JSX}
 */
export default function Icon(png, key) {
    return (
        <Image
            src    = {png.src}
            width  = {SIZE}
            height = {SIZE}
            alt    = {''}
            key    = {key}
        />
    );
}
