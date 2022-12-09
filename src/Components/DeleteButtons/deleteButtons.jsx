/* eslint-disable no-shadow */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import './DeleteButtons.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAll, deleteDone } from '../../rdx/items/actions';

class DeletetButtons extends React.Component {
  onDoneDelete = () => {
    this.props.dispatchDeleteDone();
  };

  onAllDelete = () => {
    this.props.dispatchDeleteAll();
  };

  render() {
    return (
      <div className="deleteContainer">
        <button type="button" className="deleteButtons" onClick={this.onDoneDelete}>Delete done</button>
        <button type="button" className="deleteButtons" onClick={this.onAllDelete}>Delete all</button>
      </div>
    );
  }
}

DeletetButtons.propTypes = {
  dispatchDeleteDone: PropTypes.func,
  dispatchDeleteAll: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteDone: () => dispatch(deleteDone()),
  dispatchDeleteAll: () => dispatch(deleteAll()),
});

export default connect(null, mapDispatchToProps)(DeletetButtons);
