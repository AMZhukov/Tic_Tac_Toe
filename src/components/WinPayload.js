import React from 'react';

import ContainedButtons from './ContainedButtons';

export default function WinPayload (props) { 
    return(
        <div >
            <h3>Выйграл {props.name}</h3> 
            <ContainedButtons onClick={() => {
                {/* console.log(10); */}
                window.location.reload();
            }} text="В игру"/>
        </div>
    );
}

