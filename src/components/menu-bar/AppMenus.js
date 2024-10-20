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

const getMenu = (name, key) => (
    <>
        <div key={`${key} sep`}></div>
        <div
            key={key}
            onClick={onClick}
            onMouseEnter={onMouseEvent}
            onMouseLeave={onMouseEvent}
        >
            {name}
        </div>
    </>
);
const getMenus = () => menuNames.map(getMenu);

/**
 * @summary The left side of the menu bar, with the buttons like 'File', 'Edit', etc.
 * @description In macOS it's specific to the active application. It includes various
 * menus, which change based on the currently active app.
 * @returns {React.JSX}
 */
export default function AppMenus() {
    return (
        <div className="app-menus">
            {getMenus()}
        </div>
    );
}
