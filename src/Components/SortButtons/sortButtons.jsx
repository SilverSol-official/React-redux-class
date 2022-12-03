/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-fragments */
import React from 'react';
import { useDispatch } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  MenuItem, Typography, AccordionDetails, AccordionSummary, Accordion,
} from '@mui/material';
import {
  showDoneTask, showAllTasks, showProcessTasks, showOldTasks, showNewTasks,
} from '../../rdx/items/actions';
// eslint-disable-next-line import/no-unresolved
import './filterButton.css';

// eslint-disable-next-line import/prefer-default-export,react/function-component-definition
export const FilterButton = () => {
  const dispatch = useDispatch();
  const onDone = React.useCallback(() => {
    dispatch(showDoneTask());
  }, [dispatch]);
  const onAll = React.useCallback(() => {
    dispatch(showAllTasks());
  }, [dispatch]);
  const onProcess = React.useCallback(() => {
    dispatch(showProcessTasks());
  }, [dispatch]);
  const onOld = React.useCallback(() => {
    dispatch(showOldTasks());
  }, [dispatch]);
  const onNew = React.useCallback(() => {
    dispatch(showNewTasks());
  }, [dispatch]);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter by :</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem onClick={onAll}>All</MenuItem>
          <MenuItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Status</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuItem onClick={onDone}>Done</MenuItem>
                <MenuItem onClick={onProcess}>In Process</MenuItem>
              </AccordionDetails>
            </Accordion>
          </MenuItem>
          <MenuItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Date</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuItem onClick={onNew}>New to top</MenuItem>
                <MenuItem onClick={onOld}>Old to top</MenuItem>
              </AccordionDetails>
            </Accordion>
          </MenuItem>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

// export default function MenuPopupState() {
//   return (
// <div className="searchContainer">
//   <button type="button" className="searchButtons" onClick={onAll}>All</button>
//   <button type="button" className="searchButtons" onClick={onDone}>Done</button>
//   <button type="button" className="searchButtons" onClick={onProcess}>In process</button>
//   <button type="button" className="searchButtons" onClick={onNew}>New to top</button>
//   <button type="button" className="searchButtons" onClick={onOld}>Old to top</button>
// </div>
//   );
// }
