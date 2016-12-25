import { extendObservable, computed } from 'mobx';

export class Store {
  constructor() {
    extendObservable(this, {
      availability: [],
      location: 4,
      eventId: 68,
      fetching: false,
      hasAvailability: computed(() => this.availability.length && !this.fetching)
    });
  }
}

export default new Store();
