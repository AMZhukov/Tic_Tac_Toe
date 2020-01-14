import React from 'react';

import ContainedButtons from './ContainedButtons';

export default function WinPayload (props) { 
    return(
        <div >
            <h3>Выйграл {props.name}</h3> 
            <ContainedButtons text="В игру"/>
        </div>
    );
}

