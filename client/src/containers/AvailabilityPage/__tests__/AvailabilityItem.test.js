import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import AvailabilityItem from '../AvailabilityItem';

describe('AvailabilityItem', () => {
  const availability = {
    date: "2017-01-04T13:09:55.189",
    times: [ '12:00:00', '20:00:00' ]
  };

  it('renders a formatted date and a list of AvailabilityTimes components', () => {
    const wrapper = shallow(<AvailabilityItem availability={availability} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
