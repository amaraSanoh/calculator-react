import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { appColors } from '../constants/Constants';

import { connect } from 'react-redux';
import { calculatorSelector } from '../store/selectors/CalculatorSelector';
import { appActions } from '../constants/Constants';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: appColors.white,
  },
}));

function ApppBackdrop({calculatorInfos}) {
    
    const classes = useStyles();
    return (
      <div>
        <Backdrop className={classes.backdrop} open={calculatorInfos.eventType === appActions.computeRequest && calculatorInfos.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
}

const mapStateToProps = state => {
  return {
      calculatorInfos: calculatorSelector(state)
  }
}

export default connect(mapStateToProps)(ApppBackdrop);