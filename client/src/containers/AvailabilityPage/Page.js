import React from 'react';
import { observer, inject } from 'mobx-react';
import { first, last } from 'lodash';

import AvailabilityList from '../AvailabilityPage/AvailabilityList';
import LocationHeader from '../AvailabilityPage/LocationHeader';
import Loading from '../../components/Loading';
import { setLocation, setService, resetLocationAndService } from '../../actions';

const onSelectedLocationChange = (ev) => {
  setLocation(ev.target.value);
}

const onSelectedServiceChange = (ev) => {
  setService(ev.target.value);
}

const onResetClick = () => {
  resetLocationAndService();
}

const getDates = (hasAvailability, availability) => {
  return hasAvailability ?
    {
      start: first(availability)['date'],
      end: last(availability)['date']
    } :
    null;
}

const renderAvailability = ({
  fetching,
  fetched,
  fetchError,
  availability
}) => {
  if (fetching) {
    return <Loading />;
  }

  if (fetched) {
    return <AvailabilityList availability={availability} />;
  }

  if (fetchError) {
    return <div>Fetch error</div>;
  }
}

const renderHeader = ({
  fetchError,
  selectedLocationId,
  selectedEventId,
  hasAvailability,
  availability
}) => {
  if (fetchError) return null;

  return (
    <div className="row">
      <LocationHeader
        onSelectedLocationChange={onSelectedLocationChange}
        onSelectedServiceChange={onSelectedServiceChange}
        onResetClick={onResetClick}
        locationId={selectedLocationId}
        serviceId={selectedEventId}
        dates={getDates(hasAvailability, availability)}
      />
  </div>
  );
}

export const Page = ({ store }) => (
  <div className="container">
    <div className="row">
      <h3>London School of Barbering availability</h3>
    </div>
      { renderHeader(store) }
    <div className="row">
      { renderAvailability(store) }
    </div>
  </div>
);

Page.displayName = 'Page';

export default inject('store')(observer(Page));
