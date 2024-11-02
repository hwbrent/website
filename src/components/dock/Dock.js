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
