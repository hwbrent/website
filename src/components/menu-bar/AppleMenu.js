import { useState } from 'react';
import { onMount } from '@/utils/utils';

import Image from 'next/image';

import appleLogoDark from 'public/apple-logo-dark.svg';

const { src, height, width } = appleLogoDark;
const defaultProps = { src, height, width, alt: "Apple Logo", className: 'apple-menu' };

// weirdly, calling parseFloat on a string like '16px' is able to get the numeric
// value fine.
// see:
// https://stackoverflow.com/questions/3024084/jquery-javascript-how-do-i-convert-a-pixel-value-20px-to-a-number-value-2
const fromPx = parseFloat;

/**
 * @summary Calculates the correct height and width for {@link Image} such that
 *          it is the same size as the menu bar text
 * @returns {object} the adjusted props for {@link Image}
 */
function scaleDims() {
    // the raw value is a string with 'px' in it, so we need to convert that
    const textSize = fromPx(global.getComputedStyle(document.body).fontSize);

    // which dimension is bigger vs smaller between height and width
    const bigger =  height > width ? 'height' : 'width';
    const smaller = height > width ? 'width'  : 'height';

    const props = { ...defaultProps };

    // get amount by which to scale the smaller dimension down by
    const factor = props[bigger] / textSize;

    // adjust the dimensions
    props[bigger]  /= factor; // should now be equal to the text size
    props[smaller] /= factor; // will now be less than or equal to the text size

    return props;
};

/**
 * @summary The little Apple logo on the far left of the menu bar
 * @description Name comes from here:
 *              https://support.apple.com/en-gb/guide/mac-help/mchlp1446/mac
 * @returns {React.JSX}
 */
export default function AppleMenu() {
    const [ props, setProps ] = useState(defaultProps);

    // scale the image down
    const scale = () => setProps(scaleDims());
    onMount(scale);

    return <Image {...props} />;
};
