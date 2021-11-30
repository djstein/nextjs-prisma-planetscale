import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html>
      <body className="bg-white dark:bg-black">
        <Component {...pageProps} />
      </body>
    </html>
  );
}

export default MyApp;
