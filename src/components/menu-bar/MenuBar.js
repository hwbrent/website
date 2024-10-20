import Image from 'next/image';
import AppMenus from './AppMenus';
import NotificationCentre from './NotificationCentre';

import appleLogoDark from 'public/apple-logo-dark.svg';

const AppleLogo = () => {
    return <Image
        src={appleLogoDark.src}
        alt="Apple Logo"
        width='24'
        height='24'
    />;
};

export default function MenuBar() {
    return (
        <div className="menu-bar">
            <AppleLogo />
            <AppMenus />
            <NotificationCentre />
        </div>
    );
};
