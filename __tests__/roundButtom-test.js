import React from 'react';
import renderer from 'react-test-renderer';

import RoundButton from '../src/components/roundButton';

it('RoundButton snapShot', () => {
  const snap = renderer.create(
    <RoundButton title="Test" color="#FFF" backgroundColor="#000" onClick={jest.fn()} />,
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
