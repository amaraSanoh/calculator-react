import React from 'react';
import AppBackdrop from '../components/AppBackdrop';
import KeyBoard from './KeyBoard';
import NoticeBoard from './NoticeBoard';

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