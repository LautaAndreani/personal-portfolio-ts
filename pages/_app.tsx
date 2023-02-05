import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import "@fontsource/inter"
import "@fontsource/inter/500.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lautaro Andreani</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
