import React, { useRef } from 'react';
import './useReef.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const  handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    };  

    return (
        <div className="mb-3">
            <h1>Focus Screen</h1>
            
            <label className="form-label"></label>
            
            <input  
                ref={ inputRef }
                className="form-control mb-3"
                placeholder="Nombre"
            />

            <button className="btn btn-outline-primary"
                    onClick={ handleClick }
            >
                Focus
            </button>
            
        </div>
    )
}
