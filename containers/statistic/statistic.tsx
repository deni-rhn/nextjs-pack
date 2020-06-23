import React, { Fragment } from 'react';
import DailyCharts from './statistic.dailyChart';
import ProvinceChart from './statistic.provinceChart';

type Props = {
    data?: any;
}

const Statistic = ({ data } : Props) => {
    return(
        <Fragment>
            <div style={{ textAlign: 'center' }}>
                <h2>TOTAL POSITIF COVID-19 BY PROVINSI</h2>
                <ProvinceChart />
            </div>
            <div style={{ margin: '3em', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '2em' }}>TOTAL POSITIF COVID-19 30 HARI TERAKHIR</h2>
                <DailyCharts />
            </div>
        </Fragment>
    );
}

export default Statistic;