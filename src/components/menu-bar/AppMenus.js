const exampleMenus = {
    'Finder': [
        'Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'
    ],
    'VSCode': [
        'Code', 'File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Window', 'Help'
    ]
};

// whether or not we should be highlighting the menus when the mouse is over them
let highlightMode = false;

const onClick = () => {
    // toggle the highlight mode on/off
    highlightMode = !highlightMode

    // if highlight mode was just turned off, don't do anything
    if (!highlightMode) {
        return;
    }

    const callback = (event) => {
        // stop 'onClick' getting called again if we click again on a menu
        event.stopPropagation();

        highlightMode = false;

        // had to add in Array.From because there was some weird behaviour without it.
        // basically there are always five elements to un-highlight, but only three
        // were being dealt with properly. i guess it's because 'highlighted' is a live
        // list of nodes, so when you remove the class from the first element, the list
        // length decreases by one, and then we move onto the next element, effectively
        // skipping the element which was second in the original list of five and
        // moving onto the third
        const highlighted = Array.from(document.getElementsByClassName('highlighted'));
        for (const element of highlighted) {
            element.classList.remove('highlighted');
        }
    };
    const addListener = () => document.body.addEventListener('click', callback, { capture: true, once: true });
    setTimeout(addListener);
};

const onMouseEvent = (event) => {
    // if we're not in the highlight mode, don't do anything
    if (!highlightMode) {
        return;
    }

    // get the clicked menu and the two gaps either side of it
    const { target } = event;
    const prev1 = target.previousElementSibling;
    const prev2 = prev1.previousElementSibling; // furthest left gap
    const next1 = target.nextElementSibling;
    const next2 = next1.nextElementSibling; // furthest right gap

    // if it's mouseenter,    add the class.
    // if it's mouseleave, remove the class
    const methodName = event.type === 'mouseenter'
        ? 'add'
        : 'remove';

    // helper to call either classList.add or classList.remove
    const action = (el, otherClass = null) => {
        const classes = el.classList;
        const method = classes[methodName].bind(classes)
        method('highlighted')

        if (otherClass) {
            method(otherClass);
        }
    };

    action(prev2, 'left'); // furthest left
    action(prev1);
    action(target);
    action(next1);
    action(next2, 'right'); // furthest right
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

    // if it's the second menu (i.e. the first with text), make the text bold
    let className = "menu";
    if (index === 0) {
        className += ' bold'
    }

    const menu = (
        <div
            className={className}
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

// show the finder menus by default
const menus = exampleMenus['Finder'];
const renderMenus = () => menus.map(Menu);

/**
 * @summary The left side of the menu bar, with the buttons like 'File', 'Edit', etc.
 * @description In macOS it's specific to the active application. It includes various
 * menus, which change based on the currently active app.
 * @returns {React.JSX}
 */
export default function AppMenus() {
    return (
        <div className="app-menus">
            {renderMenus()}
        </div>
    );
}
