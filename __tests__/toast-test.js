import React from 'react';
import renderer from 'react-test-renderer';

import Toast from '../src/components/toast';

it('RoundButton snapShot', () => {
  const snap = renderer.create(
    <Toast visible text="Testing" />,
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
