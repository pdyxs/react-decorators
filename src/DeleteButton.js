import React, { Component } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import { Link } from 'react-router-dom';

class DeleteButton extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };

    this.onExpand = this.onExpand.bind(this);
  }

  onExpand() {
    this.setState({
      expanded: true,
      timeout: setTimeout(function(){
         this.setState({expanded: false, timeout: undefined});
      }.bind(this),3000)
    });
  }

  componentWillUnmount() {
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }
  }

  render() {
    var { className, style } = this.props;

    if (!this.state.expanded) {
      return (
        <button className={`btn btn-outline-danger ${className}`} style={style}
          onClick={this.onExpand}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      );
    }

    if (!this.props.url) {
      return (
        <button className={`btn btn-outline-danger ${className}`} style={style}
          onClick={this.props.onDelete}>
          Delete
        </button>
      );
    }

    return (
      <Link to={this.props.url} role="button"
        className={`btn btn-outline-danger ${className}`} style={style}
        onClick={this.props.onDelete}>
        Delete
      </Link>
    );
  }
}

export default DeleteButton;
