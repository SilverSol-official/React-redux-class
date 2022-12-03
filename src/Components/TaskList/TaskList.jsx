/* eslint-disable react/prop-types */
import React from 'react';
import { Task } from '../TaskListItem/taskListItem';
import './TaskList.css';

// eslint-disable-next-line import/prefer-default-export,react/prop-types
export const TaskList = ({ tasks }) => {
  // eslint-disable-next-line no-console
  console.log('tasks from list :', tasks);
  if (!tasks?.length) {
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
      {tasks.map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
};
