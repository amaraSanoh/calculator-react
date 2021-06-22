import React from 'react';
import KeyBoard from './KeyBoard';
import NoticeBoard from './NoticeBoard';

const Calculator = () => {
    return (
        <div className='mt-5'>
            <NoticeBoard />
            <KeyBoard />
        </div>
    );
};

export default Calculator;