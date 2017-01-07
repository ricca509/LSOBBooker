import moment from 'moment';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

const fillArrayWithNumbers = (n) => Array.apply(null, Array(n)).map((x, i) => i);

const getDaysRange = (numDays) => fillArrayWithNumbers(numDays)
  .map(day => moment().add(day, 'days'));

export const getAvailability = async (eventId = 68, numDays = 20) => {
  const opts = {};
  const days = getDaysRange(numDays);

  const calls = days
    .map(day => `http://londonschoolofbarbering.simplybook.me/sheduler/get-starttime-matrix/?date=${day.format('YYYY-MM-DD')}&event_id=${eventId}`)
    .map(url => fetch(url, opts));

  const availabilities = await Promise.all(calls);
  const json = await Promise.all(availabilities.map(a => a.json()));

  const availabilityMap = _.chain(days)
    .zip(json)
    .flatMap(e => _.zipObject(['date', 'times'], e))
    .value();

  return availabilityMap;
}
