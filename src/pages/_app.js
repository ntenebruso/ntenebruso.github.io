import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
