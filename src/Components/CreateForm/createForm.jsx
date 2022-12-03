import * as React from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { addTasksThunk } from '../../rdx/items/thunks';
import { addTasksLoading } from '../../rdx/items/selectors';
import './createForm.css';

const initialTask = {
  taskLabel: '',
  description: '',
  completed: false,
  inProcess: false,
  creationDate: '',
  changed: false,
  visible: true,
};

// eslint-disable-next-line import/prefer-default-export
export function CreateForm() {
  const [task, setTask] = React.useState(initialTask);
  const isAddLoading = useSelector(addTasksLoading);
  const onChange = React.useCallback((event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  }, [task]);

  const dispatch = useDispatch();

  const onSubmit = React.useCallback(() => {
    // eslint-disable-next-line no-console
    dispatch(addTasksThunk({ task }));
    setTask(initialTask);
  }, [task, dispatch]);
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
            onChange={onChange}
            value={task.taskLabel}
          />
          <input
            type="text"
            placeholder="Description:"
            className="w-100 inputHolder"
            name="description"
            onChange={onChange}
            value={task.description}
          />
          { isAddLoading
            ? <CircularProgress />
            : (
              <button
                type="button"
                className="w-100 btn-create"
                onClick={onSubmit}
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
