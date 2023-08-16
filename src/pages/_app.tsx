import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/custom.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';
import Head from '@/components/Head'
import { seoConfig } from 'next-seo.config';
import WindowResizeHandler from '@/handlers/WindowResizeHandler';
import store from '@/store/store';
import GoTop from '@/components/Common/GoTop';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <DefaultSeo {...seoConfig} />
      <WindowResizeHandler />
      <Head />
      <div className="max-w-screen overflow-hidden">
        <Component {...pageProps} />
        <GoTop />
      </div>
    </Provider>
  )
}
