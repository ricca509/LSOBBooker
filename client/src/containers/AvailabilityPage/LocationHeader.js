import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import moment from 'moment';

const getStartDate = (dates) => {
  return dates ?
    (<div>
      <strong>From </strong>{ moment(dates.start).format('dddd, MMMM Do YYYY') }
    </div>) :
    (<div><strong>From </strong>-</div>);
}

const getEndDate = (dates) => {
  return dates ?
    (<div>
      <strong>to </strong>{ moment(dates.end).format('dddd, MMMM Do YYYY') }
    </div>) :
    (<div><strong>to </strong>-</div>);
}

export const LocationHeader = ({
  locationId,
  serviceId,
  dates,
  onSelectedLocationChange,
  onSelectedServiceChange,
  onResetClick,
  store
}) => {
  if (!locationId) {
    const locations = Object.keys(store.locationList)
      .map(loc => (
        <option value={loc} key={loc}>{store.locationList[loc]}</option>
      ));

    return (
      <select name="select" onChange={onSelectedLocationChange}>
        <option value="">Select location</option>
        { locations }
      </select>
    );
  }

  if (locationId && !serviceId) {
    const services = Object.keys(store.serviceList[locationId])
      .map(svc => (
        <option value={svc} key={svc}>{store.serviceList[locationId][svc]}</option>
      ));

    return (
      <div>
        <div><strong>Location </strong>{ store.locationList[locationId] }</div>
        <select name="select" onChange={onSelectedServiceChange}>
          <option value="">Select service</option>
          { services }
        </select>
      </div>
    )
  }

  if (locationId && serviceId) {
    return (
      <main>
        <div>
          <div>
            <strong>Location </strong>{ store.locationList[locationId] }
          </div>
          <div>
            <strong>Service </strong>{ store.serviceList[locationId][serviceId] }
          </div>
          <div>
            <a
              className="button button-small button-clear"
              onClick={onResetClick}>
              Change location/service
            </a>
          </div>
        </div>
        <div>
          { getStartDate(dates) }
          { getEndDate(dates) }
        </div>
      </main>
    );
  }
}

LocationHeader.displayName = 'LocationHeader';

export default inject('store')(observer(LocationHeader));
