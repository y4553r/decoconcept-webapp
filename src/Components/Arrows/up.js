import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default ({ color }) => {
  return (
    <FontAwesomeIcon icon={faChevronUp} style={{color: color}} />
  );
}