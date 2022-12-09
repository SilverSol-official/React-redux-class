/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { putTaskThunk } from '../../rdx/items/thunks';
import './accordionEdit.css';

// eslint-disable-next-line import/prefer-default-export,react/function-component-definition
class AccordionEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: {
        id: this.props.task.id,
        taskLabel: this.props.task.taskLabel,
        description: this.props.task.description,
        completed: this.props.task.completed,
        inProcess: this.props.task.inProcess,
        creationDate: '',
        changed: true,
        visible: true,
      },
    };
  }

  onEditChange = (event) => {
    this.setState({
      ...edit,
      [event.target.name]: event.target.value,
    });
  };

  onSave = () => {
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    edit.creationDate = date;
    this.props.dispatchPutTaskThunk(edit);
  };

  render() {
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
                  onChange={this.onEditChange}
                  value={this.state.edit.taskLabel}
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="w-100e inputHoldere two"
                  name="description"
                  onChange={this.onEditChange}
                  value={this.state.edit.description}
                />
                <button
                  type="button"
                  className="w-100e btn-createe"
                  onClick={this.onSave}
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
  }
}

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
  dispatchPutTaskThunk: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchPutTaskThunk: (edit) => dispatch(putTaskThunk(edit)),
});

export default connect(null, mapDispatchToProps)(AccordionEdit);
