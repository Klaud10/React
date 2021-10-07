import React, {useState} from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExamapleReef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Reef</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button
                className="btn btn-success mt-5"
                onClick={ () => { setShow ( !show )}}
            >
                Mostrar/Ocultar
            </button>
        </div>
    )
}
