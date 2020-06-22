import React, { Fragment } from 'react';
import { Table } from '@components/table';
import { TableColumns } from './statistic.tableColumns';

type Props = {
    data?: any;
}

const Statistic = ({ data } : Props) => {
    return(
        <Fragment>
            <Table dataSource={data} columns={TableColumns} />
        </Fragment>
    );
}

export default Statistic;