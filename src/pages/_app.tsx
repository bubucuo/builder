import "src/styles/globals.css";
import "src/styles/animation.css";
import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
