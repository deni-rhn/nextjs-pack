import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Tooltip } from '../index';

test('Tooltip', () => {
  const { container } = render(
    <Tooltip title="Promp text" placement="top">
      <span>Tooltip will show when mouse hover</span>
    </Tooltip>,
  );
  expect(container).toMatchSnapshot();
});