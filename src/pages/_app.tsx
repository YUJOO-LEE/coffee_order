import Layout from '@/components/common/Layout'
import { globalStyle } from '@/components/styled/globalStyled'
import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Global styles={globalStyle} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
