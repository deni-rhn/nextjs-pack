import React, { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Statistic from '@containers/statistic';

const Index: NextPage = () => {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
    ];

    return (
        <Fragment>
            <Head>
                <title>Halaman Statistik</title>
            </Head>

            <Statistic data={dataSource} />
        </Fragment>
    );
};

export default Index;