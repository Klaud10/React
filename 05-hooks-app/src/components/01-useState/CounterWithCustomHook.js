import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
   
    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <div className="text-center">
            <h1>Counter with Hook : { state }</h1>   
            <hr />
            <button onClick={ () => increment (2) } className="btn btn-success ms-2"> +1 </button>
            <button onClick={ reset } className="btn btn-warning ms-2"> Reset </button>
            <button onClick={ () => decrement (2) } className="btn btn-danger ms-2"> -1 </button>
        </div>
    )
}
