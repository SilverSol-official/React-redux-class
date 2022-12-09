/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-fragments */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
class FilterButton extends React.Component {
  onDone = () => {
    this.props.dispatchOnDone();
  };

  onAll = () => {
    this.props.dispatchOnAll();
  };

  onProcess = () => {
    this.props.dispatchOnProcess();
  };

  onOld = () => {
    this.props.dispatchOnOld();
  };

  onNew = () => {
    this.props.dispatchOnNew();
  };

  render() {
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
            <MenuItem onClick={this.onAll}>All</MenuItem>
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
                  <MenuItem onClick={this.onDone}>Done</MenuItem>
                  <MenuItem onClick={this.onProcess}>In Process</MenuItem>
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
                  <MenuItem onClick={this.onNew}>New to top</MenuItem>
                  <MenuItem onClick={this.onOld}>Old to top</MenuItem>
                </AccordionDetails>
              </Accordion>
            </MenuItem>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

FilterButton.propTypes = {
  dispatchOnDone: PropTypes.func,
  dispatchOnAll: PropTypes.func,
  dispatchOnProcess: PropTypes.func,
  dispatchOnOld: PropTypes.func,
  dispatchOnNew: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchOnDone: () => dispatch(showDoneTask()),
  dispatchOnAll: () => dispatch(showAllTasks()),
  dispatchOnProcess: () => dispatch(showProcessTasks()),
  dispatchOnOld: () => dispatch(showOldTasks()),
  dispatchOnNew: () => dispatch(showNewTasks()),
});

export default connect(null, mapDispatchToProps)(FilterButton);
