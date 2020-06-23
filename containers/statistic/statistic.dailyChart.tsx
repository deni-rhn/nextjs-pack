import React, { Fragment } from 'react';
import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  Area,
  Line,
} from 'recharts';
import { barChartParser } from './statistic.parser';
import { IDailyStatistic } from '@interfaces/idailyStatistic';

type Props = {
  dataSource?: IDailyStatistic[];
}

const DailyCharts = ({ dataSource }: Props) => {
  const data = dataSource ? barChartParser(dataSource) : [];

  return (
    <Fragment>
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="sembuh" stroke="#ff7300" />
          <Bar dataKey="meninggal" fill="#CC2A49" />
          <Bar dataKey="rawat" fill="#493F10" />
          <Area type="monotone" dataKey="positif" fill="#8884d8" stroke="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

export default DailyCharts;