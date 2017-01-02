import React from 'react';
import moment from 'moment';
import { observer } from 'mobx-react';

import AvailabilityTimes from './AvailabilityTimes';

export const AvailabilityItem = ({ availability }) => {
  return availability.times.length ?
    (
      <tr>
        <td>{moment(availability.date).format('dddd, MMMM Do YYYY')}</td>
        <td><AvailabilityTimes times={availability.times} /></td>
      </tr>
    ) :
    null;
}

AvailabilityItem.displayName = 'AvailabilityItem';

export default observer(AvailabilityItem);
