import type { AppProps } from 'next/app';
import Layout from '@/components/layout/layout';
import '@/styles/globals.css';

// Font Awesome settings
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
