import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import { fetchAllTasksThunk } from '../../rdx/items/thunks';
import { selectAllTasks, selectAllTasksLoading } from '../../rdx/items/selectors';

import { TaskList } from '../TaskList/TaskList';
import { CreateForm } from '../CreateForm/createForm';
import { FilterButton } from '../SortButtons/sortButtons';
import { DeletetButtons } from '../DeleteButtons/deleteButtons';
import './mainPage.css';
// eslint-disable-next-line import/order
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export,react/function-component-definition
export const MainPage = () => {
  const tasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllTasksLoading);
  React.useEffect(() => {
    dispatch(fetchAllTasksThunk());
  }, []);

  return (
    <>
      <div>
        <CreateForm />
      </div>
      <div className="filter">
        <FilterButton />
      </div>
      <div className="taskListContainer">
        {isLoading
          ? <div className="center"><Skeleton variant="rounded" height={90} animation="wave" className="mb" /></div>
          : <TaskList tasks={tasks} />}
        <Outlet />
      </div>
      <DeletetButtons />
    </>
  );
};
