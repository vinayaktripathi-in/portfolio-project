// pages/_app.js
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
