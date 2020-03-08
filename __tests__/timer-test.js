import React from 'react';
import renderer from 'react-test-renderer';

import Timer from '../src/components/timer';

it('RoundButton snapShot', () => {
  const snap = renderer.create(
    <Timer interval={0} />,
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
