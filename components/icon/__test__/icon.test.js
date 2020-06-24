import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  FrownOutlined,
  AlertOutlined,
  HomeOutlined,
  BugOutlined,
  CalendarOutlined,
  HeartOutlined,
  GithubOutlined,
} from '../index';

test('Icon', () => {
  const { container } = render(
    <div>
      <MailOutlined />
      <AppstoreOutlined />
      <SettingOutlined />
      <FrownOutlined />
      <AlertOutlined />
      <HomeOutlined />
      <BugOutlined />
      <CalendarOutlined />
      <HeartOutlined />
      <GithubOutlined />
    </div>,
  );
  expect(container).toMatchSnapshot();
});