import { Button } from '@material-ui/core';
import React from 'react';

const Acbutton = () => {
    return (
        <div className='row mb-2'>
            <div className='col-12'>
                <Button variant="contained" fullWidth={true} onClick={() => console.log('AC')}>AC</Button>
            </div>
        </div>
    );
};

export default Acbutton;