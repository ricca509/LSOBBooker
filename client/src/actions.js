import { action } from 'mobx';
import fetch from 'isomorphic-fetch';
import store from './store';

export const fetchData = action('fetchData', async () => {
  store.fetching = true;

  try {
    const res = await fetch('/api/availability');
    const json = await res.json();

    store.availability = json;
  } catch (e) {
    console.log(e);
  } finally {
    store.fetching = false;
  }
});
