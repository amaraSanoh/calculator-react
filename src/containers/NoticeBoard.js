import React from 'react';

const NoticeBoard = () => {
    return (
        <div className='row m-2'>
            <div className='col-xs-12 col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 border border-success'>
                <div className='p-2'>
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
                </div>
            </div>
        </div>
    );
};

export default NoticeBoard;