import '../styles/globals.css';

const rootId = 'root';

export default function MyApp({ Component, pageProps }) {
    return (
        <div id={rootId}>
            <Component {...pageProps} />
        </div>
    )
}
