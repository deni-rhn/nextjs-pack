import React, { Fragment } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from 'recharts';
import { randomColors, RADIAN } from '@helpers/helpers';
import { IProvinceStatistic } from '@interfaces/iprovinceStatistic';
import { pieChartParser } from './statistic.parser';

type Props = {
  dataSource?: IProvinceStatistic[];
}

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text key={index} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ProvinceChart = ({ dataSource }: Props) => {
  const data = pieChartParser(dataSource);

  return (
    <Fragment>
      <div style={{ width: '100%', height: 650 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="value"
            >
              {
                dataSource.map((entry, index) => <Cell key={`cell-${index}`} fill={randomColors[index % randomColors.length]} />)
              }
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Fragment>
  );
};

export default ProvinceChart;