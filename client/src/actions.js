import { runInAction } from 'mobx';
import fetch from 'isomorphic-fetch';
import store from './store';

export const fetchData = async () => {
  store.fetching = true;

  try {
    const res = await fetch('/api/availability');
    const json = await res.json();

    runInAction('availability fetch success', () => {
      store.availability = json;
      store.fetching = false;
    });
  } catch (e) {
    runInAction('availability fetch error', () => {
      console.log(e);
      store.fetching = false;
    })    
  }
};
