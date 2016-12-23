import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Loading from '../';

describe('Loading component', () => {
  it('renders the default loadingText', () => {
    const wrapper = shallow(<Loading />)

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders the loadingText when passed as prop', () => {
    const wrapper = shallow(<Loading loadingText="test" />)

    expect(toJSON(wrapper)).toMatchSnapshot();
  })
});
