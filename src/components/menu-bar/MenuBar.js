import AppMenus from './AppMenus';
import NotificationCentre from './NotificationCentre';

export default function MenuBar() {
    return (
        <div className="menu-bar">
            <AppMenus />
            <NotificationCentre />
        </div>
    );
};
