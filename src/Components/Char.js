import React from 'react';

const char = (props) => {
    
    const chars = (
        <div>
            {props.changed.map((char, index) => {
                let generateKey = `${index}thIndex`;
                return(
                    <div 
                        className="CharComponent" 
                        key={generateKey}
                        id={(index).toString()}
                        onClick={props.clickat}>
                            <p children={char}/>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div>
            {chars}
        </div>
    )
}

export default char;