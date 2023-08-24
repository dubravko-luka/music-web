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
import Navigation from '@/components/Layout/Navigation';
import RightClick from '@/components/Common/RightClick';
import Play from '@/components/Play';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <DefaultSeo {...seoConfig} />
      <WindowResizeHandler />
      <RightClick>
        <Head />
        <Navigation />
        <div
          className={`max-w-screen m-auto overflow-hidden bg-bg-main p-5 pb-[100px]`}
          style={{ minHeight: `calc(100vh - 56px)` }}
        >
          <Component {...pageProps} />
          <GoTop />
        </div>
        <Play />
      </RightClick>
    </Provider>
  )
}
