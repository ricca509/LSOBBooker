// Thanks to https://github.com/mweststrate/state-routing-blog-sources/blob/master/src/store/router.js
import { autorun } from 'mobx';
import { Router } from 'director';
import {
  setLocation,
  setService,
  resetLocationAndService
} from './actions/availabilityActions';

const buildPath = (pathArray) => {
  return pathArray
    .filter(item => item)
    .map(item => `/${item}`)
    .join('') || '/';
}

export const startRouter = (store) => {
  // update state on url change
  const router = new Router({
    '/:locationId/:serviceId': (locationId, serviceId) => {
      resetLocationAndService();
      setLocation(locationId);
      setService(serviceId);
    },
    '/:locationId': (locationId) => {
      resetLocationAndService();
      setLocation(locationId);
    },
    '/': () => resetLocationAndService()
  }).configure({
    notfound: () => console.error('404'),
    html5history: true
  }).init();

  // update url on state changes
  autorun(() => {
    const nextPath = buildPath([
      store.selectedLocationId,
      store.selectedEventId
    ]);

    if (nextPath !== window.location.pathname) {
      window.history.pushState(null, null, nextPath);
    }
  });

  return router;
}
