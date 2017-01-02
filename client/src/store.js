import { extendObservable, computed } from 'mobx';
import {
  LOCATIONS as locationList,
  SERVICES as serviceList,
  FETCHING,
  FETCHED,
  FETCH_ERROR
} from './const';

export class Store {
  constructor() {
    extendObservable(this, {
      availability: [],
      selectedLocationId: null,
      selectedEventId: null,
      locationList,
      serviceList,
      fetchStatus: null,
      isReadyToFetch: computed(() => this.selectedLocationId && this.selectedEventId),
      isFetching: computed(() => this.fetchStatus === FETCHING),
      isFetched: computed(() => this.fetchStatus === FETCHED),
      isFetchError: computed(() => this.fetchStatus === FETCH_ERROR),
      hasAvailability: computed(() => this.availability.length && !this.fetching)
    });
  }
}

export default new Store();
