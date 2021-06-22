import React from 'react';
import Button from '@material-ui/core/Button';
import Acbutton from './Acbutton';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calculatorActions from '../store/actions/CalculatorActions';
import { calculatorSelector } from '../store/selectors/CalculatorSelector';
import Delete from './Delete';

const KeyBoard = ({calculatorInfos, calculatorActions}) => {

    const keys = [
                    {value: '7', color: 'default'}, 
                    {value: '8', color: 'default'}, 
                    {value: '9', color: 'default'}, 
                    {value: '/', color: 'primary'}, 
                    {value: '4', color: 'default'}, 
                    {value: '5', color: 'default'}, 
                    {value: '6', color: 'default'}, 
                    {value: '*', color: 'primary'}, 
                    {value: '1', color: 'default'}, 
                    {value: '2', color: 'default'}, 
                    {value: '3', color: 'default'}, 
                    {value: '-', color: 'primary'}, 
                    {value: '0', color: 'default'}, 
                    {value: '.', color: 'primary'}, 
                    {value: '=', color: 'secondary'}, 
                    {value: '+', color: 'primary'}
    ];

    const handleBtnPressed = btnPressedValue => {
        if(['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'].includes(btnPressedValue)) {
            calculatorActions.fetchNumber(btnPressedValue);
        } else if(btnPressedValue === '/'){
            console.log(btnPressedValue);
        } else if(btnPressedValue === '*'){
            console.log(btnPressedValue);
        } else if(btnPressedValue === '-'){
            console.log(btnPressedValue);
        } else if(btnPressedValue === '+'){
            console.log(btnPressedValue);
        } else if(btnPressedValue === '.'){
            console.log(btnPressedValue);
        } else if(btnPressedValue === '='){
            console.log(btnPressedValue);
        } 

    };

    return (
        <div className='row m-2'>
            <div className='col-xs-12 col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 border border-secondary p-2'>
                <div className='row'>
                    <div className='col-6'>
                        <Acbutton />
                    </div>
                    <div className='col-6'>
                        <Delete />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            {
                                keys.map(key => (
                                    <div key={key.value} className='col-3 mb-2'>
                                        <Button variant="contained" color={key.color} fullWidth={true} onClick={() => handleBtnPressed(key.value)}>{key.value}</Button>
                                    </div>       
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        calculatorInfos: calculatorSelector(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        calculatorActions:  bindActionCreators(calculatorActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyBoard);