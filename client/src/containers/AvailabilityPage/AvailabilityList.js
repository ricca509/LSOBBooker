import React from 'react';
import AvailabilityItem from './AvailabilityItem';

export default ({ availability }) => (
  <dl>
    {availability.map(av => <AvailabilityItem
      key={av.date}
      availability={av}
    />)}
  </dl>
);
