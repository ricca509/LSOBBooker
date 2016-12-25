import { observable, computed } from 'mobx';

export default observable({
  availability: [],
  location: 4,
  eventId: 68,
  fetching: false,
  isFetching: computed(function() { return this.fetching; }),
  hasAvailability: computed(function () { return this.availability.length && !this.isFetching } )
});
