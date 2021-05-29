import 'bootstrap/dist/css/bootstrap.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import buildClient from '../api/build-client';
import { CurrentUser } from '../interfaces';
import Header from '../components/header';
import { AppContextType } from 'next/dist/next-server/lib/utils';

const AppComponent = ({
  Component,
  pageProps,
  currentUser,
}: AppProps & CurrentUser) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
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
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      // @ts-ignore
      client,
      data.currentUser
    );
  }

  return { pageProps, ...data };
};

export default AppComponent;
