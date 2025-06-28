import "../styles/index.scss";
import '../styles/Certificate.css';
import '../styles/HeaderTwo.css';


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
