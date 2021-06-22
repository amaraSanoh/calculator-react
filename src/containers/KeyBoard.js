import React from 'react';
import Button from '@material-ui/core/Button';
import Acbutton from './Acbutton';

const KeyBoard = () => {

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
    return (
        <div className='row m-2'>
            <div className='col-xs-12 col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 border border-secondary p-2'>
                <Acbutton />
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            {
                                keys.map(key => (
                                    <div key={key.value} className='col-3 mb-2'>
                                        <Button variant="contained" color={key.color} fullWidth={true} onClick={() => console.log(key.value)}>{key.value}</Button>
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

export default KeyBoard;