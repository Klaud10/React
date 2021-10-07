import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';
import '../examples.css'

export const MemoHook = () => {

    const { counter, increment } = useCounter(800); 
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memo-Hook</h1>
            <hr />
            <h3>Counter: <small>{ counter } </small></h3>
            <hr />
            <p>{ memoProcesoPesado }</p>
            <button
                className="btn btn-success mx-1"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-success mx-1"
                onClick={() => {
                    setShow( !show )
                }}
            >
                Mostrar/Ocultar { JSON.stringify ( show )}
            </button>
        </div>
    )
}
