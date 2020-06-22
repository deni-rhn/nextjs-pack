import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Loading from 'react-loading-bar';
import { Router } from 'next/router';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleShowLoading = () => setIsLoading(true);

  const handleHideLoading = () => setIsLoading(false);

  Router.events.on('routeChangeStart', () => {
    handleShowLoading();
  });

  Router.events.on('routeChangeComplete', () => {
    handleHideLoading();
  });

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Loading show={isLoading} color='#C33333' showSpinner={false} />
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href="/users">
            <a>Users List</a>
          </Link>{' '}
          | <a href="/api/users">Users API</a>
          | {' '}
          <Link href="/statistic">
            <a>Statistic</a>
          </Link>{' '}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout
