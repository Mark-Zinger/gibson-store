
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion'

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'style/global';
import theme from 'style/theme';




function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://gibson-store.vercel.app${router.route}`
  
  
  return (
    <>
      <DefaultSeo
        titleTemplate="Gibson - %s"
        defaultTitle="Gibson Store"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url,
          description: 'Gibson Store - The Rock Music Legend',
          site_name: 'Gibson Store',
          images: [],
        }}
        canonical={url}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} canonical={url} key={url} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp
