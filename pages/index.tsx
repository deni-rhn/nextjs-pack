import { Fragment } from 'react'
import Home from '@containers/home';
import Head from 'next/head';

const IndexPage = () => (
  <Fragment>
    <Head>
      <title>Home</title>
    </Head>
    
    <Home />
  </Fragment>
);

export default IndexPage
