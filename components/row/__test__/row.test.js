import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Row } from '../index';

test('Row', () => {
  const { container } = render(
    <div>
      <Row gutter={16}>
        <span>Cool!</span>
      </Row>
    </div>,
  );
  expect(container).toMatchSnapshot();
});