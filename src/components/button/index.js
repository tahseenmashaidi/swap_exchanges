import React from 'react';
import './styles.scss'
import {Button} from '@blueprintjs/core'
export const CustomButton = ({loading,onClick,value}) => {
    return (
        <Button className={'button'} onClick={onClick} loading={loading}>
            {value}
        </Button>
    );
};
