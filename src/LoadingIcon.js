import React, { Component } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';

class LoadingIcon extends Component {
  render() {
    return (
      <FontAwesomeIcon icon={faSpinner} spin />
    )
  }
}

export default LoadingIcon;
