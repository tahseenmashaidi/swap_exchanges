import React from 'react';
import {Link} from "react-router-dom";

export  const H1 = ({value,className}) => {
    return (
        <h1 className={`h1 ${className || ''}`}>
            {value}
        </h1>
    );
}

export const P = ({value,className}) => {
    return (
        <p className={`p ${className || ''}`}>
            {value}
        </p>
    );
};

export const LinkTo=({to,value,className})=>{
    return <Link  className={`${className || ''}`} to={to}>{value}</Link>
};
