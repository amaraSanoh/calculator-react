import React from 'react';
import Paper from '@material-ui/core/Paper';

const NoticeBoard = () => {
    return (
        <div className='row m-2'>
            <div className='col-xs-12 col-sm-12 offset-md-2 col-md-8 offset-lg-2 col-lg-8'>
                <Paper elevation={5} className={'p-3 col-xs-12 col-sm-12 offset-md-2 col-md-8 offset-lg-2 col-lg-8 bg-light'}>
                    <div className='row'>
                        <div className='col-12 text-end'>
                            12+3+76-89*9/12/23
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-12 text-end fs-1 fw-bold'>
                            = 12234
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    );
};

export default NoticeBoard;