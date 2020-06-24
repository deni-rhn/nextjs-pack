import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { notification } from '../index';

test('Notification', () => {
  const { container } = render(
    notification.open({
      message: 'Notification title',
      description: 'Content notification',
      onClick: () => console.log('notification clicked')      
    }),
  );
  expect(container).toMatchSnapshot();
});