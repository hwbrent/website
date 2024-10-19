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

const getMenu = (name, key) => (
    <>
        <div key={`${key} sep`}></div>
        <div key={key}>
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
        <div className="application-menu">
            {getMenus()}
        </div>
    );
}
