import { runInAction, action } from 'mobx';
import fetch from 'isomorphic-fetch';
import store from '../stores/availabilityStore';
import {
  FETCHING,
  FETCHED,
  FETCH_ERROR
} from '../const';

export const fetchData = action(async () => {
  store.fetchStatus = FETCHING;

  try {
    const res = await fetch('/api/availability');
    const json = await res.json();

    runInAction('availability fetch success', () => {
      store.availability = json;
      store.fetchStatus = FETCHED;
    });
  } catch (e) {
    runInAction('availability fetch error', () => {
      console.error(e);
      store.fetchStatus = FETCH_ERROR;
    })
  }
});

export const resetLocationAndService = action(() => {
  // Also need to cancel a pending AJAX req
  Object.assign(store, {
    selectedLocationId: null,
    selectedEventId: null,
    fetchStatus: null,
    availability: []
  });
});

export const setLocation = action(id => {
  store.selectedLocationId = id;

  if (store.isReadyToFetch) {
    fetchData();
  }
});

export const setService = action(id => {
  store.selectedEventId = id

  if (store.isReadyToFetch) {
    fetchData();
  }
});
