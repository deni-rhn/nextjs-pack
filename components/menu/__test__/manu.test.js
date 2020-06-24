import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Menu } from '../index';

test('Menu', () => {
  const { container } = render(
    <Menu mode="vertical">
      <Menu.Item key="1">Nav one</Menu.Item>
    </Menu>,
  );
  expect(container).toMatchSnapshot();
});