import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <html className="bg-white dark:bg-black">
        <body className="bg-white dark:bg-black">
          <Component {...pageProps} />
        </body>
      </html>
    </ThemeProvider>
  );
}

export default MyApp;
