// eslint-disable-next-line import/no-extraneous-dependencies
export const SHOW_ALL_TASKS = '@tasks/show_all_tasks';
export const SHOW_DONE_TASKS = '@tasks/show_done_tasks';
export const SHOW_PROGRESS_TASKS = '@tasks/show_progress_tasks';

export const SHOW_NEW_TASKS = '@tasks/show_new_tasks';
export const SHOW_OLD_TASKS = '@tasks/show_old_tasks';

export const DELETE_ALL = '@tasks/delete_all';
export const DELETE_DONE = '@tasks/delete_done';

export const GET_ALL_TASKS_SUCCESS = '@tasks/get_all_tasks_success';
export const GET_ALL_TASKS_REQUEST = '@tasks/get_all_tasks_request';
export const GET_ALL_TASKS_FAILURE = '@tasks/get_all_tasks_failure';

export const ADD_TASK_SUCCESS = '@tasks/add_task_success';
export const ADD_TASK_REQUEST = '@tasks/add_task_request';
export const ADD_TASK_FAILURE = '@tasks/add_task_failure';

export const CHANGE_PROGRESS_SUCCESS = '@tasks/change_progress_success';
export const CHANGE_PROGRESS_REQUEST = '@tasks/change_progress_request';
export const CHANGE_PROGRESS_FAILURE = '@tasks/change_progress_failure';

export const REMOVE_TASK_REQUEST = '@tasks/remove_task_request';
export const REMOVE_TASK_SUCCESS = '@tasks/remove_task_success';
export const REMOVE_TASK_FAILURE = '@tasks/remove_task_failure';

export const CHANGE_TASK_REQUEST = '@tasks/change_task_request';
export const CHANGE_TASK_SUCCESS = '@tasks/change_task_success';
export const CHANGE_TASK_FAILURE = '@tasks/change_task_failure';

export const showDoneTask = () => ({
  type: SHOW_DONE_TASKS,
});

export const showAllTasks = () => ({
  type: SHOW_ALL_TASKS,
});

export const showProcessTasks = () => ({
  type: SHOW_PROGRESS_TASKS,
});

export const showOldTasks = () => ({
  type: SHOW_OLD_TASKS,
});

export const showNewTasks = () => ({
  type: SHOW_NEW_TASKS,
});

export const deleteAll = () => ({
  type: DELETE_ALL,
});

export const deleteDone = () => ({
  type: DELETE_DONE,
});

export const getAllTasksSuccess = (tasks) => ({
  type: GET_ALL_TASKS_SUCCESS,
  tasks,
});

export const getAllTasksRequest = () => ({
  type: GET_ALL_TASKS_REQUEST,
});

export const getAllTasksFailure = (error) => ({
  type: GET_ALL_TASKS_FAILURE,
  error,
});

export const addTaskSuccess = ({ task }) => ({
  type: ADD_TASK_SUCCESS,
  task,
});

export const addTaskRequest = () => ({
  type: ADD_TASK_REQUEST,
});

export const addTaskFailure = (error) => ({
  type: ADD_TASK_FAILURE,
  error,
});

export const changeProgressSuccess = (props) => ({
  type: CHANGE_PROGRESS_SUCCESS,
  props,
});

export const changeProgressRequest = () => ({
  type: CHANGE_PROGRESS_REQUEST,
});

export const changeProgressFailure = (error) => ({
  type: CHANGE_PROGRESS_FAILURE,
  error,
});

export const removeTaskRequest = (id) => ({
  type: REMOVE_TASK_REQUEST,
  id,
});

export const removeTaskFailure = ({ error, id }) => ({
  type: REMOVE_TASK_FAILURE,
  id,
  error,
});

export const removeTaskSuccess = ({ id }) => ({
  type: REMOVE_TASK_SUCCESS,
  id,
});

export const changeTaskRequest = ({ id }) => ({
  type: CHANGE_TASK_REQUEST,
  id,
});

export const changeTaskFailure = ({ error, id }) => ({
  type: CHANGE_TASK_FAILURE,
  id,
  error,
});

export const changeTaskSuccess = ({ item }) => ({
  type: CHANGE_TASK_SUCCESS,
  item,
});
