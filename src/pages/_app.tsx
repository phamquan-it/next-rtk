import "@/styles/globals.css";
import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import {useRouter} from 'next/router';
import {NextIntlClientProvider} from 'next-intl';
import theme from '../theme/themeConfig';
import { Provider } from "react-redux";
import { store } from "@/libs/redux/store/store";
import AppLayout from "@/components/app/Layout";
import { Inter } from "next/font/google";
type PageProps = {
  messages: IntlMessages;
  now: number;
};

type Props = Omit<AppProps<PageProps>, 'pageProps'> & {
  pageProps: PageProps;
};
const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const Layout = AppLayout;
  return (  
    <div className={inter.className}>
      <NextIntlClientProvider
      // To achieve consistent date, time and number formatting
      // across the app, you can define a set of global formats.
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }
        }
      }}
      locale={router.locale}
      // Messages can be received from individual pages or configured
      // globally in this module (`App.getInitialProps`). Note that in
      // the latter case the messages are available as a top-level prop
      // and not nested within `pageProps`.
      messages={pageProps.messages}
      // Providing an explicit value for `now` ensures consistent formatting of
      // relative values regardless of the server or client environment.
      now={new Date(pageProps.now)}
      // Also an explicit time zone is helpful to ensure dates render the
      // same way on the client as on the server, which might be located
      // in a different time zone.
      timeZone="Europe/Vienna"
    >
      <Layout>
        <Provider store={store}>
          <ConfigProvider theme={theme}>
            <Component {...pageProps} />
          </ConfigProvider>
        </Provider>
      </Layout>
    </NextIntlClientProvider>
      
    </div>
  )
};

export default App;
