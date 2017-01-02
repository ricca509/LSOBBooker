import React, { Component } from 'react';
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

export class Page extends Component {
  getDates() {
    const { store } = this.props;

    return store.hasAvailability ?
      {
        start: first(store.availability)['date'],
        end: last(store.availability)['date']
      } :
      null;
  }

  renderAvailability() {
    const { store } = this.props;

    if (store.fetching) {
      return <Loading />;
    }

    if (store.fetched) {
      return <AvailabilityList availability={store.availability} />;
    }

    if (store.fetchError) {
      return <div>Fetch error</div>;
    }
  }

  renderHeader() {
    const { store } = this.props;

    if (store.fetchError) return null;

    return (<div className="row">
      <LocationHeader
        onSelectedLocationChange={onSelectedLocationChange}
        onSelectedServiceChange={onSelectedServiceChange}
        onResetClick={onResetClick}
        locationId={store.selectedLocationId}
        serviceId={store.selectedEventId}
        dates={this.getDates()}
      />
    </div>);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>London School of Barbering availability</h3>
        </div>
          { this.renderHeader() }
        <div className="row">
          { this.renderAvailability() }
        </div>
      </div>
    );
  }
}

Page.displayName = 'Page';

export default inject('store')(observer(Page));
