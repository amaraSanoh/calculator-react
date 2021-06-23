import React from 'react';


import { connect } from 'react-redux';
import { calculatorSelector } from '../store/selectors/CalculatorSelector';

const NoticeBoard = ({calculatorInfos}) => {
    return (
        <div className='row m-2'>
            <div className='col-xs-12 col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 border border-success'>
                <div className='p-2'>
                    <div className='row' style={{height: 10}}>
                        <div className='col-12 text-end'>
                            {calculatorInfos.expression+' ='}
                        </div>
                    </div>
                    <div className='row p-2' style={{height: 55}}>
                        <div className='col-12 text-end fs-1 fw-bold'>
                            {calculatorInfos.compute}
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

export default connect(mapStateToProps)(NoticeBoard);