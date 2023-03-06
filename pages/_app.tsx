// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </MantineProvider>
  );
}
