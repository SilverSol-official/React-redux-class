/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch } from 'react-redux';
import { AcordionInfo } from '../AcordionInfo/acordionInfo';
import { AccordionEdit } from '../AcordionEdit/acordionEdit';
// import { changeProgressTaskThunk } from '../../rdx/items/thunks';
import { removeTaskThunk, putTaskThunk } from '../../rdx/items/thunks';
import './taskListItem.css';

// eslint-disable-next-line import/prefer-default-export,react/function-component-definition
export const Task = ({ task }) => {
  let doneButtonClass = 'defaultButton';
  let processButtonClass = 'defaultButton';
  let visibility = '';

  if (task.completed) {
    doneButtonClass += ' done';
  }

  if (task.inProcess) {
    processButtonClass += ' process';
  }

  if (!task.visible) {
    visibility = 'containerI unVisible';
  } else {
    visibility = 'containerI flex';
  }

  const dispatch = useDispatch();

  const DeleteTask = React.useCallback(() => {
    dispatch(removeTaskThunk(task.id));
  }, [task]);

  const Process = React.useCallback(() => {
    task.inProcess = !task.inProcess;
    dispatch(putTaskThunk(task));
  }, [task]);

  const Done = React.useCallback(() => {
    task.completed = !task.completed;
    task.inProcess = false;
    dispatch(putTaskThunk(task));
  }, [task]);

  return (
    <div className={visibility}>
      <button
        type="button"
        className={doneButtonClass}
        onClick={Done}
      >
        <DoneIcon />
      </button>
      <div className="Accordion">
        <AcordionInfo task={task} />
      </div>
      <button
        type="button"
        className={processButtonClass}
        onClick={Process}
      >
        <KeyboardDoubleArrowRightIcon />
      </button>
      <div className="accordion-edit">
        <AccordionEdit task={task} />
      </div>

      <button
        type="button"
        className="defaultButton trashButton"
        onClick={DeleteTask}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

// eslint-disable-next-line react/no-typos
Task.propTypes = {
  // eslint-disable-next-line react/require-default-props
  task: PropTypes.shape({
    id: PropTypes.string,
    taskLabel: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool.isRequired,
    inProcess: PropTypes.bool.isRequired,
    creationDate: PropTypes.string.isRequired,
    changed: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
  }),
};
