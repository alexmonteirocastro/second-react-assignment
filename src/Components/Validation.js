import React from 'react';

const validation = (props) => {
    let validateLength;

    props.length < 5 ? validateLength = 'Text too short!' : validateLength = 'Text long enough.';
    
    return (<div className="Validation"><p>{validateLength}</p></div>);
}

export default validation;