import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Card } from '../index';

test('Card', () => {
  const { container } = render(
    <Card title="Title">
      Content Card
    </Card>,
  );
  expect(container).toMatchSnapshot();
});