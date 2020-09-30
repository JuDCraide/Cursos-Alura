import React from 'react';

import {NavLink} from'react-router-dom'

const Link = props => {
    return(
        <NavLink activeStyle={{fontWeight:"bold"}}{...props}/>
    );
}

export default Link;
