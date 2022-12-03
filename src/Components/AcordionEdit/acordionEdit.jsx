import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { putTaskThunk } from '../../rdx/items/thunks';
import './accordionEdit.css';

// eslint-disable-next-line import/prefer-default-export,react/function-component-definition
export const AccordionEdit = ({ task }) => {
  const initialTask = {
    id: task.id,
    taskLabel: task.taskLabel,
    description: task.description,
    completed: task.completed,
    inProcess: task.inProcess,
    creationDate: '',
    changed: true,
    visible: true,
  };

  const [edit, setEdit] = React.useState(initialTask);
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

  const onEditChange = React.useCallback((event) => {
    setEdit({
      ...edit,
      [event.target.name]: event.target.value,
    });
  }, [edit]);

  const dispatch = useDispatch();
  const onSave = React.useCallback(() => {
    edit.creationDate = date;
    dispatch(putTaskThunk(edit));
  }, [edit, dispatch]);

  return (
    <div>
      <Accordion
        disableGutters
        elevation={0}
        sx={{
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<EditIcon className="penIcon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="penLabel"
        />
        <AccordionDetails className="editAccordion">
          <div className="containere ">
            <form
              className="formHolder"
            >
              <input
                type="text"
                placeholder="Your task:"
                className="w-100e inputHoldere one"
                name="taskLabel"
                onChange={onEditChange}
                value={edit.taskLabel}
              />
              <input
                type="text"
                placeholder="Description"
                className="w-100e inputHoldere two"
                name="description"
                onChange={onEditChange}
                value={edit.description}
              />
              <button
                type="button"
                className="w-100e btn-createe"
                onClick={onSave}
              >
                <PostAddIcon
                  fontSize="small"
                />
              </button>

            </form>
          </div>

        </AccordionDetails>
      </Accordion>

    </div>
  );
};

// eslint-disable-next-line react/no-typos
AccordionEdit.propTypes = {
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
