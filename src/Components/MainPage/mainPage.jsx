/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import { fetchAllTasksThunk } from '../../rdx/items/thunks';
import { selectAllTasks, selectAllTasksLoading } from '../../rdx/items/selectors';
import { TaskList } from '../TaskList/TaskList';
import CreateForm from '../CreateForm/createForm';
import FilterButton from '../SortButtons/sortButtons';
import DeletetButtons from '../DeleteButtons/deleteButtons';
import './mainPage.css';
// eslint-disable-next-line import/order
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export,react/function-component-definition
class MainPage extends React.Component {
  componentDidMount() {
    this.props.dispatchFetchAllTasksThunk();
  }

  render() {
    return (
      <>
        <div>
          <CreateForm />
        </div>
        <div className="filter">
          <FilterButton />
        </div>
        <div className="taskListContainer">
          {this.props.isAddLoading
            ? <div className="center"><Skeleton variant="rounded" height={90} animation="wave" className="mb" /></div>
            : <TaskList tasks={this.props.tasks} />}
          <Outlet />
        </div>
        <DeletetButtons />
      </>
    );
  }
}

MainPage.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    taskLabel: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    inProcess: PropTypes.bool.isRequired,
    creationDate: PropTypes.string.isRequired,
    changed: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
  })),
  isAddLoading: PropTypes.bool,
  dispatchFetchAllTasksThunk: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAddLoading: selectAllTasksLoading(state),
  tasks: selectAllTasks(state),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchAllTasksThunk: () => dispatch(fetchAllTasksThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
