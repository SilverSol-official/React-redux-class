/* eslint-disable import/order */
import * as React from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { connect } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { addTasksThunk } from '../../rdx/items/thunks';
import { addTasksLoading } from '../../rdx/items/selectors';
import './createForm.css';
import PropTypes from 'prop-types';

const initialTask = {
  taskLabel: '',
  description: '',
  completed: false,
  inProcess: false,
  creationDate: '',
  changed: false,
  visible: true,
};

//   const onSubmit = React.useCallback(() => {
//     // eslint-disable-next-line no-console
//     dispatch(addTasksThunk({ task }));
//     setTask(initialTask);
//   }, [task, dispatch]);

// eslint-disable-next-line import/prefer-default-export
class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: initialTask,
    };
  }

  onChange = (event) => {
    const { task } = this.state;
    this.setState({
      task: {
        ...task,
        [event.target.name]: event.target.value,
      },
    });
  };

  onSubmit = () => {
    const { dispatchAddTasksThunk } = this.props;
    const { task } = this.state;
    dispatchAddTasksThunk({ task });
    this.setState({ task: initialTask });
  };

  render() {
    const { isAddLoading } = this.props;
    const { task } = this.state;
    return (
      <div>
        <div className="container ">
          <form
            className="formHolder"
          >
            <input
              type="text"
              placeholder="Your task:"
              className="w-100 inputHolder"
              name="taskLabel"
              onChange={this.onChange}
              value={task.taskLabel}
            />
            <input
              type="text"
              placeholder="Description:"
              className="w-100 inputHolder"
              name="description"
              onChange={this.onChange}
              value={task.description}
            />
            { isAddLoading
              ? <CircularProgress />
              : (
                <button
                  type="button"
                  className="w-100 btn-create"
                  onClick={this.onSubmit}
                >
                  <PostAddIcon
                    fontSize="large"
                  />
                </button>
              )}
          </form>
        </div>
      </div>
    );
  }
}

CreateForm.propTypes = {
  isAddLoading: PropTypes.bool,
  dispatchAddTasksThunk: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAddLoading: addTasksLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddTasksThunk: (task) => dispatch(addTasksThunk(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
