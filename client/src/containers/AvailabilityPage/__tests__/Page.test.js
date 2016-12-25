import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Page } from '../Page';

describe('Page', () => {
  describe('when there is availability', () => {
    it('renders the data', () => {
      const wrapper = shallow(<Page
        availability={[{
          date: 'date',
          times: [1, 2]
        }]}
        hasAvailability={true}
        location={4}
      />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe('when there is no availability', () => {
    it('renders the loading spinner', () => {
      const wrapper = shallow(<Page
        availability={[]}
        hasAvailability={false}
        location={4}
      />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
