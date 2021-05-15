import 'bootstrap/dist/css/bootstrap.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import buildClient from '../api/build-client';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { CurrentUser } from '../interfaces';
import Header from '../components/header';

const AppComponent = ({
  Component,
  pageProps,
  currentUser,
}: AppProps & CurrentUser) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext: AppContextType) => {
  const client = buildClient(appContext.ctx);
  const { data }: { data: CurrentUser } = await client.get(
    '/api/users/currentuser'
  );

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return { pageProps, ...data };
};

export default AppComponent;
