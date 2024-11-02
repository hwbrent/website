// Source: https://macosicons.com/#/
// Most of them came in as .icns files, which apparently are native to MacOS and not
// able to be (easily) loaded. So I converted them to .png format
import DownloadsPNG from 'public/dock-icons/Downloads.png';
import FinderPNG    from 'public/dock-icons/Finder.png';
import LaunchpadPNG from 'public/dock-icons/Launchpad.png';

import Icon from './Icon';

const ICONS = [
    FinderPNG,
    LaunchpadPNG,
    DownloadsPNG
];

const getIcons = () => ICONS.map(Icon);

export default function Dock() {
    return (
        <div className="dock">
            {getIcons()}
        </div>
    );
}
