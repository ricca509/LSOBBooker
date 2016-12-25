import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { fetchData } from '../../actions';
import Page from './Page';

export class PageContainer extends Component {
  componentDidMount() {
    fetchData();
  }

  render() {
    const { store } = this.props;

    return (
      <Page
        availability={store.availability}
        hasAvailability={store.hasAvailability}
        location={store.location}
      />
    );
  }
}

export default inject('store')(observer(PageContainer));
