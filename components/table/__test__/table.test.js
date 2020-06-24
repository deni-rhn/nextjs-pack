import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Table } from '../index';

test('Table', () =>{
  const { container } = render(
    <div>
      <Table 
        dataSource={[
          {
            key: "1",
            name: "John Doe",
            age: 30,
            address: "Yogyakarta",
          },
          {
            key: "2",
            name: "Jeni Doe",
            age: 32,
            address: "Sleman",
          }
        ]}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Age",
            dataIndex: "age",
            key: "age",
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address",
          },
        ]}
      />
    </div>,
  );
  expect(container).toMatchSnapshot();
});