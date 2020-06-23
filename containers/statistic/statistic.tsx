import React, { Fragment } from 'react';
import DailyCharts from './statistic.dailyChart';
import ProvinceChart from './statistic.provinceChart';
import useSWR from 'swr';
import { getProvinceStatistic, getDailyStatistic } from '@containers/commonFetchers/statistic';
import { dailyStatisticEndpoint, provinceStatisticEndpoint } from '@helpers/endpoint';
import { IDailyStatistic } from '@interfaces/idailyStatistic';

const Statistic = () => {
    const { data: caseByProvince } = useSWR(provinceStatisticEndpoint, getProvinceStatistic);
    const { data: dailyCase } = useSWR(dailyStatisticEndpoint, getDailyStatistic);
    const dailyData: IDailyStatistic[] = dailyCase.slice(Math.max(dailyCase.length - 31, 0));    

    return(
        <Fragment>
            <div style={{ textAlign: 'center' }}>
                <h2>TOTAL POSITIF COVID-19 BY PROVINSI</h2>
                <ProvinceChart dataSource={caseByProvince} />
            </div>
            <div style={{ margin: '3em', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '2em' }}>GRAFIK COVID-19 31 HARI TERAKHIR</h2>
                <DailyCharts dataSource={dailyData} />
            </div>
        </Fragment>
    );
}

export default Statistic;