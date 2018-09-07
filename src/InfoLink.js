import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faInfo from '@fortawesome/fontawesome-free-solid/faInfo';

const InfoLink = (props) => (
  <Link to={props.to}>
    <FontAwesomeIcon icon={faInfo} className="float-right" />
  </Link>
);

export default InfoLink;
