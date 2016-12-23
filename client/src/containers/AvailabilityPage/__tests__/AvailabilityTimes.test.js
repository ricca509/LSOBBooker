import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import AvailabilityTimes from '../AvailabilityTimes';

describe('AvailabilityTimes', () => {
  const times = [
    '12:30:00',
    '15:00:00',
    '20:00:00'
  ];

  it('renders a list of times with links', () => {
    const wrapper = shallow(<AvailabilityTimes times={times} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
