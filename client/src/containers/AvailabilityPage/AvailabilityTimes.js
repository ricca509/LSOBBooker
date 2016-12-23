import React from 'react';
import moment from 'moment';

export default ({ times }) => (
  <span className="row">
    { times.map(time => (
      <a key={time}
        target="blank"
        className="column"
        href="http://londonschoolofbarbering.simplybook.me/sheduler/manage/category/4/event/68">
        {moment(time, 'HH:mm:ss').format('HH:mm')}
      </a>
    )) }
  </span>
);
