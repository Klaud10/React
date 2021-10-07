import React from 'react';

export const Hijo = React.memo (({ numero, incrementar }) => {

    console.log('  Estoy gastando mucha RAM :(  ');

    return (
        <button
            className="btn btn-success mx-1"
            onClick={ () => {
                incrementar( numero )}}
        >
            { numero }
        </button>
    );
});
