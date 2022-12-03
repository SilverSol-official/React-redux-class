import * as React from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export function AcordionInfo({ task }) {
  let dateLine;
  if (task.changed) {
    dateLine = `edited: ${task.creationDate} `;
  } else {
    dateLine = `created: ${task.creationDate} `;
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{task.taskLabel}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {task.description}
          </Typography>
          <Typography>
            {dateLine}
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
// eslint-disable-next-line react/no-typos
AcordionInfo.propTypes = {
  // eslint-disable-next-line react/require-default-props
  task: PropTypes.shape({
    id: PropTypes.string,
    taskLabel: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool.isRequired,
    inProcess: PropTypes.bool.isRequired,
    creationDate: PropTypes.string.isRequired,
    changed: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
  }),
};
