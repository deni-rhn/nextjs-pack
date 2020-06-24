import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Col } from '../index';

test('Col', () => {
  const { container } = render(
    <Col span={8}>
      <span>Cool on it!</span>
    </Col>,
  );
  expect(container).toMatchSnapshot();
});