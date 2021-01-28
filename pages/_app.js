import "../styles/globals.css";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} appProps="hellow form Appjs" />;
}

export default MyApp;
