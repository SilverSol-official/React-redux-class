/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
import {
  addTaskApi,
  fetchAllTasksApi,
  removeTaskApi,
  putTaskApi,
} from '../../Services/taskStoreApi';
import {
  getAllTasksSuccess,
  getAllTasksRequest,
  getAllTasksFailure,
  addTaskSuccess,
  addTaskFailure,
  addTaskRequest,
  removeTaskRequest,
  removeTaskFailure,
  removeTaskSuccess,
  changeTaskSuccess,
  changeTaskFailure,
  changeTaskRequest,
} from './actions';

/* eslint-disable import/prefer-default-export */
export const fetchAllTasksThunk = () => async (dispatch) => {
  dispatch(getAllTasksRequest());
  try {
    const response = await fetchAllTasksApi();
    console.log('response :', response);
    dispatch(getAllTasksSuccess(response.response.task));
  } catch (error) {
    dispatch(getAllTasksFailure(error));
    console.log('error :', error);
  }
};

export const addTasksThunk = ({ task }) => async (dispatch) => {
  dispatch(addTaskRequest());
  console.log('thunk task :', task);
  try {
    const response = await addTaskApi({ task });
    if (!response.success) {
      throw (Error('Something went wrong'));
    }
    dispatch(addTaskSuccess({ task: response.response }));
  } catch (error) {
    dispatch(addTaskFailure({ error }));
  }
};

export const removeTaskThunk = (id) => async (dispatch) => {
  dispatch(removeTaskRequest({ id }));
  try {
    const response = await removeTaskApi({ id });
    if (!response.success) {
      throw (Error('Something went wrong'));
    }
    dispatch(removeTaskSuccess({ id }));
  } catch (error) {
    dispatch(removeTaskFailure({ error, id }));
  }
};

export const putTaskThunk = (item) => async (dispatch) => {
  dispatch(changeTaskRequest({ id: item.id }));
  try {
    const response = await putTaskApi({ item });
    if (!response.success) {
      throw (Error('Something went wrong'));
    }
    dispatch(changeTaskSuccess({ item: response.response }));
  } catch (error) {
    dispatch(changeTaskFailure({ error, id: item.id }));
  }
};
