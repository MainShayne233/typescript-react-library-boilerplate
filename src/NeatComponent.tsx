import * as React from 'react';
import * as PropTypes from 'prop-types';

interface NeatComponentProps {
  neatMesssageProp: string,
}

const NeatComponent: React.SFC<{neatMessageProp: string}> = ({neatMessageProp} : { neatMessageProp: string}) => (
  <div>
    <p id="message">{neatMessageProp}</p>
  </div>
);

export default NeatComponent;
