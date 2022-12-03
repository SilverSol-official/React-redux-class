import React from 'react';
import './DeleteButtons.css';
import { useDispatch } from 'react-redux';
import { deleteAll, deleteDone } from '../../rdx/items/actions';

// eslint-disable-next-line import/prefer-default-export,react/function-component-definition
export const DeletetButtons = () => {
  const dispatch = useDispatch();
  const onAllDelete = React.useCallback(() => {
    dispatch(deleteAll());
  }, [dispatch]);
  const onDoneDelete = React.useCallback(() => {
    dispatch(deleteDone());
  }, [dispatch]);
  return (
    <div className="deleteContainer">
      <button type="button" className="deleteButtons" onClick={onDoneDelete}>Delete done</button>
      <button type="button" className="deleteButtons" onClick={onAllDelete}>Delete all</button>
    </div>
  );
};
