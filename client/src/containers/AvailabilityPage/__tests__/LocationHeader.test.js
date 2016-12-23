import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import moment from 'moment';

import LocationHeader from '../LocationHeader';

describe('LocationHeader', () => {
  it('renders the location intended for the search', () => {
    const wrapper = shallow(<LocationHeader
      location='far far away'
      dates={{
        start: moment('12-25-2016', 'MM-DD-YYYY'),
        end: moment('12-29-2016', 'MM-DD-YYYY')
      }}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
