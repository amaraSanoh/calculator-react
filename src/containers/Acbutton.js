import { Button } from '@material-ui/core';
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calculatorActions from '../store/actions/CalculatorActions';

const Acbutton = ({calculatorActions}) => {
    return (
        <div className='row mb-2'>
            <div className='col-12'>
                <Button variant="contained" fullWidth={true} onClick={() => calculatorActions.fetchClean()}>AC</Button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        calculatorActions:  bindActionCreators(calculatorActions, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(Acbutton);