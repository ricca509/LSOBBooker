import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Page } from '../Page';

describe('Page', () => {
  describe('when there is availability', () => {
    it('renders the data', () => {
      const props = {
        store: {
          hasAvailability: true,
          availability: [{
            date: 'date',
            times: [1, 2]
          }],
          isFetched: true,
          selectedLocationId: 4,
          selectedEventId: 68
        }
      };

      const wrapper = shallow(<Page {...props} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe('when is fetching', () => {
    it('renders the loading spinner', () => {
      const props = {
        store: {
          availability: [],
          isFetching: true,
          selectedLocationId: 4,
          selectedEventId: 68
        }
      };

      const wrapper = shallow(<Page {...props} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe('when there is a fetch error', () => {
    it('renders the error', () => {
      const props = {
        store: {
          isFetchError: true
        }
      };

      const wrapper = shallow(<Page {...props} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
