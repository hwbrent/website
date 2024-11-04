// Source: https://macosicons.com/#/
// Most of them came in as .icns files, which apparently are native to MacOS and not
// able to be (easily) loaded. So I converted them to .png format
import AppStorePNG  from 'public/dock-icons/App Store.png';
import CalendarPNG  from 'public/dock-icons/Calendar.png';
import ContactsPNG  from 'public/dock-icons/Contacts.png';
import DownloadsPNG from 'public/dock-icons/Downloads.png';
import FaceTimePNG  from 'public/dock-icons/FaceTime.png';
import FinderPNG    from 'public/dock-icons/Finder.png';
import FreeformPNG  from 'public/dock-icons/Freeform.png';
import KeynotePNG   from 'public/dock-icons/Keynote.png';
import LaunchpadPNG from 'public/dock-icons/Launchpad.png';
import MailPNG      from 'public/dock-icons/Mail.png';
import MapsPNG      from 'public/dock-icons/Maps.png';
import MessagesPNG  from 'public/dock-icons/Messages.png';
import MusicPNG     from 'public/dock-icons/Music.png';
import NewsPNG      from 'public/dock-icons/News.png';
import NotesPNG     from 'public/dock-icons/Notes.png';
import NumbersPNG   from 'public/dock-icons/Numbers.png';
import PagesPNG     from 'public/dock-icons/Pages.png';
import PhotosPNG    from 'public/dock-icons/Photos.png';
import RemindersPNG from 'public/dock-icons/Reminders.png';
import SafariPNG    from 'public/dock-icons/Safari.png';
import SettingsPNG  from 'public/dock-icons/Settings.png';
import TrashPNG     from 'public/dock-icons/Trash.png';
import TVPNG        from 'public/dock-icons/TV.png';

import Icon from './Icon';

// the order here is as seen here:
// https://help.apple.com/assets/65E218FE85FC4D5CE50E7794/65E2190393CE9DC994014CA3/en_GB/59f8a934c24d3ddbc7bcbce7764def94.png
const ICONS = [
    FinderPNG,
    LaunchpadPNG,
    SafariPNG,
    MessagesPNG,
    MailPNG,
    MapsPNG,
    PhotosPNG,
    FaceTimePNG,
    CalendarPNG,
    ContactsPNG,
    RemindersPNG,
    NotesPNG,
    FreeformPNG,
    TVPNG,
    MusicPNG,
    NewsPNG,
    KeynotePNG,
    NumbersPNG,
    PagesPNG,
    AppStorePNG,
    SettingsPNG,
    DownloadsPNG,
    TrashPNG
];

const getIcons = () => ICONS.map(Icon);

export default function Dock() {
    return (
        <div className='dock-wrapper'>
            <div className="dock">
                {getIcons()}
            </div>
        </div>
    );
}
