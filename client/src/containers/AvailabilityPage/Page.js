import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { first, last } from 'lodash';

import AvailabilityList from '../AvailabilityPage/AvailabilityList';
import LocationHeader from '../AvailabilityPage/LocationHeader';
import Loading from '../../components/Loading';
import { setLocation, setService } from '../../actions';

const onSelectedLocationChange = (ev) => {
  setLocation(ev.target.value);
}

const onSelectedServiceChange = (ev) => {
  setService(ev.target.value);
}

export class Page extends Component {
  getDates() {
    const { hasAvailability, availability } = this.props;

    return hasAvailability ?
      {
        start: first(availability)['date'],
        end: last(availability)['date']
      } :
      null;
  }

  renderAvailability() {
    const { fetching, fetched, fetchError, availability } = this.props;

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

  renderHeader() {
    const { locationId, serviceId, fetchError } = this.props;

    if (fetchError) return null;

    return (<div className="row">
      <LocationHeader
        onSelectedLocationChange={onSelectedLocationChange}
        onSelectedServiceChange={onSelectedServiceChange}
        locationId={locationId}
        serviceId={serviceId}
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

export default observer(Page);
