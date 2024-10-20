import { useState } from 'react';
import Image from 'next/image';

import appleLogoDark from 'public/apple-logo-dark.svg';

const { src, height, width } = appleLogoDark;
const defaultProps = { src, height, width, alt: "Apple Logo" };

const fromPx = (value) => parseFloat(value);
const toPx = (value) => `${value}px`;

/**
 * @summary The little Apple logo on the far left of the menu bar
 * @description Name comes from here:
 *              https://support.apple.com/en-gb/guide/mac-help/mchlp1446/mac
 * @returns {React.JSX}
 */
export default function AppleMenu() {
    const [ props, setProps ] = useState(defaultProps);
    return <Image {...props} />;
};
