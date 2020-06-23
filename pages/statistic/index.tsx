import React, { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Statistic from '@containers/statistic';

const Index: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Halaman Statistik</title>
            </Head>

            <Statistic />
        </Fragment>
    );
};

export default Index;