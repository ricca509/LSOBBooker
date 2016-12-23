import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import AvailabilityList from '../AvailabilityList';

describe('AvailabilityList', () => {
  const availability = [
    {
      date: "2017-01-03T13:09:55.189",
      times: []
    },
    {
      date: "2017-01-04T13:09:55.189",
      times: [ '12:00:00', '20:00:00' ]
    }
  ];

  it('renders a list of AvailabilityItem', () => {
    const wrapper = shallow(<AvailabilityList availability={availability} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
