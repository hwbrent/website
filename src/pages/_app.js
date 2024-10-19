import MenuBar from '../components/menu-bar/MenuBar';
import '../styles/globals.css';

const rootId = 'root';

export default function MyApp({ Component, pageProps }) {
    return (
        <div id={rootId}>
            <MenuBar/>

            <Component {...pageProps} />
        </div>
    )
}
