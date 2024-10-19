import ApplicationMenu from './ApplicationMenu';
import DateAndTime from './DateAndTime';

export default function MenuBar() {
    return (
        <div className="menu-bar">
            <ApplicationMenu />
            <DateAndTime />
        </div>
    );
};
