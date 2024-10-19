// the various menu items that you see when VSCode is open
const menus = [
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

/**
 * @summary The left side of the menu bar, with the buttons like 'File', 'Edit', etc.
 * @description In macOS it's specific to the active application. It includes various
 * menus, which change based on the currently active app.
 * @returns {React.JSX}
 */
export default function AppMenus() {
    return (
        <div className="application-menu"></div>
    );
}
