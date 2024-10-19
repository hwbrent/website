import ApplicationMenu from './ApplicationMenu';
import NotificationCentre from './NotificationCentre';

export default function MenuBar() {
    return (
        <div className="menu-bar">
            <ApplicationMenu />
            <NotificationCentre />
        </div>
    );
};
