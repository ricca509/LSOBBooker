import moment from 'moment';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

function fillArrayWithNumbers(n) {
  var arr = Array.apply(null, Array(n));
  return arr.map(function (x, i) { return i });
}

const opts = {};

const days = fillArrayWithNumbers(10)
  .map(day => moment().add(day, 'days'));

const calls = days
  .map(day => `http://londonschoolofbarbering.simplybook.me/sheduler/get-starttime-matrix/?date=${day.format('YYYY-MM-DD')}&event_id=68`)
  .map(url => fetch(url, opts));

export const getAvailability = async () => {
  return Promise.all(calls)
    .then(values => values.map(v => v.json()))
    .then(value => {
      return Promise.all(value)
        .then(v => _.zip(days, v))
    })
    .catch(console.error);
}
