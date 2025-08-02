import "../styles/index.scss";
import '../styles/Certificate.css';
import '../styles/HeaderTwo.css';
import '../styles/productDetail.css';
import '../styles/About.css'
import '../styles/Mission.css'


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
