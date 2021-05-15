import { NextPage } from 'next';
import buildClient from '../api/build-client';

interface LandingPageProps {
  currentUser: string;
}

const LandingPage: NextPage<LandingPageProps> = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  return data;
};

export default LandingPage;
