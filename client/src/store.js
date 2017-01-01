import { extendObservable, computed } from 'mobx';
import {
  LOCATIONS as locationList,
  SERVICES as serviceList
} from './const';

export class Store {
  constructor() {
    extendObservable(this, {
      availability: [],
      selectedLocationId: null,
      selectedEventId: null,
      locationList,
      serviceList,
      fetching: false,
      fetched: false,
      fetchError: false,
      isReadyToFetch: computed(() => this.selectedLocationId && this.selectedEventId),
      hasAvailability: computed(() => this.availability.length && !this.fetching)
    });
  }
}

export default new Store();
