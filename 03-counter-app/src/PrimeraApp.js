import React from 'react';

//___Funtional components___

const PrimeraApp = () => {

const saludo = 'Hola mundo';

    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
            <p>Mi primera App</p>
        </>
    );
}; 

export default PrimeraApp;