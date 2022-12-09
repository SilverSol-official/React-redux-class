/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import Task from '../TaskListItem/taskListItem';
import './TaskList.css';

// eslint-disable-next-line import/prefer-default-export,react/prop-types
export class TaskList extends React.Component {
  // eslint-disable-next-line no-console
  render() {
    console.log('tasks from list :', this.props.tasks);
    if (!this.props.tasks?.length) {
      return (
        <div>
          <h1>
            No tasks to display!
          </h1>
        </div>
      );
    }
    return (
      <div className="taskList mt-2">
        {this.props.tasks.map((task) => <Task key={task.id} task={task} />)}
      </div>
    );
  }
}
