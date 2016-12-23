import React from 'react';
import AvailabilityItem from './AvailabilityItem';

export default ({ availability }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Times</th>
      </tr>
    </thead>
    <tbody>
      {availability.map(av => <AvailabilityItem
        key={av.date}
        availability={av}
      />)}
    </tbody>
  </table>
);
