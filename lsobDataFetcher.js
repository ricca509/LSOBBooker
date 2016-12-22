import moment from 'moment';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

function fillArrayWithNumbers(n) {
  var arr = Array.apply(null, Array(n));
  return arr.map(function (x, i) { return i });
}

export const getAvailability = async (eventId = 68, numDays = 20) => {
  const opts = {};

  const days = fillArrayWithNumbers(numDays)
    .map(day => moment().add(day, 'days'));

  const calls = days
    .map(day => `http://londonschoolofbarbering.simplybook.me/sheduler/get-starttime-matrix/?date=${day.format('YYYY-MM-DD')}&event_id=${eventId}`)
    .map(url => fetch(url, opts));

  const availabilities = await Promise.all(calls);
  const json = await Promise.all(availabilities.map(a => a.json()));

  const availabilityMap = _.chain(days)
    .zip(json)
    .flatMap(e => _.zipObject(['date', 'times'], e))
    .value();

  const times = availabilityMap
    .map(a => a.times.map(time => `http://londonschoolofbarbering.simplybook.me/sheduler/load-units/?event_id=${eventId}&date=${a.date.format('YYYY-MM-DD')}&time=${time}&count=1`))

  const idCalls = await Promise.all(times.map(async (urls) => {
    const resps = await Promise.all(urls.map(url => fetch(url)));

    return await Promise.all(resps.map(r => r.json()));
  }));

  // console.log('times', JSON.stringify(_.chain(availabilityMap).zip(idCalls).value()));

  return availabilityMap;
}
