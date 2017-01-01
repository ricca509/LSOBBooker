import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Page } from '../Page';

describe('Page', () => {
  describe('when there is availability', () => {
    it('renders the data', () => {
      const props = {
        hasAvailability: true,
        availability: [{
          date: 'date',
          times: [1, 2]
        }],
        fetched: true,
        locationId: 4,
        serviceId: 68,
      };

      const wrapper = shallow(<Page {...props} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe('when is fetching', () => {
    it('renders the loading spinner', () => {
      const props = {
        availability: [],
        fetching: true,
        locationId: 4,
        serviceId: 68,
      };

      const wrapper = shallow(<Page {...props} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe('when there is a fetch error', () => {
    it('renders the error', () => {
      const props = {
        fetchError: true
      };

      const wrapper = shallow(<Page {...props} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
