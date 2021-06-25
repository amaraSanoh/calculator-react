import React from 'react';
import AppBackdrop from '../containers/AppBackdrop';
import KeyBoard from '../containers/KeyBoard';
import NoticeBoard from '../containers/NoticeBoard';

const Calculator = () => {
    
    return (
        <div className='mt-5'>
            <AppBackdrop />
            <NoticeBoard />
            <KeyBoard />
        </div>
    );
};

export default Calculator;