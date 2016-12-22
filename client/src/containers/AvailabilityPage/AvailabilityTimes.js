import React from 'react';

export default ({ times }) => (
  <ul>
    { times.map(time => (
      <li key={time}>
        <a
          target="blank" 
          href="http://londonschoolofbarbering.simplybook.me/sheduler/manage/category/4/event/68">
          {time}
        </a>
      </li>
    )) }
  </ul>
);
