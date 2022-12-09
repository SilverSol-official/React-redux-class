/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { connect } from 'react-redux';
import { AcordionInfo } from '../AcordionInfo/acordionInfo';
import AccordionEdit from '../AcordionEdit/acordionEdit';
// import { changeProgressTaskThunk } from '../../rdx/items/thunks';
import { removeTaskThunk, putTaskThunk } from '../../rdx/items/thunks';
import './taskListItem.css';

// eslint-disable-next-line import/prefer-default-export,react/function-component-definition
class Task extends React.Component {
  DeleteTask = () => {
    this.props.dispatchRemoveTaskThunk(this.props.task.id);
  };

  Process = () => {
    this.props.task.inProcess = !this.props.task.inProcess;
    this.props.dispatchPutTaskThunk(this.props.task);
  };

  Done = () => {
    this.props.task.completed = !this.props.task.completed;
    this.props.task.inProcess = false;
    this.props.dispatchPutTaskThunk(this.props.task);
  };

  render() {
    let doneButtonClass = 'defaultButton';
    let processButtonClass = 'defaultButton';
    let visibility = '';

    if (this.props.task.completed) {
      doneButtonClass += ' done';
    }

    if (this.props.task.inProcess) {
      processButtonClass += ' process';
    }

    if (!this.props.task.visible) {
      visibility = 'containerI unVisible';
    } else {
      visibility = 'containerI flex';
    }
    return (
      <div className={visibility}>
        <button
          type="button"
          className={doneButtonClass}
          onClick={this.Done}
        >
          <DoneIcon />
        </button>
        <div className="Accordion">
          <AcordionInfo task={this.props.task} />
        </div>
        <button
          type="button"
          className={processButtonClass}
          onClick={this.Process}
        >
          <KeyboardDoubleArrowRightIcon />
        </button>
        <div className="accordion-edit">
          <AccordionEdit task={this.props.task} />
        </div>

        <button
          type="button"
          className="defaultButton trashButton"
          onClick={this.DeleteTask}
        >
          <DeleteIcon />
        </button>
      </div>
    );
  }
}

// eslint-disable-next-line react/no-typos
Task.propTypes = {
  // eslint-disable-next-line react/require-default-props
  dispatchPutTaskThunk: PropTypes.func,
  dispatchRemoveTaskThunk: PropTypes.func,
};

// const mapStateToProps = (state) => ({
// });

const mapDispatchToProps = (dispatch) => ({
  dispatchPutTaskThunk: (task) => dispatch(putTaskThunk(task)),
  dispatchRemoveTaskThunk: (task) => dispatch(removeTaskThunk(task)),
});

export default connect(null, mapDispatchToProps)(Task);
