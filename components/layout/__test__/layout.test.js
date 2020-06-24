import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Layout } from '../index';

const { Header, Footer, Content, Sider } = Layout;

test('Layout', () => {
  const { container } = render(
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>,
  );
  expect(container).toMatchSnapshot();
});