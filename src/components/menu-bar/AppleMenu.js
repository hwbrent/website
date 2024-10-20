import { useState } from 'react';
import { onMount } from '@/utils/utils';

import Image from 'next/image';

import appleLogoDark from 'public/apple-logo-dark.svg';

const defaultDims = [ appleLogoDark.width, appleLogoDark.height ];

// weirdly, calling parseFloat on a string like '16px' is able to get the numeric
// value fine.
// see:
// https://stackoverflow.com/questions/3024084/jquery-javascript-how-do-i-convert-a-pixel-value-20px-to-a-number-value-2
const fromPx = parseFloat;

/**
 * @summary Calculates the correct height and width for {@link Image} such that
 *          it is the same size as the menu bar text
 * @returns {Array<number, number>} the adjusted width and height for {@link Image}
 */
function scaleDims() {
    // the default values for the width and height
    const dims = [ ...defaultDims];
    const [ width, height ] = dims;

    // which dimension is bigger vs smaller between height and width
    const bigger =  height > width ? 1 : 0;
    const smaller = height > width ? 0 : 1;

    // get amount by which to scale the smaller dimension down by.
    // the raw font size is a string with 'px' in it, so we need to convert that
    const textSize = fromPx(global.getComputedStyle(document.body).fontSize);
    const factor = dims[bigger] / textSize;

    // adjust the dimensions in-place
    dims[bigger]  /= factor; // should now be equal to the text size
    dims[smaller] /= factor; // will now be less than or equal to the text size

    return dims;
};

/**
 * @summary The little Apple logo on the far left of the menu bar
 * @description Name comes from here:
 *              https://support.apple.com/en-gb/guide/mac-help/mchlp1446/mac
 * @returns {React.JSX}
 */
export default function AppleMenu() {
    const [ dims, setDims ] = useState(defaultDims);
    const [ width, height ] = dims;
    const { src } = appleLogoDark;

    // scale the image down
    const scale = () => setDims(scaleDims());
    onMount(scale);

    return (
        <div className='apple-menu'>
            <Image
                src={src}
                alt='Apple Menu'
                width={width}
                height={height}
            />
        </div>
    );
};
