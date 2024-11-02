import Image from 'next/image';

import DownloadsPNG from 'public/dock-icons/Downloads.png';
import FinderPNG from 'public/dock-icons/Finder.png';
import LaunchpadPNG from 'public/dock-icons/Launchpad.png';

const ICONS = [
    FinderPNG,
    LaunchpadPNG,
    DownloadsPNG
];

const getIcons = () => ICONS.map((icon, key) => (
    <Image
        src={icon.src}
        width={16}
        height={16}
        alt={''}
        key={key}
    />
));

export default function Dock() {
    return (
        <div className="dock">
            {getIcons()}
        </div>
    );
}
