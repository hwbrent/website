// the various menu items that you see when VSCode is open
const menuNames = [
    'Code',
    'File',
    'Edit',
    'Selection',
    'View',
    'Go',
    'Run',
    'Terminal',
    'Window',
    'Help',
];

// whether or not we should be highlighting the menus when the mouse is over them
let highlightMode = false;

const onClick = () => {
    // toggle the highlight mode on/off
    highlightMode = !highlightMode
};

const onMouseEvent = (event) => {
    // if we're not in the highlight mode, don't do anything
    if (!highlightMode) {
        return;
    }

    const { target } = event;

    // if it's mouseenter,    add the class.
    // if it's mouseleave, remove the class
    const action = event.type === 'mouseenter'
        ? 'add'
        : 'remove';

    target.classList[action]('highlighted');
};

/**
 * @summary Represents a single menu item in the App Menus section of the menu bar.
 * @param  {...any} props - the first is the text to be shown in the menu, and the second
 *                          is the index of the menu in the overall App Menus list
 * @returns {React.JSX}
 */
function Menu(...props) {
    const [ name, index ] = props;

    // basically we want to have three evenly-spaced gaps either side of the menu's
    // text to make it easier to highlight. the way that the menus highlight in macos
    // is weird. it's not like the highlight colour extends to halfway between the
    // text of two menus - the highlighted menu's highlight colour will extend past
    // that point. this is the best way i could think to achieve this effect.
    // basically it's just a case of highlighting the actual menu, then highlighting
    // the two gaps either side of the menu itself
    const gap = <div className="gap" />;
    const gaps = <>{gap}{gap}{gap}</>; // three individual gaps together

    const menu = (
        <div
            className="menu"
            onMouseEnter={onMouseEvent}
            onMouseLeave={onMouseEvent}
            onClick={onClick}
        >
            {name}
        </div>
    );

    return (
        <>
            { index === 0 ? gaps : null }
            {menu}
            {gaps}
        </>
    );
}

/**
 * @summary The left side of the menu bar, with the buttons like 'File', 'Edit', etc.
 * @description In macOS it's specific to the active application. It includes various
 * menus, which change based on the currently active app.
 * @returns {React.JSX}
 */
export default function AppMenus() {
    const menus = menuNames.map(Menu);
    return (
        <div className="app-menus">
            {menus}
        </div>
    );
}
