import 'antd/dist/antd.css';
import React, { Fragment } from 'react';
import App from 'next/app';
// import Layout from '@components/Layout';
import MainLayouts from '@layouts/index';
import 'react-loading-bar/dist/index.css';
import 'antd/dist/antd.css';
import './global.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <MainLayouts>
          <Component {...pageProps} />
        </MainLayouts>
      </Fragment>
    );
  }
}

export default MyApp;
