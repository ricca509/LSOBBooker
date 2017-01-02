import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import moment from 'moment';

import { LocationHeader } from '../LocationHeader';

describe('LocationHeader', () => {
  const store = {
    locationList: {
      location1: 'location1',
      location2: 'location2'
    },
    serviceList: {
      location1: {
        service1: 'service1',
        service2: 'service2'
      }
    }
  };

  describe('when no location or service is selected', () => {
    it('renders location selection', () => {
      const props = {
        store
      };

      const wrapper = shallow(<LocationHeader {...props} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe('when location is selected and service is not', () => {
    it('renders selected location and service selection', () => {
      const props = {
        locationId: 'location1',
        store
      };

      const wrapper = shallow(<LocationHeader {...props} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe('when location and service are selected', () => {
    it('renders the selected location and service', () => {
      const props = {
        locationId: 'location1',
        serviceId: 'service1',
        dates: {
          start: moment('12-25-2016', 'MM-DD-YYYY'),
          end: moment('12-29-2016', 'MM-DD-YYYY')
        },
        store
      };

      const wrapper = shallow(<LocationHeader {...props} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders without dates if no date is passed', () => {
      const props = {
        locationId: 'location1',
        serviceId: 'service1',
        dates: null,
        store
      }

      const wrapper = shallow(<LocationHeader {...props} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
