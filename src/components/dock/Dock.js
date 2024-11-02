import Image from 'next/image';

const ICONS_BASE_PATH = '../../../public/dock-icons';

const iconNames = [
    'Downloads',
    'Finder',
    'Launchpad'
];

export default function Dock() {
    const icons = iconNames.map((name, key) => {

        // const path = `${ICONS_BASE_PATH}/${name}.icns`;
        // const width = 16;
        // const height = 16;
        // return <Image
        //     src={path}
        //     width={width}
        //     height={height}
        //     alt={name}
        //     key={key}
        // />;

        return <div key={key}>{name}</div>
    });

    return (
        <div className="dock">
            {icons}
        </div>
    );
}
