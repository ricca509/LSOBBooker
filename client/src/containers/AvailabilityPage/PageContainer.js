import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { fetchData } from '../../actions';
import Page from './Page';

export class PageContainer extends Component {
  componentDidMount() {
    const { store } = this.props;

    if (store.isReadyToFetch) {
      fetchData();
    }
  }

  render() {
    const { store } = this.props;

    return (
      <Page
        availability={store.availability}
        fetching={store.fetching}
        fetched={store.fetched}
        fetchError={store.fetchError}
        hasAvailability={store.hasAvailability}
        locationId={store.selectedLocationId}
        serviceId={store.selectedEventId}
      />
    );
  }
}

export default inject('store')(observer(PageContainer));
