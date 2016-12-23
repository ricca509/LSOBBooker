import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import LocationHeader from '../LocationHeader';

describe('LocationHeader', () => {
  const availability = {
    date: "2017-01-04T13:09:55.189",
    times: [ '12:00:00', '20:00:00' ]
  };

  it('renders the location intended for the search', () => {
    const wrapper = shallow(<LocationHeader location='far far away' />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
