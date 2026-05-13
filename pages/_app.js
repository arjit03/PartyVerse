import "@/styles/globals.css";
import "../public/assets/css/vendors.css";
import "../public/assets/css/main.css";
import Preloader from "../components/Preloader";
import BackButtonFix from "../components/BackButtonFix";
// import "../styles/search.css";


export default function App({ Component, pageProps }) {
  return <>
    <Preloader />
    <BackButtonFix />
    <Component {...pageProps} />
  </>
}
