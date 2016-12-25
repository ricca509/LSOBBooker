import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { first, last } from 'lodash';

import AvailabilityList from '../AvailabilityPage/AvailabilityList';
import LocationHeader from '../AvailabilityPage/LocationHeader';
import Loading from '../../components/Loading';
import { LOCATIONS } from '../../const';
import { fetchData } from '../../actions';

export class App extends Component {
  componentDidMount() {
    fetchData();
  }

  renderAvailability() {
    const { store } = this.props;

    return store.hasAvailability ?
      <AvailabilityList {...store} /> :
      <Loading />;
  }

  getDates() {
    const { store } = this.props;

    return store.hasAvailability ?
      {
        start: first(store.availability)['date'],
        end: last(store.availability)['date']
      } :
      null;
  }

  render() {
    const { store } = this.props;

    return (
      <div className="container">
        <div className="row">
          <h3>London School of Barbering availability</h3>
        </div>
        <div className="row">
          <LocationHeader
            location={ LOCATIONS[store.location] }
            dates={ this.getDates() }
          />
        </div>
        <div className="row">
          { this.renderAvailability() }
        </div>
      </div>
    );
  }
}

export default inject('store')(observer(App));
