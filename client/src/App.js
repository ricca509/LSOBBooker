import React, { Component } from 'react';
import { first, last } from 'lodash';

import AvailabilityList from './containers/AvailabilityPage/AvailabilityList';
import LocationHeader from './containers/AvailabilityPage/LocationHeader';
import Loading from './components/Loading';
import { observer } from 'mobx-react';
import { LOCATIONS } from './const';
import { fetchData } from './actions';

export class App extends Component {
  componentDidMount() {
    fetchData();
  }

  renderAvailability() {
    return this.props.store.availability.length ?
      <AvailabilityList {...this.props.store} /> :
      <Loading />;
  }

  getDates() {
    if (this.props.store.availability.length) {
      return {
        start: first(this.props.store.availability)['date'],
        end: last(this.props.store.availability)['date']
      }
    }

    return null;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>London School of Barbering availability</h3>
        </div>
        <div className="row">
          <LocationHeader
            location={LOCATIONS[this.props.store.location]}
            dates={this.getDates()}
          />
        </div>
        <div className="row">
          { this.renderAvailability() }
        </div>
      </div>
    );
  }
}

export default observer(App);
