import React from 'react';
import moment from 'moment';

export default ({ times }) => (
  <ul>
    { times.map(time => (
      <li key={time}>
        <a
          target="blank"
          href="http://londonschoolofbarbering.simplybook.me/sheduler/manage/category/4/event/68">
          {moment(time, 'HH:mm:ss').format('HH:mm')}
        </a>
      </li>
    )) }
  </ul>
);
