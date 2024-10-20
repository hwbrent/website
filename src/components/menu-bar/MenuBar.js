import AppleMenu from './AppleMenu';
import AppMenus from './AppMenus';
import NotificationCentre from './NotificationCentre';

export default function MenuBar() {
    return (
        <div className="menu-bar">
            <AppleMenu />
            <AppMenus />
            <NotificationCentre />
        </div>
    );
};
