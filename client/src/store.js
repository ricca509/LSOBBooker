import { extendObservable, computed } from 'mobx';

export class Store {
  constructor() {
    extendObservable(this, {
      availability: [],
      selectedLocationId: 4,
      selectedEventId: 68,
      fetching: false,
      hasAvailability: computed(() => this.availability.length && !this.fetching)
    });
  }
}

export default new Store();
