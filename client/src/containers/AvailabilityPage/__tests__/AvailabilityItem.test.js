import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import AvailabilityItem from '../AvailabilityItem';

describe('AvailabilityItem', () => {
  it('renders a formatted date and a list of AvailabilityTimes components', () => {
    const availability = {
      date: "2017-01-04T13:09:55.189",
      times: [ '12:00:00', '20:00:00' ]
    };

    const wrapper = shallow(<AvailabilityItem availability={availability} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('does not render when there is no availability', () => {
    const availability = {
      date: "2017-01-04T13:09:55.189",
      times: []
    };

    const wrapper = shallow(<AvailabilityItem availability={availability} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
