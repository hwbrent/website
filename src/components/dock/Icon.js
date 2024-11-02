import Image from 'next/image';

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
            width  = {16}
            height = {16}
            alt    = {''}
            key    = {key}
        />
    );
}
