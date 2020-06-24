import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Breadcrumb } from '../index';

test('Breadcrumb', () => {
  const { container } = render(
    <Breadcrumb>
        <Breadcrumb.Item>Page</Breadcrumb.Item>
        <Breadcrumb.Item>Part</Breadcrumb.Item>
        <Breadcrumb.Item>Sub Part</Breadcrumb.Item>
    </Breadcrumb>,
  );
  expect(container).toMatchSnapshot();
});