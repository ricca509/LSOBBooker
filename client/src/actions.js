import { runInAction, action } from 'mobx';
import fetch from 'isomorphic-fetch';
import store from './store';

export const fetchData = action(async () => {
  store.fetching = true;

  try {
    const res = await fetch('/api/availability');
    const json = await res.json();

    runInAction('availability fetch success', () => {
      store.availability = json;
      store.fetching = false;
      store.fetched = true;
    });
  } catch (e) {
    runInAction('availability fetch error', () => {
      console.log(e);
      store.fetchError = e;
      store.fetching = false;
    })
  }
});

export const setLocation = action(id => {
  store.selectedLocationId = id;

  if (store.selectedLocationId && store.selectedEventId) {
    fetchData();
  }
});

export const setService = action(id => {
  store.selectedEventId = id

  if (store.selectedLocationId && store.selectedEventId) {
    fetchData();
  }
});

export const resetLocationAndService = action(() => {
  // Also need to cancel a pending AJAX req
  Object.assign(store, {
    selectedLocationId: null,
    selectedEventId: null,
    fetching: false,
    fetched: false,
    fetchError: false,
    availability: []
  });
});
