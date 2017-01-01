import React from 'react';
import { observer } from 'mobx-react';
import AvailabilityItem from './AvailabilityItem';

export const AvailabilityList = ({ availability }) => (
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

AvailabilityList.displayName = 'AvailabilityList';

export default observer(AvailabilityList);
