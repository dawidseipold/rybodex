// Layouts
import { Main as MainLayout } from '../layouts/Main';

// Types
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <div>Hello World</div>;
};

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
