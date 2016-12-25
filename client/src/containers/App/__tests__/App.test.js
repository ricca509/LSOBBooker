import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { App } from '../';

describe('App container', () => {
  describe('when there is availability', () => {
    it('renders the data', () => {
      const wrapper = shallow(<App store={{
        availability: [{
          date: 'date',
          times: [1, 2]
        }],
        hasAvailability: true,
        location: 4,
        eventId: 68,
        fetching: false
      }} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe('when there is no availability', () => {
    it('renders the loading spinner', () => {
      const wrapper = shallow(<App store={{
        availability: [],
        hasAvailability: false,
        location: 4,
        eventId: 68,
        fetching: false
      }} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
