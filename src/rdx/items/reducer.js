/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import { v4 as uuidv4 } from 'uuid';
import {
  // eslint-disable-next-line no-unused-vars
  SHOW_DONE_TASKS,
  SHOW_ALL_TASKS,
  SHOW_PROGRESS_TASKS,
  SHOW_OLD_TASKS,
  SHOW_NEW_TASKS,
  DELETE_DONE,
  DELETE_ALL,
  GET_ALL_TASKS_SUCCESS,
  GET_ALL_TASKS_REQUEST,
  GET_ALL_TASKS_FAILURE,
  ADD_TASK_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  REMOVE_TASK_FAILURE,
  REMOVE_TASK_REQUEST,
  REMOVE_TASK_SUCCESS,
  CHANGE_TASK_FAILURE,
  CHANGE_TASK_REQUEST,
  CHANGE_TASK_SUCCESS,
} from './actions';

const initialState = {
  tasks: [],
  isLoading: false,
  isAddLoading: false,
};

let index;
let newData;
let old;
let newItem;

// eslint-disable-next-line default-param-last,import/prefer-default-export
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DONE_TASKS:
      // eslint-disable-next-line array-callback-return
      state.tasks.forEach((elem) => {
        if (elem.completed) {
          // eslint-disable-next-line no-param-reassign
          elem.visible = true;
        } else {
          // eslint-disable-next-line no-param-reassign
          elem.visible = false;
        }
      });
      return {
        ...state,
        tasks: [...state.tasks],
      };

    case SHOW_ALL_TASKS:
      // eslint-disable-next-line array-callback-return, no-param-reassign
      state.tasks.forEach((elem) => { elem.visible = true; });
      return {
        ...state,
        tasks: [...state.tasks],
      };

    case SHOW_PROGRESS_TASKS:
      // eslint-disable-next-line array-callback-return
      state.tasks.forEach((elem) => {
        if (elem.inProcess) {
          // eslint-disable-next-line no-param-reassign
          elem.visible = true;
        } else {
          // eslint-disable-next-line no-param-reassign
          elem.visible = false;
        }
      });
      return {
        ...state,
        tasks: [...state.tasks],
      };

    case SHOW_OLD_TASKS:
      // eslint-disable-next-line array-callback-return
      state.tasks.sort((a, b) => Date.parse(a.creationDate) - Date.parse(b.creationDate));
      return {
        ...state,
        tasks: [...state.tasks],
      };

    case SHOW_NEW_TASKS:
      // eslint-disable-next-line array-callback-return
      state.tasks.sort((a, b) => Date.parse(b.creationDate) - Date.parse(a.creationDate));
      return {
        ...state,
        tasks: [...state.tasks],
      };

    case DELETE_DONE:
      newData = state.tasks.filter((item) => !item.completed);
      return {
        ...state,
        tasks: [...newData],
      };

    case DELETE_ALL:
      return {
        ...state,
        tasks: [],
      };

    case GET_ALL_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.tasks,
        isLoading: false,
      };

    case GET_ALL_TASKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ALL_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case ADD_TASK_SUCCESS: {
      return {
        ...state,
        tasks: [...state.tasks, action.task],
        isAddLoading: false,
      };
    }

    case ADD_TASK_REQUEST:
      return {
        ...state,
        isAddLoading: true,
      };

    case ADD_TASK_FAILURE:
      return {
        ...state,
        isAddLoading: false,
        error: action.error,
      };

    case REMOVE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.filter((i) => i.id !== action.id),
        removeError: null,
      };
    }
    case REMOVE_TASK_REQUEST: {
      return {
        ...state,
        removeError: null,
      };
    }
    case REMOVE_TASK_FAILURE: {
      return {
        ...state,
        removeError: action.error,
      };
    }
    case CHANGE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.map((i) => (i.id === action.item.id ? action.item : i)),
        modifyError: null,
      };
    }
    case CHANGE_TASK_REQUEST: {
      return {
        ...state,
        modifyError: null,
      };
    }
    case CHANGE_TASK_FAILURE: {
      return {
        ...state,
        modifyError: action.error,
      };
    }
    default:
      return state;
  }
};
