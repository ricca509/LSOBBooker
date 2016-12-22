import React from 'react';
import moment from 'moment';

import AvailabilityTimes from './AvailabilityTimes';

export default ({ availability }) => (
  <dt>
    {moment(availability.date).format('MMMM Do YYYY')}
    <AvailabilityTimes times={availability.availability} />
  </dt>
);
