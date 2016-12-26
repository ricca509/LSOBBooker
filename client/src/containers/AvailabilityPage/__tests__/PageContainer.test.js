import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { PageContainer } from '../PageContainer';

describe('PageContainer', () => {
  it('renders the Page with the right data', () => {
    const wrapper = shallow(<PageContainer store={{
      availability: [{
        date: 'date',
        times: [1, 2]
      }],
      hasAvailability: true,
      selectedLocationId: 4,
      selectedEventId: 68
    }} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
