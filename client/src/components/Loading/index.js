import React from 'react';

const Loading = ({ loadingText = 'Loading...' }) => (
  <div>{ loadingText }</div>
);

Loading.displayName = 'Loading'

export default Loading;
