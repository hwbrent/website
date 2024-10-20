import MenuBar from '../components/menu-bar/MenuBar';
import Dock from '../components/dock/Dock';
import '../styles/globals.scss';

const rootId = 'root';

export default function MyApp({ Component, pageProps }) {
    return (
        <div id={rootId}>
            <MenuBar/>

            <Component {...pageProps} />

            <Dock />
        </div>
    )
}
