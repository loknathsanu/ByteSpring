import "../styles/globals.css";
import { Rethink_Sans } from "next/font/google";

const RethinkSans = Rethink_Sans({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={RethinkSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
