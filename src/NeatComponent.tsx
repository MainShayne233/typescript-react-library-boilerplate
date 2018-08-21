import * as React from 'react';
import * as PropTypes from 'prop-types';

const NeatComponent: React.SFC<{neatMessageProp: string}> = ({neatMessageProp} : { neatMessageProp: string}) => (
  <div>
    <p id="message">{neatMessageProp}</p>
  </div>
);

export default NeatComponent;
